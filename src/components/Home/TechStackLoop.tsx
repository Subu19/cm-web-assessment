import Image from 'next/image'
import Marquee from 'react-fast-marquee'
const techStackItems = [
    {
        name: "Javascript",
        path: "/techstack/js.svg"
    },
    {
        name: "CSS",
        path: '/techstack/css.svg'
    }, {
        name: "HTML",
        path: "/techstack/html.svg"
    },
    {
        name: "Python",
        path: "/techstack/python.svg"
    },
    {
        name: "Robotics",
        path: "/techstack/robot.png"
    }, {
        name: "Scratch",
        path: "/techstack/scratch.png"
    }
]

const TechStackLoop = () => {
    return (
        <div className="w-full py-10" >
            <Marquee pauseOnHover>
                {techStackItems.map((item) => <TechStackItem key={item.name} name={item.name} path={item.path} />)}
            </Marquee>
        </div>
    )
}
const TechStackItem = ({ name, path }: { name: string, path: string }) => {
    return <div className="w-fit p-3 px-10 border border-gray-300 bg-[#f3f7fe] ml-16 rounded-2xl flex gap-4 items-center">
        <Image alt={name} src={path} width={30} height={30} />{name}
    </div>
}
export default TechStackLoop