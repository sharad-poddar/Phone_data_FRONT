import React from "react";
import axios from 'axios';

export default function App(){

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{

        axios.get('http://localhost:4000/api/data')
        .then(res => {
            console.log(res);
            setData(res.data);
        })

    },[])

    const data_comp_array = data.map(({id, name, phone}, index)=>{
        return(
            <div key={index}>
                <h2>ID: {id}</h2>
                <h3>NAME: {name}</h3>
                <p>PHONE: {phone}</p>
            </div>
        )
    })


    return(
        <div>
            <h1>PHONE_DIARY</h1>
            {data_comp_array}
        </div>
    )
}