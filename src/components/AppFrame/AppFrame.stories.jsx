import React from 'react'
import AppFrame from  './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id labore quas, odit reiciendis doloremque, iste deleniti ea ut dolore blanditiis quo deserunt quos, ullam magnam. Ex eligendi quam fuga.
        </AppFrame>
    </Router>
)