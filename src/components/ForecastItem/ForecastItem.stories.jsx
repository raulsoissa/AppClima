import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItme",
    component: ForecastItem
}

export const LunesSoleado = () => 
    <ForecastItem hour={10} state={"clear"} temperature={23} weekDay="Lunes"/>