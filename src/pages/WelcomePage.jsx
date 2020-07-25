import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div>
            Welcome 
            <div className="">
                <Link to="/main">Ir a main</Link>
            </div>
        </div>
    )
}


export default WelcomePage
