import React from 'react'
//import { Link } from 'react-router-dom'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecasChart'
import Forecast from '../components/Forecast'
import { Grid } from '@material-ui/core'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min":14,
        "max":22,
    },
    {
        "dayHour": "Vie 19",
        "min":18,
        "max":27,
    },
    {
        "dayHour": "Sab 20",
        "min":10,
        "max":21,
    },
    {
        "dayHour": "Dom 21",
        "min":16,
        "max":24,
    },
    {
        "dayHour": "Lun 22",
        "min":13,
        "max":22,
    },
    {
        "dayHour": "Mar 23",
        "min":12,
        "max":20,
    },
    {
        "dayHour": "Mie 24",
        "min":10,
        "max":18,
    }
]

const forecastItemListExample = [
    { hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
    { hour: 6, state:"cloud", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"fog", temperature:18, weekDay:"Viernes" },
    { hour: 18, state:"cloudy", temperature:19, weekDay:"Viernes" },
    { hour: 13, state:"rain", temperature:7, weekDay:"Sábado" },
    { hour: 16, state:"rain", temperature:5, weekDay:"Domingo" },
]

const CityPage = () => {

    const city = "Santiago"
    const country = "Chile"
    const state = "cloudy" 
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample 
    const forecastItemList = forecastItemListExample

    return (
        <Grid container justify="center" direction="column">
            <Grid item xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={8}>
                    <Weather state={state} temperature={temperature}/>
                </Grid>
                <Grid item xs={4}>
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
            </Grid>
            <Grid item>
                <ForecastChart data={data}/>
            </Grid>
            <Grid item>
                <Forecast forecastItemList={forecastItemList} />
            </Grid>
        </Grid>
    )
}


export default CityPage
