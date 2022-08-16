import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import{useNavigate} from "react-router-dom"
import "./form.css"

function Login (){
    const navigate = useNavigate();
    const[email, Setemail]=useState("")
    const[password, Setpassword]=useState("")
    const username = email.split("@")[0];

    const submitForm= async ()=>{
        if (email==="" || password===""){alert("please fill the form completely")}
        else{
            console.log(email, password)
           const result = await axios.post('http://localhost:5000/login',{
            email:email,
            password:password
          },{credentials: "include"})


            

            if(result.status===200){
                localStorage.setItem("user",username)
                navigate("/welcome")
                
            }
            else if(result.statusText==="Ivalid details"){window.alert("Invalid details")}
            else {window.alert("User not found, please register")}
            

            
            
           
        }

        
    }
    

    return(
        <>
    <div className="form">
    <h1>Log In</h1>
    
    <div>
        <h3>Email: </h3><input type="text" placeholder="e.g xyz@gmail.com" value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
    </div>
    <div>
        <h3>Password: </h3><input type="password" placeholder="e.g abcD@1234" value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input>
    </div>
    <button onClick={submitForm}>Login</button>
    <div>Don't have an account? <span><Link to="/signup">Signup</Link></span></div>
    </div>
    </>
    )

}


export default Login