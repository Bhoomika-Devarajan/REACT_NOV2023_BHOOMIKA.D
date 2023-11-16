import {useState} from "react";

function Stateprops()
{
    const[name,setName]=useState("John");
    const[num,setNum]=useState(12);
    const[stu,setStu]=useState({name:"Mike",age:17});
    const nameHandler=()=>
    {
        setName("MIKE");
    };
    const numHandler=()=>
    {
        let value=num;
        setNum(++value);
    };

    return(
        <div>
            <h1>StateProps</h1>
            <hr></hr>
        <h2>Hi {name}</h2> 
        <h2>My number is {num}</h2> 
        <h2>Student name is {stu.name} and age is  {stu.age}</h2> 
        <button onClick={nameHandler}>ChangeName</button><br></br>
        <button onClick={numHandler}>Increment Number</button>
        </div>
    );
}

export default Stateprops;