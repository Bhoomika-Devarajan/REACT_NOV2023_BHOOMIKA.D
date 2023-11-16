import {useState} from "react";
function Eg()
{
    const[name,setName]=useState("john");
    const handle=()=>
    {
        setName("mike");
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={handle}>click</button>
        </div>

    );
}
export default Eg;