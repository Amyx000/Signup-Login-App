import React from "react"
import {Link} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import "./general.css"


function Nav (){

   
    const Logoutuser = ()=>{
        localStorage.clear();
    
    }
    

    return (
        <>
        <div className="nav">
        <h2 className="head-name"><span className="inner-contain1">Hello</span>
        
        <Routes>
        <Route path="/" element={<Link className="loginbtn" to="/login"><span className="inner-contain2">Log In</span></Link>}/>
        <Route path="/welcome" element={<Link className="loginbtn" to="/login"><span onClick={Logoutuser} className="inner-contain2">Logout</span></Link>}/>
        </Routes>
        
        </h2>
        </div>
        </>
    )
}

export default Nav;