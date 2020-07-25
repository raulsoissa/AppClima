import React from 'react'
import PropTypes from 'prop-types'

const ForecasChart = props => {
    return (
        <div>
            ForecastChart
        </div>
    )
}

ForecasChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max:PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default ForecasChart
