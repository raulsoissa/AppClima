import React from 'react'
import { Grid } from '@material-ui/core'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecasChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/AppFrame'

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
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"Viernes" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"Viernes" },
    { hour: 13, state:"rain", temperature:7, weekDay:"Sábado" },
    { hour: 16, state:"rain", temperature:5, weekDay:"Domingo" },
]

const CityPage = () => {

    const city = "Santiago"
    const country = "Chile"
    const state = "clouds" 
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample 
    const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container justify="space-around" direction="column">
                <Grid item container justify="center" alignItems="flex-end" xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justify="center">
                        <Weather state={state} temperature={temperature}/>
                        <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}


export default CityPage
