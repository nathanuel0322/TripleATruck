import React from "react";
import MidSlideShow from "../components/midslideshow";
import  '../assets/css/home.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';


export default function Home() {

    return (
        <div>
            <MidSlideShow />
            <div className="hometext">
                <p>
                    State-of-the-art gaming literally in your backyard!
                </p>
                <p>
                    Triple A Mobile Gaming Truck is a gamer’s dream.
                </p>
                    Our spacious, creatively designed, top-of-the-line game truck will be the life of the party at your next event.
                    Fully stocked with every game you can think of, NINE 50” 4K TVs, PS5s, XBOX X, PS4s, Xboxes’, Nintendo Switches, 
                    Driving Simulator and more! Air-conditioned and heated to your liking.
                <p>
                    Have an event coming up and you want to impress your friends? We got you! Book with us today!
                </p>
            </div>
        </div>
    );
}