import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo/'
import Weather from '../Weather/Weather'
import { List, ListItem } from '@material-ui/core'

const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => { // esto es = a esto -> = (eventOnClickCity, CityAndCountry) =>
    const { city, country } = CityAndCountry
    //const { temperature, state } = weather

    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} xs={12}>
                    { 
                        weather ?
                            (<Weather temperature={weather.temperature} state={weather.state}/>)
                            : ("no hay datos") 
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setallWeather] = useState({})

    useEffect(() => {
        
    }, [])

    //const weather = { temperature: 10, state:"sunny"}

    return (
        <List>
            {
                cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry, 
                    allWeather[`${CityAndCountry.city}-${CityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
