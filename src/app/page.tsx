import AgeIcon from "@/components/icons/AgeIcon";
import DesktopLiveIcon from "@/components/icons/DesktopLive";
import PolygonBackground from "@/components/icons/Polygon";
import StarBackground from "@/components/icons/StarBackground";
import Button from "@/components/ui/button";
import Wrapper from "@/components/ui/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white flex items-center">
      <div className=" w-full h-[80vh] p-10 pb-0 relative">
        <Image alt="backgroundImage" src={"/Background.png"} height={730} width={1440} className="absolute h-full w-full top-0 left-0 -z-10 object-cover" />
        <Wrapper className="relative bg-green-400 rounded-3xl rounded-b-none bg-gradient-to-r from-[rgba(202,221,253,1)] to-[rgba(255,255,255,0.5)] flex gap-2 pb-0">

          {/* //absolute elements  */}
          <StarBackground className="absolute bottom-0 right-[50%] translate-[-50%]" />
          <StarBackground className="absolute bottom-10 scale-[0.5] left-[40%] translate-[-50%]" />
          <PolygonBackground className="absolute top-16 left-16" />
          <PolygonBackground className="absolute top-2 left-2 scale-75 rotate-[-5deg]" />

          {/* /// hero content  */}
          <div className=" flex-1 justify-center flex flex-col w-full gap-5">
            <h1 className=" lg:text-4xl md:text-3xl sm:xl font-bold text-black">Empowering Young Minds <br /> with <strong className="text-primary">Future-Ready Skills!</strong></h1>
            <p className="text-[#6C6C6C]">Join us in shaping the leaders of tomorrow through innovative <br /> learning experiences.</p>
            <div className="flex text-[#6C6C6C] gap-10 text-sm">
              <span className="flex gap-2 items-center"><DesktopLiveIcon /> Live 1:1 Classes</span>
              <span className="flex gap-2 items-center"><AgeIcon /> For Ages 5-17</span>
            </div>
            <div className="flex gap-5">
              <Button >Start Learning Now</Button>
              <Button varient="outline">Talk to the Advisor</Button>
            </div>
          </div>
          {/* //hero image  */}
          <div className="flex-1 flex items-end">
            <Image alt="hero-banner" src={"/Hero-banner.png"} width={1000} height={1000} className="h-[90%] object-contain" />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
