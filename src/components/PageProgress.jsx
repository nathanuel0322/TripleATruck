import React, { useState, useEffect } from 'react';

export default function PageProgress({type}) {
    const [headerheight, setHeaderheight] = useState(0)
    useEffect(() => {
        setHeaderheight(document.getElementsByClassName("horizontal-menu")[0].offsetHeight)
    }, [])
    return (
        <div style={{margin: '0 auto', color: 'white', height: `calc(100vh - ${headerheight}px)`, marginTop: `${headerheight}px`, textAlign: 'center',
            display: 'flex', flexDirection: 'column', fontFamily: "system-ui", alignItems: 'center', justifyContent: 'center', fontSize: '2rem'
        }}>
            {type} in Progress 👷‍♂️
        </div>
    )
}