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
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: "'Play', sans-serif", fontSize: 20, fontWeight: 600}}>
                    {['Services', 'Packages', 'Game List', 'Gallery', 'E-Invites', 'Contact Us', 'About', 'Book Now'].map((text, index) => (
                        <Link key={index} to={`/${text.split(" ").join("").toLowerCase()}`} 
                            style={{
                                textDecoration: 'none',
                                color: index === 7 ? '#1bc2ca' : 'white',
                                fontFamily: "'Play', sans-serif",
                                fontSize: '1rem',
                                fontWeight: 600,
                                margin: '.667rem 1rem',
                                borderColor: index === 7 && '#1bc2ca',
                                borderRadius: index === 7 && 40,
                                textTransform: index === 7 && 'uppercase',
                                padding: index === 7 && '.625rem 2rem',
                                width: index === 7 && '100%',
                                textAlign: index === 7 && 'center',
                                border: index === 7 && '2px solid'
                            }}
                            onClick={() => drawerfunc(false)}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </SwipeableDrawer>
    );
}