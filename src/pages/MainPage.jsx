import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Cordoba", country: "Argentina"},
    {city: "Valparaiso", country: "Chile"}
]


const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        history.push("/city");
    }
    return (
        <div>
            <h2>Lista de Ciudades</h2>
            <CityList cities={cities} onClickCity={onClickHandler}/>
        </div>
    )
}


export default MainPage
