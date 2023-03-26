import React, { useEffect, useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../assets/css/midslides.css'
import Slide from "./home/Slide";
import { useMediaQuery } from 'react-responsive'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {app} from '../firebase'

export default function MidSlideShow() {
    const [firebasearr, setFirebaseArr] = useState([])
    const [headermargin, setHeadermargin] = useState(0)
    useEffect(() => {
        setHeadermargin(document.getElementsByClassName("navbar")[0].offsetHeight - document.getElementsByClassName("cid-trIi3lod2Q")[0].offsetHeight)
    }, [])
    const tablet = useMediaQuery({ query: '(min-width: 768px)' })
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const storage = getStorage();
    const listRef = ref(storage, 'images');

    useEffect(() => {
        listAll(listRef)
            .then(async (res) => {
                let items = []
                for (const item of res.items) {
                    const downloadURL = await getDownloadURL(item)
                    items.push({
                        name: item.name,
                        downloadURL: downloadURL
                    });
                }
                const newFirebaseArr = [];
                for (const obj of items) {
                    newFirebaseArr.push({
                        children: <Slide image={obj.downloadURL} />
                    });
                }
                setFirebaseArr(newFirebaseArr);
            }).catch((error) => {
                console.log("Error in listall:", error)
            });
    }, [])

    useEffect(() => {
        console.log("new arr is:", firebasearr)
    }, [firebasearr])

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
                },
                ...(firebasearr.length > 0 ? firebasearr : [])
            ]}
            style={{ marginTop: headermargin }}
        />
    )
}