import React, { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../assets/css/midslides.css'
import Slide from "./home/Slide";
import { useMediaQuery } from 'react-responsive'

export default function MidSlideShow() {
    const [headermargin, setHeadermargin] = useState(0)
    useEffect(() => {
        setHeadermargin(document.getElementsByClassName("navbar")[0].offsetHeight - document.getElementsByClassName("cid-trIi3lod2Q")[0].offsetHeight)
    }, [])
    const tablet = useMediaQuery({ query: '(min-width: 768px)' })
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <AutoplaySlider
            className="midslideshow"
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            media={[
                {
                    children: <Slide image={`${tablet ? 'widepic': 'wallpaper'}1.jpg`} />
                },
                {
                    children: <Slide image={'rect.jpg'} />
                },
                {
                    children: <Slide image={`${tablet ? 'wallpaper': 'widepic'}1.jpg`} />
                },
                {
                    children: <Slide image={'wallpaper2.jpg'} />
                }
            ]}
            style={{ marginTop: headermargin }}
        />
    )
}