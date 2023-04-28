import { set } from "mongoose";
import React, { useState, useEffect } from "react";

// function PostData(){
//    const [formdata, setformdata] = useState({
//     name: '',
//     team: '',
//     age: ''
//    })
    
//    const addForm = (event) => {
//     event.preventDefault();
//     const name = event.target.getAttribute('name')
//     const value = event.target.value;

//     const newForm = {...addForm};
//     newForm[name] = value;
//     setformdata(newForm);
//    }


//     return (<form >
//         Name: <input type="text" name="Name" onChange={addForm}/>
//         Team: <select id="Team" name="Team" onChange={addForm}>
//             <option value="Marketing">Marketing</option>
//             <option value="Accounting">Accounting</option>
//             <option value="Sales">Sales</option>
//             <option value="Operations">Operations</option>
//         </select>
//         Age: <input type="number" name="Age" onChange={addForm}/>
//         <input type="submit" name="submit" />
     
//     </form>)
// }
function GetData(){
    const [data, setData] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:1234/staff', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData")
            setData(data)
        })
    }, [])

    const content = ( 
        <>
            <table>
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
            </table>
        </>
    )
    return content  
}
export default function Staff(){
   return   <>
            <GetData/>
            {/* <PostData/> */}
            </>
    
}
