import React from "react";
import MidSlideShow from "../components/midslideshow";
import  '../assets/css/home.css'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { colorSet } from "../GlobalStyles";

export default function Home() {
    const [reference, inView] = useInView({
        threshold: 0.05,
        triggerOnce: false
    });
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(100px)'
    });
    
    return (
        <div>
            <MidSlideShow />
            <animated.div className="hometext" style={props} ref={reference}>
                <p>
                    State-of-the-art gaming literally in your backyard!
                </p>        
                <p>
                    <span style={{color: colorSet.primary}}>Triple A Mobile Gaming Truck</span> is a <span style={{color: 'limegreen'}}>gamer’s dream</span>!
                </p>
                <p>
                    Our spacious, creatively designed, top-of-the-line game truck will be the life of the party at your next event.
                </p>
                <p>
                    Fully stocked with every game you can think of, 9 50-inch 4K TV's, <span style={{color: 'royalblue'}}> PS5's</span>, 
                    <span style={{color: 'limegreen'}}> XBOX Series X's</span>, <span style={{color: 'royalblue'}}> PS4's</span>, 
                    <span style={{color: 'red'}}> Nintendo Switches</span>, <span style={{color: 'sandybrown'}}> Driving Simulator</span>, and more!
                </p>
                <p>
                    <span style={{color: 'deepskyblue'}}>Air-conditioned</span> and <span style={{color: 'red'}}>heated</span> to your liking.
                </p>
                <p>
                    Have an event coming up and you want to impress your friends? We got you!
                </p>
                <p style={{textDecoration: 'underline', color: 'dodgerblue'}}>
                    <a href="tel:+19738458300" style={{color: 'dodgerblue'}}>Click here to call for events!</a>
                </p>
            </animated.div>
        </div>
    );
}