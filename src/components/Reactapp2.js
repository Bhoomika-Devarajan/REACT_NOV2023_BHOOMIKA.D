const Reactapp2 = ()=>{
    const pstyle={
        backgroundColor:"lightblue",
        color:"darkblue",
        border:"solid blue",
        fontsize:"16px",
        padding:"10px"
    }
    return(
        <div><h1 style={{color:"green"}}>Inline Style in jsx Example</h1>
        <p style={pstyle}>This is the paragraph with inline style applied</p></div>
    );
  }
  export default Reactapp2;