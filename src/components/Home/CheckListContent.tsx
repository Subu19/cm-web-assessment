import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Wrapper from '../ui/wrapper'

const checklist = [
    {
        name: "Project-based Learning",
        desc: "Our hands-on approach ensures that students learn by creating real applications rather than just memorizing concepts. Each lesson is designed around practical projects that reinforce coding principles and help students develop problem-solving skills."
    },
    {
        name: "Expert-Led Sessions",
        desc: "Learn from industry professionals and experienced educators who are passionate about teaching coding. Our instructors provide personalized guidance, ensuring that every student understands concepts and progresses at their own pace."
    },
    {
        name: "Structured Progression",
        desc: "Our age-wise curriculum is designed to build skills gradually, ensuring students advance step by step. Whether starting with block coding or moving into real-world programming languages like Python and JavaScript, students gain a solid foundation for future success."
    },
    {
        name: "Course completion Certificate",
        desc: "After completing each course, students receive an official certification recognizing their achievements. This can be showcased in their academic portfolio, helping them stand out in school and future career opportunities."
    },
]

const CheckListContent = () => {
    return (
        <Wrapper className="flex gap-10 pt-20">
            <div className="flex-1 hidden md:block"><Image src={"/WhatWillYouGetImage.png"} height={500} width={500} className="w-full h-full object-contain max-h-[500px]" alt="Book Your Lession Image" /></div>
            <div className="flex-1 flex flex-col gap-5">
                <h1 className="text-3xl font-semibold">
                    What Will You <span className="text-primary">Get?</span>
                </h1>
                <div className="text-primary-text flex flex-col gap-5">
                    {checklist.map((checklist) => {
                        return <CheckList desc={checklist.desc} name={checklist.name} key={checklist.name} />
                    })}
                </div>
            </div>
        </Wrapper>
    )
}
const CheckList = (checklist: { name: string, desc: string }) => {
    return <div className="bg-white big-drop-shadow rounded-2xl p-5 flex gap-5">
        <CheckBox />
        <div className="flex flex-col gap-2">
            <h1 className=" font-semibold text-primary-text">{checklist.name}</h1>
            <p className="text-sm text-primary-text">{checklist.desc}</p>
        </div>
    </div>
}


const CheckBox = () => {
    return <div className="rounded-lg flex items-center justify-center p-1 bg-primary w-fit h-fit text-white">
        <Check className="stroke-3" />
    </div>
}

export default CheckListContent