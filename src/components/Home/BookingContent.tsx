"use client"
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'
import Wrapper from '../ui/wrapper'
const BookingContent = () => {
    return (
        <Wrapper className="flex gap-10 pt-20 lg:flex-row md:flex-row flex-col">
            <div className="flex-1 flex flex-col gap-5 justify-center">
                <motion.h1 initial={{ opacity: 0, translateX: -100 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1, duration: 1, ease: "backOut" }} whileInView={{ opacity: 1, translateX: 0 }} className="text-3xl font-semibold">
                    Purchase Your Lessons & Learn <br />
                    from the Best!
                </motion.h1>
                <motion.p initial={{ opacity: 0, translateX: -100 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2, duration: 1, ease: "backOut" }} whileInView={{ opacity: 1, translateX: 0 }} className="text-primary-text">
                    Join our interactive courses and get hands-on experience with top industry professionals. Whether you're a beginner or an advanced learner, we have the perfect lesson for you.
                </motion.p>
                <motion.div initial={{ opacity: 0, translateX: -100 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3, duration: 1, ease: "backOut" }} whileInView={{ opacity: 1, translateX: 0 }} >
                    <Button className="w-fit">Book Your Lessons</Button>

                </motion.div>
            </div>
            <div className="flex-1 flex md:justify-end justify-center"><Image src={"/BookYourLessionImage.png"} height={500} width={500} className="w-auto md:w-full h-full" alt="Book Your Lession Image" /></div>
        </Wrapper>
    )
}

export default BookingContent