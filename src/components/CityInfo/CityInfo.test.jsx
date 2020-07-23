import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'; // SUT: System Under Testing


test("CityInfo render", async () => {

    const city= "Santiago"
    const country= "Chile"

    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
    
    const  cityAndCountryComponents = await findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})