import React, { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../assets/css/midslides.css'
import Slide from "./home/Slide";

export default function MidSlideShow() {
    const [headermargin, setHeadermargin] = useState(0)
    useEffect(() => {
        setHeadermargin(document.getElementsByClassName("navbar")[0].offsetHeight - document.getElementsByClassName("cid-trIi3lod2Q")[0].offsetHeight)
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
            style={{ marginTop: headermargin }}
        />
    )
}