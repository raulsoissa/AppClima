import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <div>
            Not Found
            <div className="">
                <Link to="/main">Volver a main</Link>
            </div>
        </div>
    )
}

export default NotFoundPage
