import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'
import Wrapper from '../ui/wrapper'

const BookingContent = () => {
    return (
        <Wrapper className="flex gap-10 pt-20">
            <div className="flex-1 flex flex-col gap-5 justify-center">
                <h1 className="text-3xl font-semibold">
                    Purchase Your Lessons & Learn <br />
                    from the Best!
                </h1>
                <p className="text-primary-text">
                    Join our interactive courses and get hands-on experience with top industry professionals. Whether you're a beginner or an advanced learner, we have the perfect lesson for you.
                </p>
                <Button className="w-fit">Book Your Lessons</Button>
            </div>
            <div className="flex-1"><Image src={"/BookYourLessionImage.png"} height={500} width={500} className="w-full h-full" alt="Book Your Lession Image" /></div>
        </Wrapper>
    )
}

export default BookingContent