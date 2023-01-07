import '../../assets/css/slide.css'

export default function Slide({image}) {
    return (
        <div className='imgdiv'>
            <img className='slideimg' src={require(`../../assets/images/${image}`)} alt='slideimage' />
        </div>
    )
}