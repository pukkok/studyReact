import React, { useState,useEffect } from "react";

function CardPairMaker (selectStyle) {

    const foods = ['🍕','🍔','🍟','🍗','🥩','🍖','🌮','🥞','🥨','🍧']
    const animals = ['🐺','🐱','🦁','🐯','🦒','🐮','🐷','🐰','🐻','🐹','🐼','🐨','🐸','🐭','🦓']

    const randomNumber = (n) => {
        return Math.floor(Math.random()*n)
    }
    
    const _pairs = []
    useEffect(()=>{
        const makeCardPair = (style) => {
            let idx = randomNumber(style.length)
    
            let isValidPair = [..._pairs].filter(pair => pair === style[idx])
            if(isValidPair.length === 2){
                return makeCardPair()
            }
            _pairs.push(style[idx])
    
            if(_pairs.length<style.length*2){
                makeCardPair()
            }
        }

        makeCardPair(selectStyle)
    },[])

    return _pairs

}
export default CardPairMaker