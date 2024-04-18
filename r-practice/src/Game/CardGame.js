import React, { useEffect, useState } from "react";
import '../style/CardGame.css'

function CardGame () {
    const numOfCards = 20
    const icon = ['🍕','🍔','🍟','🍗','🥩','🍖','🌮','🥞','🥨','🍧']
    const [pairs, setPairs] = useState([])

    const randomNumber = (n) => {
        return Math.floor(Math.random()*n)
    }

    const $pairs = []
    const makeCardPair = () => {
        let idx = randomNumber(icon.length)

        let isValidPair = [...$pairs].filter(pair => pair === icon[idx])
        if(isValidPair.length === 2){
            return makeCardPair()
        }
        $pairs.push(icon[idx])

        if($pairs.length<numOfCards){
            makeCardPair()
        }
    }

    const BackFlip = () => {
        let cards = document.querySelectorAll('.card')
        for (let i = 0; i< cards.length; i++){
            cards[i].classList.add('forward')
            setTimeout(() => {
                cards[i].classList.remove('forward')
            }, 2000);
        }
    }

    async function starter (){
        makeCardPair()
        await setPairs([...$pairs])
        BackFlip()
    }

    useEffect(()=>{
        starter()
    },[])

    const [selectIds, setSelectIds] = useState([])

    const [finish, setFinsh] = useState([])

    const flip = async (id) => {

        if(!selectIds.includes(id)){
           await setSelectIds([...selectIds, id])
           correctCard()
        }
        
    }

    const correctCard = () => {
        const cards = document.querySelectorAll('.active span')
        if(cards.length===2){
            if(cards[0].innerText === cards[1].innerText){
                cards.forEach(card=>{
                    // card.parentElement.classList.remove('active')
                    console.log(finish)
                })
                setFinsh([...finish, cards[0].parentElement.id, cards[1].parentElement.id])
            }else{
                setSelectIds([])
            }
        }
    }

    

    useEffect(()=>{
        if(selectIds.length===2){
            // setSelectIds([])
            
        }
        // if(selectIds.length>2){
        //     setSelectIds([])
        // }
        
    },[selectIds])

    return(
        <div className="card-container">
        {pairs.length>0 && pairs.map((data, id)=>{
            const active = selectIds.includes(id)
            const end = finish.includes(id)
            // const activeStyle = active ? 'active' : end ? 'finished' : 'back'
            const endStyle = end ? 'finished' : active ? 'active' : 'back'
            return (
                    <div key={id} className={`card ${endStyle}`} id={id}
                    onClick={()=>flip(id)}><span>{data}</span></div>
            )
        })}
        </div>
    )
}
export default CardGame