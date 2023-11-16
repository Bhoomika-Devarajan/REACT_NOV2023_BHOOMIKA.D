import React,{useState} from "react";
function Color()
{
    
    const[name,setName]=useState("Dark Mode");
    
    const handle1=()=>
    {
        if(name==="Dark Mode")
        setName("LightMode");
    
    else
    setName("Dark Mode")
    }
    
    return(
        <div>
            
            <h1>{name}</h1>
            <button onClick={handle1}>Click To Switch Theme</button>
        </div>
    )
}
export default Color;
