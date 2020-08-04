import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour:  6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"Viernes" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"Viernes" },
    { hour: 13, state:"rain", temperature:7, weekDay:"Sábado" },
    { hour: 16, state:"rain", temperature:5, weekDay:"Domingo" },
]

test('Forecast render ', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

    const forecastItems = await findAllByTestId("forecast-item-cont")

    expect(forecastItems).toHaveLength(6)
})

