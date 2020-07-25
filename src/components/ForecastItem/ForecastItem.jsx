import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid } from'@material-ui/core'
import { IconContext } from 'react-icons'
import IconState, {validValues} from '../IconState'

const ForecastItem = ({ weekDay, hour, state, temperature}) => {
    return (
        <div>
            <Grid data-testid="forecast-cont" container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Typography>{weekDay}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{hour}</Typography>
                </Grid>
                <Grid item>
                    <IconContext.Provider value={{ size:'4em' }}>
                        <IconState state={state}/>
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
    state: PropTypes.objectOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
