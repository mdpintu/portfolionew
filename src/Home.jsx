import React from 'react'
import web from './images/banner.svg'
import resume from './images/pintu-resume.pdf'
import Comman from './Comman'
// import { useState } from 'react'
const Home = () => {
  //  const [count,setCount]=useState(0); 
  //  const IncNum = () =>{
  //   setCount(count+1);
  //  }
  //  const DecNum = () =>{
  //   setCount(count-1);
  //  }
  return (

    <>


      <Comman title="HELLO I'M M PINTU" imgsrc={web} subTitle="A UI Developer & <br> Design Enthusiast" link="Download CV" href={resume} />

      {/* <h1>{count}</h1>
  <button onClick={IncNum}>+</button>
  <button onClick={DecNum}>-</button> */}
    </>

  )
}
export default Home


