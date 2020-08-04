import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow, WiRaindrop,WiFog, WiThunderstorm } from 'react-icons/wi'

export const validValues = [
    "drizzle", "clouds", "clear", "rain", "snow", "thunderstorm", "fog"
]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    fog: WiFog
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
