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
                    // 'Gallery', 'E-Invites', 
                    'Contact Us', 'About', 'Book Now'].map((text, index) => (
                        <Link key={index} to={`/${text.split(" ").join("").toLowerCase()}`} 
                            style={{
                                textDecoration: 'none',
                                color: index === 5 ? '#1bc2ca' : 'white',
                                fontFamily: "'Play', sans-serif",
                                fontSize: '1rem',
                                fontWeight: 600,
                                margin: '.665rem 1rem',
                                borderColor: index === 5 && '#1bc2ca',
                                borderRadius: index === 5 && 40,
                                textTransform: index === 5 && 'uppercase',
                                padding: index === 5 && '.625rem 2rem',
                                width: index === 5 && '100%',
                                textAlign: index === 5 && 'center',
                                border: index === 5 && '2px solid'
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