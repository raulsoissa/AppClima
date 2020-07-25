import React from 'react'
import ForecastChart from './ForecasChart'

export default {
    title: "ForecastChart",
    component: ForecastChart
}

const data = [
    {
        "dayHour": "Jue 18",
        "min":14,
        "max":22,
    },
    {
        "dayHour": "Vie 19",
        "min":18,
        "max":27,
    },
    {
        "dayHour": "Sab 20",
        "min":10,
        "max":21,
    },
    {
        "dayHour": "Dom 21",
        "min":16,
        "max":24,
    },
    {
        "dayHour": "Lun 22",
        "min":13,
        "max":22,
    }
]

export const ForecastChartExample= () => (
    <ForecastChart data={data}/>
)