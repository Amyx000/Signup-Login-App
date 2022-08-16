import React from "react";

function Welcome (){
const username = localStorage.user;


    return(
        <>
        <h1>Hey {username}, you are Logged In</h1>
        </>
    )

}

export default Welcome;