import React from 'react';
import './App.css'
import Img from './imageInSrc.jpg'

function App() {
  return (
    <main>
    <div className="bigdiv" style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className="titlered">Your name here</h1>
   
    <br/ >
   
    <img src={Img} />
   
    <br />
   
    <img src=".././imageInPublic.jpg" />
   
   </div>
   
   <video width="320" height="240" controls>
   
    <source src="videoplayback.mp4" type="video/mp4"/ >
   
   </video>
   </main>
  )
}

export default App;
