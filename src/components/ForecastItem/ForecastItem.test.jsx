import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render',async () => {
    const { findByText, findAllByRole } = 
        render(<ForecastItem hour={10} temperature={23} state="sunny" weekDay="Lunes"/>)

    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)
    const StateAndWeekday = await findAllByRole("heading")

    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23")
    expect(StateAndWeekday[0]).toHaveTextContent("sunny")
    expect(StateAndWeekday[1]).toHaveTextContent("Lunes")
})