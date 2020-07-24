import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { Grid } from'@material-ui/core'

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
                    [icono]{state}
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
