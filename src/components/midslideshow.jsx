import React, { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../assets/css/midslides.css'
import Slide from "./home/Slide";

export default function MidSlideShow() {
    const [headerheight, setHeaderheight] = useState(0)
    useEffect(() => {
        setHeaderheight(document.getElementsByClassName("horizontal-menu")[0].offsetHeight)
    }, [])
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <AutoplaySlider
            className="midslideshow"
            bullets={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            media={[
                {
                    children: <Slide image={'game1.jpg'} />
                },
                {
                    children: <Slide image={'game3.jpg'} />
                },
                {
                    children: <Slide image={'header-bg.jpg'} />
                }
            ]}
            style={{ marginTop: headerheight }}
        />
    )
}