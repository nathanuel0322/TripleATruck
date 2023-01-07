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
                    <IconButton onClick={() => drawerfunc(false)} sx={{justifyContent: 'flex-start'}}>
                        <CloseIcon fontSize='small' sx={{width: 1/4, height: 1/4, color: "white"}} />
                    </IconButton>
                </div>
                <div className='linkdiv'>
                    {['Services', 'Packages', 'Game List', 
                    // 'Gallery', 
                    'E-Invites', 
                    'Contact Us', 'About', 'Book Now'].map((text, index) => (
                        index !== 6 ?
                            <Link key={index} to={`/${text.split(" ").join("").toLowerCase()}`}
                                style={{textDecoration: 'none', color: 'white', fontFamily: "'Play', sans-serif", fontSize: '1rem', fontWeight: 600,
                                    margin: '.665rem 1rem'
                                }}
                                onClick={() => drawerfunc(false)}
                            >
                                {text}
                            </Link>
                        :
                            <a key={index} className="btn btn-md bold btn-primary-outline display-7" style={{textAlign: 'center', color: '#1bc2ca', borderColor: '#1bc2ca', 
                                borderRadius: 40, textTransform: 'uppercase', padding: '.625rem 2rem', width: '45%', border: '2px solid'}} target="_blank" 
                                rel="noreferrer" href="https://pkcjftgpluneupxnjv.10to8.com"
                            >
                                Book Now
                            </a>  
                    ))}
                </div>
            </div>
        </SwipeableDrawer>
    );
}