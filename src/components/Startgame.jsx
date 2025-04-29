import styled from 'styled-components'
import { Button } from '../styled/buttun'
const Startgame = ({toogle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />

        </div>
         <div className='content'>
            <h1>Dice game</h1>
            <Button onClick={toogle}>Play Now</Button>
         </div>
    </Container>

  )
}

export default Startgame
 const Container =styled.div`
 max-width: 1180px;
 display: flex;
 margin: 0 auto;
 height: 100vh;
    justify-content: space-between;
 align-items: center;
 img{
 height: 500px;}
 .content{
 h1{
 font-size: 100px;
 white-space: nowrap;
 }
 }
 `;
 