import React, {useState, useEffect } from 'react';
import BDayCardPic from '../assets/images/e-invites.jpg';
import '../assets/css/e-invites.css';
import html2canvas from 'html2canvas';
import { useMediaQuery } from 'react-responsive';

export default function EInvites() {
    const changetextvw435 = useMediaQuery({query: '(max-width: 435px)'});
    const [cardtosaveheight, setcardtosaveheight] = useState(null);

    // 320 => -6.5vh
    // 434 => -7.2vh

    // 320 => -6.1vh
    // 434 => -6.7
    const proportion = (-0.00614035 * window.innerWidth) - 4.53509
    const adjustprop = (-0.00614035 * window.innerWidth) - 4.13509

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

    // useEffect(() => {
    //     async function exporting() {
    //         await exportAsImage()
    //         settopdivmargin(`${proportion}vh`)
    //     }
    //     if (topdivmargin !== `${proportion}vh`) {
    //         exporting()
    //     }
    // }, [topdivmargin])

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
                <div id="bottomholder" className='w-full'>
                    <input id="saveimage" type="button" className='border-0' value={saving}
                        onClick={async() => {
                            setSaving('Saving...');
                            // settopdivmargin(`${adjustprop}vh`)
                            await exportAsImage()
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