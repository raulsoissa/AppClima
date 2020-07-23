import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo/CityInfo'
import Weather from '../Weather/Weather'

const renderCityAndCountry = CityAndCountry => {
    const { city, country } = CityAndCountry

    return (
        <li key={city}>
            <CityInfo city={city} country={country}/>
            <Weather temperature={10} state="sunny"/>
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
