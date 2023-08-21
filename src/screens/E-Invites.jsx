import React, {useState, useEffect } from 'react';
import BDayCardPic from '../assets/images/e-invites.jpg';
import '../assets/css/e-invites.css';
import html2canvas from 'html2canvas';
import { useMediaQuery } from 'react-responsive';

export default function EInvites() {
    const changetextvw435 = useMediaQuery({query: '(max-width: 435px)'});
    const [cardtosaveheight, setcardtosaveheight] = useState(null);
    const [screenWidth] = useState(window.innerWidth)
    // 320 => -6.5vh
    // 434 => -7.2vh

    // 320 => -6.1vh
    // 434 => -6.7

    // => -5.66
    // prop: 
    const proportion = (-0.015 * screenWidth) - 0.24
    const adjustprop = (-0.0131667 * screenWidth) - 0.0246667

    const [topdivmargin, settopdivmargin] = useState(`${proportion}vh`)
    const [saving, setSaving] = useState('Save Image');

    window.onload = () => {
        const bdaypic = document.getElementById('bdaypic');
        setcardtosaveheight(bdaypic.clientHeight);
    };

    const exportAsImage = async () => {
        const style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet?.insertRule('#CardtoSave img { display: inline-block; }');

        const elementToCapture = document.getElementById('CardtoSave');

        const canvas = await html2canvas(elementToCapture, { scale: 10 })
        style.remove();
          
        const image = canvas.toDataURL("image/png", 1.0);
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = "BirthdayCard";
        fakeLink.href = image;
        document.body.appendChild(fakeLink);
        fakeLink.click();
        setSaving('Save Image');
        document.body.removeChild(fakeLink);
        fakeLink.remove();
    }

    useEffect(() => {
        async function exporting() {
            await exportAsImage()
            settopdivmargin(`${proportion}vh`)
        }
        if (topdivmargin !== `${proportion}vh`) {
            exporting()
        }
    }, [topdivmargin])

    return (
        changetextvw435 ? (
            <div className='mt-12'>
                <div id='CardtoSave' style={{height: `${cardtosaveheight + "px"}`}}>
                    <img id="bdaypic" src={BDayCardPic} alt="Rectangle Poster" height="100%" width="100%" />
                    <div className="row flex flex-row items-center" id="inputrow" style={{marginTop: topdivmargin, lineHeight: 0.5}}>
                        <input
                            className="inputs w-[15.7%] !ml-[7.5vw]"
                            type="text" name="ChildName" placeholder="Child's Name" id="childname"
                        />
                        <input className="inputs w-[22vw] ml-[0vw]" type="text"
                            name="Location" placeholder="Location" id="locationinput"
                        />
                        <input className="inputs ml-[6.5vw]" type="text" 
                            name="Party Time" placeholder="Party Time" id="bdaytime"
                        />
                        <input 
                            className="inputs ml-[6.6vw]"
                            type="text" name="Phone Number" placeholder="Phone #" id='phoneinput'
                        />
                    </div>
                </div>
                <div id="bottomholder" className='w-full absolute flex flex-col gap-y-[2vh] mt-[4vh]'>
                    <div className='text-center text-white text-[80%]'>
                        Please close the keyboard and zoom out before saving!
                    </div>
                    <input id="saveimage" type="button" className='border-0' value={saving}
                        onClick={async() => {
                            setSaving('Saving...');
                            settopdivmargin(`${adjustprop}vh`)
                        }}
                    />
                </div>
            </div>
        ) : (
            <div className='flex flex-col items-center justify-center text-white text-2xl' style={{height: 'calc(100vh - 80px)'}}>
                Please use a mobile device to access this page
            </div>
        )
    )
}