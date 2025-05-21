
import React, {useState} from "react";

function MyComponent(){

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age,setAge ]= useState(0);
    const [school, setSchool] = useState("");

    function handleStudent(){
    const newStudent = {name: name,
                        age: age,
                        school: school
    };
    setStudents(s => [...s,newStudent]);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleAgeChange(event){
        setAge(event.target.value);
    }
    function handleSchoolChange(event){
        setSchool(event.target.value);
    }

    return( <div className="student-container">
        <h2 className="title">List of students</h2>
    <ul className="student-list">
            {students.map((students, index) => 
        <li key={index}>
            {students.name} {students.age} {students.school} 
        </li>)}   
            
        
    </ul>

    <input className="input-field" type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/><br />
    <input className="input-field" type="number" value={age} onChange={handleAgeChange} placeholder="Enter your age" /><br />
    <input className="input-field" type="text" value={school} onChange={handleSchoolChange} placeholder="Enter your School"/><br />
    <button className="submit-button" onClick={handleStudent}>Add Student</button>
    </div>);
}

export default MyComponent