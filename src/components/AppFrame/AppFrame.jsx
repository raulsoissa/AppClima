import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = props => {
    return (
        <Grid container justify="center" >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link to="/main" color="inherit" aria-label="menu" component={LinkRouter}>
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny></WiDaySunny>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item xs={12} sm={11} md={10} bg={8}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nisi, aut optio possimus id cumque iste magnam quas quis veniam! Qui corporis dolorum excepturi obcaecati reiciendis nam unde quia maiores?
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {

}

export default AppFrame
