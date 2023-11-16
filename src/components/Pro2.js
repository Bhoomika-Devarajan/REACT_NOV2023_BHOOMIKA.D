import React,{useState} from "react";
function Pro2()
{
    const[showMessage,setShowMessage]=useState(false);
    const Pro=()=>
    {
        setShowMessage(!showMessage);
    };
    return(
        <div>
            <h1>Dashboard</h1>
            <hr></hr>
            <button onClick={Pro}>
                {showMessage ? "HIDE MESSAGE":" SHOW MESSAGE"}
            </button>
            {showMessage &&<p>HI! HOW ARE YOU?</p>}
        </div>
    )
}
export default Pro2;