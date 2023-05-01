import React, { useState, useEffect } from "react";
import axios from "axios";
function GetData(){
    const [data, setData] = useState([]);
    
    fetch('http://localhost:1234/inventory', {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userData")
        setData(data)
    })
    return (data.map( i => {
        return (<tr>
                    <th>{i.Name}</th>
                    <th>{i.Color}</th>
                    <th>{i.Size}</th>
                </tr>)
    }))
}
function PostData(){

    const [formdata, setformdata] = useState({
        Name: "",
        Color: "", 
        Size: "",
    })

    function set(e){
        const updatedValue = {}
        updatedValue[e.target.name] = e.target.value
        setformdata({...formdata, ...updatedValue})
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:1234/inventory', formdata)
    }


    return (<form method="POST" action="/inventory" onSubmit={handleSubmit}>
    Name: <input type="text" name="Name" value={formdata.Name} onChange={set}/>
    Color: <input type="text" name="Color" value={formdata.Color} onChange={set}/>
    Size: <input type="text" name="Size" value={formdata.Size} onChange={set}/>
    <input type="submit" name="submit"/>
    </form>  )
}

export default function Inventory(){
    return (<>
    <table>
        <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
        </tr>  
        <GetData/>                    
    </table> 
    <PostData/>
    </>)
               
                    
                    
            

}