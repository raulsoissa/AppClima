import React from 'react'
import { Link } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import { WiStormShowers } from 'react-icons/wi'
import { Typography } from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <Grid container direction="column" justify="center" className="full">
                <div className="highlight">
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Grid>
                            <IconContext.Provider value={{ size:"6em"}}>
                                <WiStormShowers/>
                            </IconContext.Provider>
                        </Grid>
                        <Grid item container direction="column" justify="center" alignItems="center">
                            <Typography variant="h4" color="inherit">
                                404 | La página no existe
                            </Typography>
                            <Link color="inherit" aria-label="menu" component={RouterLink} to="/">
                                Volver
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
    )
}

export default NotFoundPage
