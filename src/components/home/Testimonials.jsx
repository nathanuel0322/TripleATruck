import '../../assets/css/testimonials.css'

export default function Testimonials() {
    const testimonialsarr = [
        {
            name: 'Zamira Sanchez', stars: 5,
            text: 'We used this company for our son’s 11th birthday and it was a hit! Everything was brand new and clean and we couldn’t have been happier with the family. My son and his friends can’t stop talking about what a great time they had.',
        },
        {
            name: 'Amber Martin', stars: 5,
            text: 'Highly recommend Triple A Mobile Gaming. Family owned business, very communicative and easy to work with. They were on-time, friendly and knowledgeable.\nWe hired them for a 12 year old birthday party and it went smoothly from start to finish. Their mobile gaming trailer was spacious, clean, well maintained and a big hit with the kids and their parents.\nWe will definitely hire again!',
        },
        {
            name: 'Nancy Keeler', stars: 5,
            text: 'Triple A was really amazing.  The space was super cool and the kids loved it.  They really have a great system and are really GREAT people.  Highly recommend!!!!!!!!',
        },
        {
            name: 'Dwight Phillips', stars: 5,
            text: 'Triple A mobile gaming was excellent!!!! The gaming trailer is much longer than expected with a bunch of gaming consoles and options to choose from!! Even have a racing chair, VE Gaming and an arcade machine outside the truck for the adults to play!! Truck have TV outside so people outside the truck can watch the gaming action!! The crew is professional and very attentive as well!!! I would recommend them to anyone!!! For this being my first time seeing a gaming truck, it was truly impressive!!',
        }
    ]

    return (
        <div id='testimonials' className='text-white flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'>Testimonials</h1>
            <div id="reviewdiv" className='flex flex-col items-center justify-center text-white'>
                {testimonialsarr.map((testimonial, index) => {
                    return (
                        <div key={index} className='reviews my-4 flex flex-col justify-around items-start w-3/5 rounded-lg p-3.5 gap-y-2 shadow-lg'>
                            <h3>{testimonial.name}</h3>
                            <div className='flex flex-row justify-evenly items-center'>
                                {[...Array(testimonial.stars)].map((star, index2) => {
                                    return (
                                        <img src={require('../../assets/icons/star.png')} alt='star' key={index2} />
                                    )
                                })}
                            </div>
                            <p>{testimonial.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}