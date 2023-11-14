import './App.css'
import './index.css'

import SignUp from './SignUp'
import AppBar from './AppBar'
import SignIn from './SignIn'
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function GenrateText(props){
  return <>
    <div style={{
      padding:"20px"
    }}>
      <center>
    {props.str}
    </center>
    </div>
  </>
}
function App() {

  return (
    <>
        <AppBar />

    <div style={{
      paddingTop:"150px",
      width:"100vw",
      height:"100vh",
      backgroundColor:"#eeeeee"
      
    }}>
    <SignUp />
    </div>
    </>
  )
}

export default App
