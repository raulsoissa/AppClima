import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'

const cities = [
    {city: "Santiago", country: "Chile", countryCode: "CL"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Cordoba", country: "Argentina", countryCode: "AR"},
    {city: "Valparaiso", country: "Chile", countryCode: "CL"}
]


const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        history.push("/city");
    }
    return (
        <AppFrame>
            <Paper elevation={5}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}


export default MainPage
