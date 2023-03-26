import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/css/sidenav.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer({drawerstate, drawerfunc}) {
    return (
        <SwipeableDrawer
            anchor={'right'}
            open={drawerstate}
            onOpen={()=>{}}
            onClose={() => drawerfunc(false)}
        >
            <div>
                <div>
                    <IconButton onClick={() => drawerfunc(false)} sx={{p: 0}}>
                        <CloseIcon fontSize='small' id="closeicon" sx={{width: 75, height: 75, color: "white"}} />
                    </IconButton>
                </div>
                <div className='linkdiv'>
                    {['Services', 'Packages', 'Game List', 
                    // 'E-Invites', 
                    'Contact Us', 'About', 'Book Now'].map((text, index) => (
                        text !== "Book Now" ?
                            <Link key={index} to={`/${text.split(" ").join("").toLowerCase()}`} className="reglinks"
                                onClick={() => drawerfunc(false)}
                            >
                                {text}
                            </Link>
                        :
                            <a key={index} id="bookbutton" className="btn btn-md bold btn-primary-outline display-7" target="_blank"
                                rel="noreferrer" href="https://pkcjftgpluneupxnjv.10to8.com" onClick={() => drawerfunc(false)}
                            >
                                Book Now
                            </a>  
                    ))}
                </div>
            </div>
        </SwipeableDrawer>
    );
}