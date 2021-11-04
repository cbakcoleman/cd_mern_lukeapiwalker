import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router';

const Planet = (props) => {
    const [planets, setPlanets] = useState([])
    const {input1} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${input1}`)
        .then(response => {
            console.log(response.data);
            setPlanets(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    // const retrievePlanet = () => {
    //     axios.get("https://swapi.dev/api/planets/{input1}")
    //     .then(jsonResult => {
    //         console.log(jsonResult.data)
    //         setPlanets(jsonResult.data)
    //     })
    //     .catch(error => console.log(error))
    // }
    return (
        <div>
            <div>
                <h1>{planets.name}</h1>
                <p>Climate: {planets.climate}</p>
                <p>Terrain: {planets.terrain}</p>
                <p>Surface Water: {}</p>
                <p>Populattion: {planets.population}</p>
            </div>
        </div>
    )
}

export default Planet