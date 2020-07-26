import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)

    console.log(" myRefDiv.current ",myRefDiv.current)

    useEffect(() => {
        if (!vanta) {
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
        }
        return () => {
            if (vanta) {
                vanta.destroy()
                console.log("clean up")
            }
        }
    }, [vanta])



    return (
        <div ref={myRefDiv}>
            WelcomeScreen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
