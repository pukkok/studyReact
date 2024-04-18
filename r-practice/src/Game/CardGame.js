import React, { useEffect, useState } from "react";
import '../style/CardGame.css'

function CardGame () {
    const numOfCards = 20

    const foods = ['🍕','🍔','🍟','🍗','🥩','🍖','🌮','🥞','🥨','🍧']
    // const animals = ['🐺','🐱','🦁','🐯','🦒','🐮','🐷','🐰','🐻','🐹','🐼','🐨','🐸','🐭','🦓']

    const [pairs, setPairs] = useState([])

    const randomNumber = (n) => {
        return Math.floor(Math.random()*n)
    }

    const $pairs = []
    const makeCardPair = () => {
        let idx = randomNumber(numOfCards / 2)

        let isValidPair = [...$pairs].filter(pair => pair === foods[idx])
        if(isValidPair.length === 2){
            return makeCardPair()
        }
        $pairs.push(foods[idx])

        if($pairs.length<numOfCards){
            makeCardPair()
        }
    }

    const BackFlip = () => {
        let cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.classList.remove('back')
            setTimeout(() => {
                card.classList.add('back')
            }, 5000);
        })
    }

    async function starter (){
        makeCardPair()
        await setPairs([...$pairs])
        BackFlip()
    }

    useEffect(()=>{
        starter()
    },[])

    const [cards, setCards] = useState({
        active : [],
        finished : []
    })

    const flip = (id) => {
        if(!cards.finished.includes(id)){
            setCards({...cards, active: [...cards.active, id]})
        }
    }

    

    useEffect(()=>{
        const correctCard = () => {
            const A = document.getElementById(cards.active[0])
            const B = document.getElementById(cards.active[1])
            let valueA = A.querySelector('span').innerText
            let valueB = B.querySelector('span').innerText
            if(valueA === valueB){
                setCards({...cards,
                    active: [], 
                    finished:[...cards.finished, ...cards.active]
                })
            }else{
                setCards({...cards,
                    active: []
                })
            }
        }

        if(cards.active.length===2){
            setTimeout(correctCard, 500)
        }
        if(cards.finished.length===numOfCards){
            alert('승리')
            setCards({...cards, active : [], finished: []})
            let restart = prompt('다시하기 예/아니오','예')
            if(restart==='예'){
                starter()
            }
        }
        
    },[cards])

    

    return(
        <div className="card-container">
        {pairs.length>0 && pairs.map((data, id)=>{
            const {active, finished} = cards
            const activeCard = active.includes(id)
            const finishedCard = finished.includes(id)
            const activeStyle = activeCard ? 'active' : 'back'
            const finishedStyle = finishedCard ? 'finished' : ''
            return (
                <div key={id} className={`card ${activeStyle} ${finishedStyle}`} id={id}
                onClick={()=>flip(id)}><span>{data}</span>
                </div>
            )
        })}
        </div>
    )
}
export default CardGame