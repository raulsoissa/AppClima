import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid } from'@material-ui/core'
import { IconContext } from 'react-icons'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'

const validValues = [
    "cloud", "cloudy", "fog", "sunny", "rain"
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const renderState = state => {
    const Icon = stateByName[state]
    return <Icon/>
}

const ForecastItem = ({ weekDay, hour, state, temperature}) => {
    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Typography>{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{hour}</Typography>
                </Grid>
                <Grid item>
                    <IconContext.Provider value={{ size:'4em' }}>
                        { renderState(state)}
                    </IconContext.Provider>
                </Grid>
                <Grid item>
                    <Typography>{temperature}°</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired, 
    hour: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
