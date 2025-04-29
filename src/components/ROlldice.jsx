import { useState } from 'react'
import styled from 'styled-components'

const ROlldice = ({rollDice, dice}) => {
    
   

  return (
    <DiceContainer>
        <div className="Dice"
        onClick={rollDice  }>
            <img src={`/images/dice/dice_${dice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default ROlldice
const DiceContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .Dice{
    cursor: pointer;}
    p{
        font-size: 20px;
        font-weight: 600;
        
    }    
`
