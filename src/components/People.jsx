import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router';

const People = (props) => {
    const [peoples, setPeoples] = useState([])
    const {input1} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${input1}`)
        .then(response => {
            console.log(response.data);
            setPeoples(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h1>{peoples.name}</h1>
            <p>Height: {peoples.height}</p>
            <p>Mass: {peoples.mass}</p>
            <p>Hair Color: {peoples.hair_color}</p>
            <p>Skin Color: {peoples.skin_color}</p>
        </div>
    )
}

export default People
