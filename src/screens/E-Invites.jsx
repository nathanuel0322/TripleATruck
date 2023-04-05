import React, {useState, useEffect, useRef} from 'react';
import BDayCardPic from '../assets/images/e-invites.jpg';
import '../assets/css/e-invites.css';
import html2canvas from 'html2canvas';
import { useMediaQuery } from 'react-responsive';
import PageProgress from '../components/PageProgress'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EInvites() {
    const changetextvw435 = useMediaQuery({query: '(max-width: 435px)'});
    const changetextvw400 = useMediaQuery({query: '(max-width: 400px)'});
    const changetextvw350 = useMediaQuery({query: '(max-width: 350px)'});
    const [cardtosaveheight, setcardtosaveheight] = useState(null);
    // const [topdivmargin, settopdivmargin] = useState(!changetextvw435 ? '-14vw' : changetextvw400 ? (changetextvw350 ? '-8.5vw' : '-14vw')  : '-3.3rem')
    
    const [topdivmargin, settopdivmargin] = useState(!changetextvw435 ? '-14vw' : changetextvw400 ? (changetextvw350 ? '-8.5vw' : '-14vw')  : '-12.5vw')
    
    const [topdivchanged, settopdivchanged] = useState(null);
    const firstRender = useRef(true);
    const [saving, setSaving] = useState('Save Image');


    window.onload = () => {
        const bdaypic = document.getElementById('bdaypic');
        const CardtoSave = document.getElementById('CardtoSave');
        setcardtosaveheight(bdaypic.clientHeight);
        // CardtoSave.style.height = bdaypic.clientHeight + 'px';
    };
    // useEffect(() => {
    //     console.log("useeffect ran");
    //     if (!firstRender.current) {
    //         setSaving('Saving...');
    //         exportAsImage();
    //     }
    //     else{
    //         firstRender.current = false;
    //     }
    // }, [topdivchanged])

    const bdaypicRef = useRef(null);
    const CardtoSaveRef = useRef(null);

    useEffect(() => {
        // show alert of screen width
        // alert(`width is: ${window.innerWidth} and height is: ${window.innerHeight}`);
        console.log(`width is: ${window.innerWidth} and height is: ${window.innerHeight}`);
        // console.log("device pixel ratio:", window.devicePixelRatio);
    }, []);

    // useEffect(() => {
    //     // set height of CardtoSave equal to bdaypic
    //     const bdaypic = document.getElementById('bdaypic');
    //     const CardtoSave = document.getElementById('CardtoSave');

    //     // heights of both
    //     console.log("height of bdaypic: ", bdaypic.clientHeight);
    //     console.log("height of CardtoSave: ", CardtoSave.clientHeight);
    //     // CardtoSave.style.height = bdaypic.clientHeight + 'px';
    //     setcardtosaveheight(bdaypic.clientHeight);
    // }, [])
    console.log(changetextvw435, changetextvw400, changetextvw350);
    // FOR TOP DIV
    // -14.5 vw on 320-350
    // -14 vw on 350-400
    // -13.5 vw on 400-435
    // -13 vw from 435 px 

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const exportAsImage = async () => {
        const canvas = await html2canvas(document.getElementById('CardtoSave'), {scale: 10});
        // const canvas = await html2canvas(document.getElementById('CardtoSave'), {scale: 1});
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
    <div>
        <div id='CardtoSave' ref={CardtoSaveRef} style={{height: `${cardtosaveheight + "px"}`}}>
            <img id="bdaypic" src={BDayCardPic} alt="Rectangle Poster" height="100%" width="100%" ref={bdaypicRef} />
            {/* <div id='invitediv'> */}
            {/* <form className='inviteform' style={{marginTop: topdivmargin}}>
                <input 
                    className='inputs'
                    type="text" 
                    name="ChildName" 
                    placeholder="Child's Name"
                    id="childname"
                />
                <input 
                    className='inputs'
                    type="text"
                    name="Location" 
                    placeholder="Location"
                    id="locationinput"
                />
                <input 
                    className='inputs'
                    type="text" 
                    name="Party Time" 
                    placeholder="Party Time"
                    id="bdaytime"
                />
                <input 
                    className='inputs'
                    type="text"
                    name="Phone Number" 
                    placeholder="Phone #"
                    id='phoneinput'
                />
            </form> */}
            <div class="row" id="inputrow"  style={{marginTop: topdivmargin}}>
                <input 
                    class="col-4 inputs"
                    type="text" 
                    name="ChildName" 
                    placeholder="Child's Name"
                    id="childname"
                />
                <input 
                    class="col-4 inputs"
                    type="text"
                    name="Location" 
                    placeholder="Location"
                    id="locationinput"
                />
                <input 
                    // className='inputs'
                    className="col-2 inputs"
                    type="text" 
                    name="Party Time" 
                    placeholder="Party Time"
                    id="bdaytime"
                />
                <input 
                    className="col-2 inputs"
                    // className='inputs'
                    type="text"
                    name="Phone Number" 
                    placeholder="Phone #"
                    id='phoneinput'
                />
            </div>


{/* const ourrow = document.getElementById("inputrow");
console.log("width 1 is:", ourrow.clientWidth)
ourrow.style.width = document.getElementById("ourimg").clientHeight + "px";
console.log("width is:", ourrow.style.width) */}



                {/* <form style={{marginLeft: '24%'}}>
                </form>             */}
            {/* </div> */}
            {/* <div style={{display: 'flex', flexDirection: 'row', marginLeft: '15%',
                marginTop: !changetextvw435 ? '-3.5vw' : changetextvw400 ? (changetextvw350 ? '-4vw' : '-3.5vw')  : '-3.5vw', }}
            >
                <form onSubmit={handleSubmit}>
                </form>
                <form style={{marginLeft: '24%'}}>
                </form>            
            </div> */}
        </div>
        <div id="bottomholder">
            <input id="saveimage" type="button" value={saving}
                onClick={() => {
                    // MUST FIX TOP DIV MARGIN FOR LARGE SCREENS LATER ON
                    settopdivmargin(!changetextvw435 ? '-14vw' : changetextvw400 ? (changetextvw350 ? '-10.5vw' : '-15vw')  : '-11vw');
                    // settopdivchanged(true);
                    console.log("Export called");
                    
                    setSaving('Saving...');
                    exportAsImage();
                }}
            />
            <div id='reload'>
                If you need to make any changes after saving image, reload the page first!!!
            </div>
        </div>
    </div>
    // <PageProgress type={"Page"} />
  )
}