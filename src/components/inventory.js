import React, { useState, useEffect } from "react";
function Get(){
    const [data, setData] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:1234/inventory', {
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
                    <th>{i.Color}</th>
                    <th>{i.Size}</th>
                </tr>)
    }))
}


export default function Inventory(){
    return <body>
                <h1>Inventory</h1>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Size</th>
                        </tr>      
                        <Get/>          
                    </table>  
                    <br/>
                    <form method="POST" action="/inventory">
                        Name: <input type="text" name="Name"/>
                        Color: <input type="text" name="Color"/>
                        Size: <input type="text" name="Size"/>
                        <input type="submit" name="submit"/>
                    </form>  
            </body>

}