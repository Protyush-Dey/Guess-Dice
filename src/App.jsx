import Gameplay from "./components/Gameplay";
import Startgame from "./components/Startgame"
import { useState } from "react";
function App() {
 const [isGameStarted, setIsGameStarted] = useState(false);
 const toggleGamePlay=()=>{
  setIsGameStarted((prev)=>!prev)
 }
  return (
    <>{isGameStarted? <Gameplay/>:<Startgame toogle={toggleGamePlay}/>}</>
  )
}

export default App
