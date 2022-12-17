import { useState, useEffect } from 'react';
import '../../assets/css/slide.css'

export default function Slide({image}) {
    const [slideel, setSlideel] = useState(0)
    useEffect(() => {
        setSlideel(document.getElementsByClassName("midslideshow")[0].offsetHeight)
    }, [])
    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
            <img src={require(`../../assets/images/${image}`)} style={{ height: slideel, width: '100%', objectFit: 'cover', filter: 'brightness(30%)'}}  alt='slideimage' />
            <p className='aaatitle' style={{position: 'absolute', alignSelf: 'center', color: 'white', fontFamily: "'Oswald', sans-serif", fontSize: '3.5rem'}}>AAA GAMING</p>
        </div>
    )
}