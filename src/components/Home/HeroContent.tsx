import Image from 'next/image'
import AgeIcon from '../icons/AgeIcon'
import DesktopLiveIcon from '../icons/DesktopLive'
import PolygonBackground from '../icons/Polygon'
import StarBackground from '../icons/StarBackground'
import Button from '../ui/button'
import Wrapper from '../ui/wrapper'

const HeroContent = () => {
    return (
        <div className=" w-full md:h-[80vh] h-auto p-10 pb-0 relative">
            <Image alt="backgroundImage" src={"/Background.png"} height={730} width={1440} className="absolute h-full w-full top-0 left-0 -z-10 object-cover" />
            <Wrapper className="relative rounded-3xl rounded-b-none bg-gradient-to-r md:pt-0 pt-24 from-[rgba(202,221,253,1)] to-[rgba(255,255,255,0.5)] flex md:flex-row flex-col md:gap-2 gap-16 pb-0">

                {/* //absolute elements  */}
                <StarBackground className="absolute bottom-0 md:right-[50%] md:translate-[-50%] right-10" />
                <StarBackground className="absolute bottom-10 scale-[0.5] md:left-[40%] md:translate-[-50%] left-10" />
                <PolygonBackground className="absolute top-16 left-16" />
                <PolygonBackground className="absolute top-2 left-2 scale-75 rotate-[-5deg]" />

                {/* /// hero content  */}
                <div className=" flex-1 justify-center flex flex-col w-full gap-5">
                    <h1 className=" lg:text-4xl md:text-3xl text-3xl text-center md:text-start font-bold text-black">Empowering Young Minds <br /> with <strong className="text-primary">Future-Ready Skills!</strong></h1>
                    <p className="text-[#6C6C6C] text-center md:text-start">Join us in shaping the leaders of tomorrow through innovative <br /> learning experiences.</p>
                    <div className="flex text-[#6C6C6C] gap-10 text-sm justify-center md:justify-start">
                        <span className="flex gap-2 items-center"><DesktopLiveIcon /> Live 1:1 Classes</span>
                        <span className="flex gap-2 items-center"><AgeIcon /> For Ages 5-17</span>
                    </div>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <Button >Start Learning Now</Button>
                        <Button varient="outline">Talk to the Advisor</Button>
                    </div>
                </div>
                {/* //hero image  */}
                <div className="flex-1 flex items-end justify-center">
                    <Image alt="hero-banner" src={"/Hero-banner.png"} width={1000} height={1000} className="object-contain md:max-h-[100%] w-auto md:w-full" />
                </div>
            </Wrapper>
        </div>
    )
}

export default HeroContent