function Button(){
  
    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(<button className="crazy-button" onDoubleClick={handleClick}>Click me!</button>)

}

export default Button