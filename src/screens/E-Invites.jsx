import React, {useState, useEffect, useRef} from 'react';
import BDayCardPic from '../assets/images/e-invites.jpg';
import Stylesheet from "reactjs-stylesheet";
import '../assets/css/e-invites.css';
import html2canvas from 'html2canvas';
import { useMediaQuery } from 'react-responsive';
import PageProgress from '../components/PageProgress'


export default function EInvites() {
    const changetextvw435 = useMediaQuery({query: '(max-width: 435px)'});
    const changetextvw400 = useMediaQuery({query: '(max-width: 400px)'});
    const changetextvw350 = useMediaQuery({query: '(max-width: 350px)'});
    const [topdivmargin, settopdivmargin] = useState(!changetextvw435 ? '-14vw' : changetextvw400 ? (changetextvw350 ? '-14.5vw' : '-14vw')  : '-3.3rem')
    const [topdivchanged, settopdivchanged] = useState(null);
    const firstRender = useRef(true);

    useEffect(() => {
        console.log("useeffect ran");
        if (!firstRender.current) {
            // exportAsImage();
        }
        else{
            firstRender.current = false;
        }
    }, [topdivchanged])

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
        const image = canvas.toDataURL("image/png", 1.0);
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = "BirthdayCard";
        fakeLink.href = image;
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
        fakeLink.remove();
    }

  return (
    // <div>
    //     <div id='CardtoSave'>
    //         <img style={Object.assign({}, aboutstyles.image,)} src={BDayCardPic} alt="Rectangle Poster" height="100%" width="100%" />
    //         <div id='invitediv' style={{marginTop: topdivmargin}}>
    //             <form onSubmit={handleSubmit} className='inviteform'>
    //                 <label>
    //                     <input 
    //                         className='inputs'
    //                         type="text" 
    //                         name="ChildName" 
    //                         placeholder="Child's Name"
    //                     />
    //                 </label>
    //                 <label style={{marginLeft: '2%'}}>
    //                     <input 
    //                         className='inputs'
    //                         type="text"
    //                         name="Location" 
    //                         placeholder="Location"
    //                     />
    //                 </label>
    //                 <label style={{maxWidth: '3rem'}}>
    //                     <input 
    //                         className='inputs'
    //                         type="text" 
    //                         name="Party Time" 
    //                         placeholder="Party Time"
    //                     />
    //                 </label>
    //                 <label style={{maxWidth: '4.5rem'}}>
    //                     <input 
    //                         className='inputs'
    //                         type="text"
    //                         name="Phone Number" 
    //                         placeholder="Phone #"
    //                     />
    //                 </label>
    //             </form>
    //             {/* <form style={{marginLeft: '24%'}}>
    //             </form>             */}
    //         </div>
    //         {/* <div style={{display: 'flex', flexDirection: 'row', marginLeft: '15%',
    //             marginTop: !changetextvw435 ? '-3.5vw' : changetextvw400 ? (changetextvw350 ? '-4vw' : '-3.5vw')  : '-3.5vw', }}
    //         >
    //             <form onSubmit={handleSubmit}>
    //             </form>
    //             <form style={{marginLeft: '24%'}}>
    //             </form>            
    //         </div> */}
            
    //     </div>
    //     <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: "'Teko', sans-serif"}}>
    //             <input id="saveimage" type="submit" value='Save Image'
    //                 onClick={() => {
    //                     // MUST FIX TOP DIV MARGIN FOR LARGE SCREENS LATER ON
    //                     settopdivmargin(!changetextvw435 ? '-14vw' : changetextvw400 ? (changetextvw350 ? '-16.5vw' : '-15vw')  : '-14vw');
    //                     settopdivchanged(true);
    //                     console.log("Export called");
    //                 }}
    //             />
    //     </div>
    //     <div style={{display: 'flex', justifyContent: 'center', fontFamily: "'Teko', sans-serif", color: 'white', fontSize: '4vw', marginTop: '4vw', textAlign: 'center'}}>
    //         If you need to make any changes after saving image, reload the page first!!!
    //     </div>
    // </div>
    <PageProgress type={"Page"} />
  )
}

const aboutstyles = Stylesheet.create({
  image: {
    marginTop: '6.5%',
  },

  aboutsection: {
    position: 'absolute',
    marginTop: '-75%',
    color: 'white',
    fontFamily: "'Playfair Display', serif",
    fontSize: '150%',
    textAlign: 'center',
  }
})