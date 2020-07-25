import React from 'react'
import {render} from '@testing-library/react'
import ForecastChart from'./ForecasChart'

const data = [
    {"dayHour": "Jue 18", "min":14, "max":22}
]

test('Foracast Gráfico ', async () => {
    const { findAllByTestId } = render(<ForecastChart data={data}/>)

    const weekData = await  findAllByTestId("forecastChart-cont")

    expect(weekData).toHaveLength(1)
})
