import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../CityInfo/'
import Weather from '../Weather/Weather'
import { List, ListItem } from '@material-ui/core'

const renderCityAndCountry = eventOnClickCity => CityAndCountry => { // esto es = a esto -> = (eventOnClickCity, CityAndCountry) =>
    const { city, country } = CityAndCountry

    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={10} state="sunny"/> 
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {

    return (
        <List>
            {
                cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
