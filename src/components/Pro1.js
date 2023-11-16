import {useState} from "react";

function Pro1()
{
    const[name,setName]=useState("John");
    const[count,setCount]=useState(0);
    const nameHandler=()=>
    {
        let value=count;
        setCount(++value);
        if(count===3)
        {
        if(name==="John")
        setName("MIKE");
        else
        setName("John");
        setCount(0);
        }
    };
    

    return(
        <div>
            <h1>StateProps Example 1</h1>
            
        <h2>Hi {name}</h2> 
         
        
        <button onClick={nameHandler}>Toggle</button><br></br>
        
        </div>
    );
}

export default Pro1;