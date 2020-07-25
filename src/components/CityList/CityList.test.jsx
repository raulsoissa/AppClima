import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList'

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Cordoba", country: "Argentina"},
    {city: "Valparaiso", country: "Chile"}
]

test("CityList render", async () => {
    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList clik on item", async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})