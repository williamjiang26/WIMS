import axios from "axios";
import React, { useState, useEffect } from "react";
function Get(){
    const [data, setData] = useState([]);
    
    fetch('http://localhost:1234/order', {
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
                    <th>{i.Address}</th>
                    <th>{i.Item}</th>
                </tr>)
    }))
}
function Post(){
    const [formdata, setformdata] = useState({
        Name: "",
        Address: "", 
        Item: "",
    })

    function set(e){
        const update = {}
        update[e.target.name] = e.target.value
        setformdata({...formdata, ...update})
    }

    async function handleSubmit(event){
        event.preventDefault()
        await axios.post('http://localhost:1234/order', formdata)
    }


    return (
        <form onSubmit={handleSubmit}>
        Name: <input type="text" name="Name" value={formdata.Name} onChange={set}/>
        Address: <input type="text" name="Address" value={formdata.Address} onChange={set}/>
        Item: <input type="text" name="Item" value={formdata.Item} onChange={set} />
        <input type="submit" name="submit"/>
        </form>
    )
}

export default function Order(){
    return (
        <>
            <h1>Orders</h1>
            <br/>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Item</th>
                </tr>
                <Get/>
            </table>
            <br/>
            <Post/>
        </>
            
        
    ) 
}