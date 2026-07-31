import React from "react";

function Card(props){
    return(
       <>
       <button onClick={props.buttonClick} >Click me</button>
       </>
    )
}

export default Card