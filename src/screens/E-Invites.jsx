import React, {useState, useEffect, useRef} from 'react';
import BDayCardPic from '../assets/images/e-invites.jpg';
import '../assets/css/e-invites.css';
import html2canvas from 'html2canvas';
import { useMediaQuery } from 'react-responsive';


export default function EInvites() {
    const changetextvw435 = useMediaQuery({query: '(max-width: 435px)'});
    const changetextvw400 = useMediaQuery({query: '(max-width: 400px)'});
    const changetextvw350 = useMediaQuery({query: '(max-width: 350px)'});
    const [cardtosaveheight, setcardtosaveheight] = useState(null);
    
    // if screen width is 400-435px, margintop is -12.5vh
    const [topdivmargin, settopdivmargin] = useState(changetextvw400 ? (changetextvw350 ? '-8.5vh' : '-14vh')  : '-10.5vh')
    const [saving, setSaving] = useState('Save Image');


    window.onload = () => {
        const bdaypic = document.getElementById('bdaypic');
        setcardtosaveheight(bdaypic.clientHeight);
        // CardtoSave.style.height = bdaypic.clientHeight + 'px';
    };

    const bdaypicRef = useRef(null);
    const CardtoSaveRef = useRef(null);

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

    return (
        changetextvw435 ? (
            <div className='mt-12'>
                <div id='CardtoSave' ref={CardtoSaveRef} style={{height: `${cardtosaveheight + "px"}`}}>
                    <img id="bdaypic" src={BDayCardPic} alt="Rectangle Poster" height="100%" width="100%" ref={bdaypicRef} />
                    <div className="row flex flex-row items-center" id="inputrow" style={{marginTop: topdivmargin}}>
                        <input
                            className="col-4 inputs w-[15.7%] !ml-[7.5vw]"
                            type="text" 
                            name="ChildName" 
                            placeholder="Child's Name"
                            id="childname"
                        />
                        <input class="col-4 inputs w-[22vw] ml-[0vw]" type="text"
                            name="Location" 
                            placeholder="Location"
                            id="locationinput"
                        />
                        <input className="col-2 inputs ml-[6.5vw]" type="text" 
                            name="Party Time" 
                            placeholder="Party Time"
                            id="bdaytime"
                        />
                        <input 
                            className="col-2 inputs ml-[6.6vw]"
                            type="text"
                            name="Phone Number" 
                            placeholder="Phone #"
                            id='phoneinput'
                        />
                    </div>
                </div>
                <div id="bottomholder">
                    <input id="saveimage" type="button" value={saving}
                        onClick={async() => {
                            setSaving('Saving...');
                            settopdivmargin('-11.5vh')
                            await exportAsImage();
                            settopdivmargin('-10.5vh')
                        }}
                    />
                    <div id='reload'>
                        If you need to make any changes after saving image, reload the page first!!!
                    </div>
                </div>
            </div>
        ) : (
            // put text in the middle of the page
            <div className='flex flex-col items-center justify-center text-white text-2xl' style={{height: 'calc(100vh - 80px)'}}>
                Please use a mobile device to access this page
            </div>
        )
    )
}