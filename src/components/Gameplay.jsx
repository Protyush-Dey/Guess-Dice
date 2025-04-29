import styled from  "styled-components"
import Totalscore from "./Totalscore"
import Numberselect from "./Numberselect"
import Rules from "./Rules"
import ROlldice from "./ROlldice"
import { useState } from "react";
import { Button, ReverseStyle } from "../styled/buttun";
const  Gameplay = () => {
    const [score, setScore] = useState(0)
    const [selectNumber, setSelectNumber] = useState();
    const [dice, setDice] = useState(1)
    const [error, setError] = useState("")
    const[showRules, setShowRules] = useState(false)
    const generateRandomNumber =( min,max) => {
        
        return Math.floor(Math.random() * (max-min)+min)
    }
    const resetScore = () => {
        setScore(0)
    }

    const rollDice = () => {
        if (selectNumber === undefined) {
            setError("You have not selected any number")
            return
        }
        
        const randomNumber = generateRandomNumber(1, 7)
        setDice((prev) => randomNumber)
        console.log(randomNumber);
        if (randomNumber === setSelectNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev -2)
        }
        setSelectNumber(undefined)
    }
  return (
    < Mainsection>
        <div className="topsection">
        <Totalscore score={score}/>
        <Numberselect
           selectNumber={selectNumber} setSelectNumber={setSelectNumber} error={error} setError={setError}
/> 
        </div>
    <ROlldice  rollDice={rollDice} dice={dice}/>
    <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <ReverseStyle 
        onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"}
         Rules</ReverseStyle>
    </div>
    {showRules && <Rules/>}
    </ Mainsection>
  )
}

export default Gameplay
const Mainsection=styled.div`
.topsection{
    padding: 30px 80px;
    display: flex;
    justify-content: space-between;
    align-items: end;
}
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        
    }
`