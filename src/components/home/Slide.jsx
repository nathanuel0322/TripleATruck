import '../../assets/css/slide.css'

export default function Slide({image}) {
    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
            <img src={require(`../../assets/images/${image}`)} style={{ height: 'calc(100vh - 4.875rem)', width: '100%', objectFit: 'cover', filter: 'brightness(30%)'}}  alt='slideimage' />
            <p className='aaatitle' style={{position: 'absolute', alignSelf: 'center', color: 'white', fontFamily: "'Oswald', sans-serif", fontSize: '4.8rem'}}>AAA GAMING</p>
        </div>
    )
}