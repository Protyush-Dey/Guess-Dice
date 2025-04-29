import styled from  "styled-components"

const Totalscore = ({score}) => {
  return (
    <Scorecontainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Scorecontainer>  )
}

export default Totalscore
const Scorecontainer=styled.div`
max-width: 200px;
text-align: center;

h1{
    text-align: center;
    font-size: 80px;
    line-height: 80px;
}
   p{
   font-size: 20px;
   font-weight:500;
`