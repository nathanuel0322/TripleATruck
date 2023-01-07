import '../assets/css/aboutus.css'
import { colorSet } from '../GlobalStyles'

export default function AboutUs() {
    return (
        <div className='abouttext'>
            <h1 style={{color: colorSet.primary, fontSize: '2.5rem'}}>About Us</h1>
            <p>
                <span style={{color: colorSet.primary}}>Triple A Mobile Gaming</span> was inspired by our 3 energetic kids: 
                {/* <span style={{color: colorSet.primary}}> Austin, Avery, and Ava</span>. */}
                <span style={{color: colorSet.primary}}> A</span>ustin, <span style={{color: colorSet.primary}}> A</span>very, and <span
                 style={{color: colorSet.primary}}> A</span>va.
            </p>
            <p>
                They’re just 3 happy and enthusiastic gamers who love to have <span style={{color: colorSet.primary}}>FUN! </span> 
                Our brand-new, top-of-the-line gaming truck is our pride and joy.
            </p>
            <p>We selected and built this truck with everything a gamer would need to have a momentous experience.</p>
            <p>
                We pride ourselves in delivering not just a party, but a memorable event for you and your guests. 
                Whether you’re having a BBQ, social gathering, corporate or school events, this game truck has it all. 
            </p>
            <p>
                9 50-inch 4K TV's, various gaming consoles: <span style={{color: 'royalblue'}}>PS5's</span>, 
                <span style={{color: 'limegreen'}}> XBOX Series X's</span>, <span style={{color: 'royalblue'}}> PS4's</span>, 
                    <span style={{color: 'red'}}> Nintendo Switches</span>, and more! Comfortably fits 18+ of your friends, 
                surround sound inside and outside the truck with <span style={{color: 'red'}}>heat</span> and 
                <span style={{color: 'deepskyblue'}}> air conditioning</span>.
            </p>
            <p>
                Don’t worry about germs, the trailer is <span style={{color: colorSet.primary}}>fully sanitized</span> from top to bottom after each party. 
                Servicing Morris and surrounding counties!
            </p>
            <p>
                We bring the fun to <span style={{color: colorSet.primary}}>YOU!</span>
            </p>
            <p>
                Check out our gallery and <span>
                    <a style={{color: 'dodgerblue', textDecoration: 'underline'}} href='tel:+19738458300'>call for more info</a></span>.
            </p>
            <p>
                For New York residents, check out our business partners, <span>
                    <a style={{color: 'rgb(255, 140, 0)', textDecoration: 'underline'}} href='https://www.prestigiousgamingonwheelsplus.com/' target="_blank" rel='noreferrer'>Prestigious Gaming on Wheels Plus</a>.
                </span>
            </p>
        </div>
    )
}