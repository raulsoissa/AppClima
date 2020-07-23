import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Cordoba", country: "Argentina"},
    {city: "Valparaiso", country: "Chile"}
]

export const CityListExample = () => <CityList cities={cities}/>