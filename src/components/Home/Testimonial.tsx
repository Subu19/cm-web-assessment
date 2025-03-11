import TestimonialsIcon from '../icons/TestimonialsIcon'
import Wrapper from '../ui/wrapper'

const Testimonial = () => {
    return (
        <Wrapper className='mt-16'>
            <h1 className='text-3xl font-semibold text-center'>Trusted by Parents like you!</h1>
            <div className='flex gap-5 justify-evenly mt-20'>
                <div className='border-gray-400 border rounded-2xl p-5 flex flex-col gap-5'>
                    <TestimonialsIcon />
                    <p>“My child absolutely enjoys the coding sessions! The classes are highly interactive and engaging, making learning fun and exciting. The one-hour sessions fly by, and even after months, the enthusiasm remains high. A fantastic experience for young minds! Thank you, CodeMantra team!"</p>
                    <h2 className='font-semibold text-primary-text'>— Samer S.</h2>
                </div>
                <div className='border-gray-400 border rounded-2xl p-5 flex flex-col gap-5 -translate-y-10'>
                    <TestimonialsIcon />
                    <p>"Our son loved the robotics classes with Poornima. Each session brought new challenges that kept him engaged and eager to learn more. The perfect blend of hands-on learning and fun made him look forward to every class. We highly recommend this program for young tech enthusiasts!"                        </p>
                    <h2 className='font-semibold text-primary-text'>— Adrian Stezar</h2>
                </div>
                <div className='border-gray-400 border rounded-2xl p-5 flex flex-col gap-5'>
                    <TestimonialsIcon />
                    <p>“My child loved the coding classes! The interactive projects kept them engaged, and they are now building their own games. The one-hour sessions fly by, and even after months, the enthusiasm remains high. A fantastic experience for young minds! Thank you, team!"</p>
                    <h2 className='font-semibold text-primary-text'>— Sarah M.</h2>
                </div>
            </div>
        </Wrapper>
    )
}

export default Testimonial