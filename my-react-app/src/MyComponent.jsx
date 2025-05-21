
import React, {use, useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age,setAge ]= useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Joas");
    }

    const inceAge = ()=> {
        setAge(age+1);
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed)
    }

    return( <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button><br/>

        <p>Age: {age}</p>
        <button onClick={inceAge}>Age</button><br/>

        <p>Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployed}>toggle</button><br/>
    </div>);
}

export default MyComponent