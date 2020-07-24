import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails humidity={10} wind={2}/>)

    const wind = await findByText(/2/)
    const humidity = await findByText(/10/)

    expect(wind).toHaveTextContent("Viento 2 km/h")
    expect(humidity).toHaveTextContent("Humedad 10 %")

})
