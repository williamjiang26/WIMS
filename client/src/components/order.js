import React, { useState, useEffect } from "react";
function Get(){
    const [data, setData] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:1234/order', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData")
            setData(data)
        })
    }, [])
    return (data.map( i => {
        return (<tr>
                    <th>{i.Name}</th>
                    <th>{i.Address}</th>
                    <th>{i.Item}</th>
                </tr>)
    }))
}
function Post(){
    return (
        <form>
        Name: <input type="text" name="Name"/>
        Address: <input type="text" name="Address"/>
        Item: <input type="text" name="Item"/>
        <input type="submit" name="submit"/>
        </form>
    )
}

export default function Order(){
    return (
        <body>
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
            
        </body>
    ) 
}