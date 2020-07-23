import React from 'react'
import { render } from '@testing-library/react';
import CityList from './CityList'

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Cordoba", country: "Argentina"},
    {city: "Valparaiso", country: "Chile"}
]

test("CityList render", async () => {
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})