import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./form.css"

function Signup() {
const navigate = useNavigate();
const[name, Setname]=useState("")
const[email, Setemail]=useState("")
const[password, Setpassword]=useState("")
const submitForm= async ()=>{
    if (name==="" || email==="" || password===""){alert("please fill the form completely")}
    else{
        
         const result = await fetch('http://localhost:5000/register',{
            method:"post",
            body: JSON.stringify({name, email, password}),
            Headers:{
                'Content-Type':'application/json'
            },
        });
        
        
        if(result.statusText==="Email already exist"){
            window.alert("Email already exist!")
        }
        else{
            navigate("/login");
        }
    }
    
}

   return(
    <>
    <div className="form">
    <h1>Sign Up</h1>
    <div>
        <h3>Name: </h3><input type="text" placeholder="e.g Rahul Sharma" value={name} onChange={(e)=>{Setname(e.target.value)}}></input>
    </div>
    <div>
        <h3>Email: </h3><input type="text" placeholder="e.g xyz@gmail.com" value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
    </div>
    <div>
        <h3>Password: </h3><input type="password" placeholder="e.g abcD@1234" value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input>
    </div>
    <button onClick={submitForm}>Signup</button>
    <div>Already have an account? <span><Link to="/login">Login</Link></span></div>
    </div>
    </>
   )
}

export default Signup

