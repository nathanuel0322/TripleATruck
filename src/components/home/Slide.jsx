import '../../assets/css/slide.css'

export default function Slide({image}) {
    return (
        <div className='imgdiv'>
            <img className='slideimg' src={image.slice(-3) === "jpg" ? require(`../../assets/images/${image}`) : image} 
                alt='slideimage'
            />
        </div>
    )
}