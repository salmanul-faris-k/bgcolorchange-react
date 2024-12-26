
import { useState } from 'react'
import './App.css'

function App() {
 const [bg,setbackground]=useState('black')
  const red=()=>{
    setbackground('red')
    
  }
  const yellow=()=>{
    setbackground('yellow')
  }
  const green=()=>{
    setbackground('green')
  }
  const blue=()=>{
    setbackground('blue')
  }
  return (
    <>
    <div style={{backgroundColor:bg,width:'100%', height:'100vh', display:'flex', alignItems:'center',justifyContent:'center'} }>
      <div style={{display:'flex', justifyContent:'space-around', width:'500px', height:'auto'}}>
<button onClick={red} style={{width:'100px', height:'30px' ,color:'red',fontSize:'16px', border:'2px solid red',backgroundColor:'black',boxShadow:"initial", borderRadius:'15px' }}>red</button>
<button onClick={yellow}style={{width:'100px', height:'30px' ,color:'yellow',fontSize:'16px', border:'2px solid yellow',backgroundColor:'black', borderRadius:'15px' }}>yellow</button>
<button onClick={green} style={{width:'100px', height:'30px' ,color:'green',fontSize:'16px', border:'2px solid green',backgroundColor:'black', borderRadius:'15px' }}>green</button>
<button onClick={blue} style={{width:'100px', height:'30px' ,color:'blue',fontSize:'16px', border:'2px solid blue',backgroundColor:'black', borderRadius:'15px' }}>blue</button>
      </div>
    </div>
      
    </>
  )
}

export default App
