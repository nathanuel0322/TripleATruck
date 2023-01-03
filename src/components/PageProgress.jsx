import React, { useState, useEffect } from 'react';
import '../assets/css/pageprogress.css'

export default function PageProgress({type}) {
    const [headerheight, setHeaderheight] = useState(0)
    useEffect(() => {
        setHeaderheight(document.getElementsByClassName("horizontal-menu")[0].offsetHeight)
    }, [])
    return (
        <div className='ppdiv' style={{height: `calc(100vh - ${headerheight}px)`, marginTop: `${headerheight}px`}}>
            {type} in Progress 👷‍♂️
        </div>
    )
}