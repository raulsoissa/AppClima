import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'

export const validValues = [
    "cloud", "cloudy", "fog", "sunny", "rain"
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <div>
            <StateByName />
        </div>
    )
}

IconState.propTypes = {
    state: PropTypes.objectOf(validValues).isRequired,
}

export default IconState
