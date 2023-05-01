import React, { useState, useEffect } from "react";
import axios from "axios";
function GetData(){
    const [data, setData] = useState([]);
    fetch('http://localhost:1234/staff', {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userData")
        setData(data)
    })
    return (<table>
        <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Age</th>
        </tr>
        {data.map( i => {
        return (<tr>
            <th>{i.Name}</th>
            <th>{i.Team}</th>
            <th>{i.Age}</th>
        </tr>)
    })}
    </table>)
}  
//
function PostData(){
   const [formdata, setformdata] = useState({
    Name: '',
    Team: '',
    Age: ''
   })

    const set = (e) => {
        const updatedValue = {}
        updatedValue[e.target.name] = e.target.value
        setformdata({...formdata, ...updatedValue})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:1234/staff', formdata);
    };
    
    
    return (
            <form onSubmit={handleSubmit}>
            Name: <input type="text" name="Name" value = {formdata.Name} onChange={set}/>
            Team: <select id="Team" name="Team" value = {formdata.Team} onChange={set}>
                <option value="">None</option>
                <option value="Marketing">Marketing</option>
                <option value="Accounting">Accounting</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
            </select>
            Age: <input type="number" name="Age" value = {formdata.Age} onChange={set}/>
            <input type="submit" name="submit" />
            </form>
        
    )
}
export default function Staff(){
   return   <>
    <h1>Staff Directory</h1>
    <GetData/>
    <PostData/>
    </>
            
    
}
