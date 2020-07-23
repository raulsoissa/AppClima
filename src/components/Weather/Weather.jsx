import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Weather = ({temperature}) => {
    return (
        <div>
            <Typography variant="h2">Clima {temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
}

export default Weather
