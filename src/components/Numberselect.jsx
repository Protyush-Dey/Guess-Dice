import styled from  "styled-components"
import { useState } from "react";
const Numberselect = ({error, setError,selectNumber, setSelectNumber}) => {
    const arrNum=[1,2,3,4,5,6]
    const numberSelectorHandler=(value)=>{
      setSelectNumber(value)
      setError("")
    }
  return (
    
    <NuberSelector>
      <p className="error">{error}</p>
   <div className="flex">
        {arrNum.map((value,i)=>(
            <Box
            isSelected={value==selectNumber}
         key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>))}
    
   </div>
   <p>Select Number</p>
   </NuberSelector> 
  )
}

export default Numberselect

const NuberSelector=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.error{
    color: red;}
.flex

{
    display: flex;
    gap: 15px; 
}
p{
font-size: 20px;
font-weight: 500;
}
`
const Box=styled.div`
height: 60px;   
width: 60px;
border: 1px solid #000;
display:grid;
place-items: center;
font-size: 20px;
font-weight: 500;
background-color:${props=>props.isSelected?"#000":"#fff"};

color:${props=>props.isSelected?"#fff":"#000"};`