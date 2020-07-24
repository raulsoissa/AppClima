import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo/'
import Weather from '../Weather/Weather'

const renderCityAndCountry = CityAndCountry => {
    const { city, country } = CityAndCountry

    return (
        <li key={city}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={8} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Weather temperature={10} state="sunny"/> 
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(CityAndCountry => renderCityAndCountry(CityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
