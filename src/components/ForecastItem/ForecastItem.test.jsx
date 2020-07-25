import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render', async () => {
    const { findAllByTestId } = render(<ForecastItem hour={10} state={"sunny"} temperature={23} weekDay="Lunes"/>)

    const forecastItems = await findAllByTestId("forecast-cont")

    expect(forecastItems).toHaveLength(1)
})