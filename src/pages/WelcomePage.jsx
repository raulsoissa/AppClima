import React from 'react'
import WelcomeScreen from '../WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Typography } from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@material-ui/core'

const WelcomePage = () => {
    return (
        <WelcomeScreen>
            <Grid container direction="column" justify="center" className="full">
                <div className="highlight">
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Grid>
                            <IconContext.Provider value={{ size:"6em"}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justify="center" alignItems="center">
                            <Typography variant="h4" color="inherit">
                                WeatherApp
                            </Typography>
                            <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">
                                Ingresar
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}


export default WelcomePage
