import {useState} from "react";
function Incre()
{
    const[num,setNum]=useState(0);
    
    const handle=()=>
    {
        let value=num;
        setNum(++value);

    }
    const handle1=()=>
    {
        let value=num;
        setNum(--value);
        
            setNum(--value);
        
    }
   
    return(
        <div>
            <h1>Increment {num}</h1>
            <button onClick={handle}>Increment</button><br></br>
            <button onClick={handle1}>Decrement</button>
        </div>
    )
}
export default Incre;