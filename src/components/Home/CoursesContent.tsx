"use client"
import { ArrowLeft, ArrowRight, Circle, SquareArrowDownLeft, SquareArrowDownRight, UserRound } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from '../ui/button'
import RatingStar from '../ui/rating'
import Wrapper from '../ui/wrapper'

const courses = [
    {
        "title": "Future Innovators",
        "age_group": "15-17 Years",
        "description": "Create dynamic & interactive web elements through JS along with Python.",
        "rating": 4.5,
        "reviews": "1.2K",
        "image": "/Courses/future-innovator.png"
    },
    {
        "title": "Mathematics",
        "age_group": "5-17 Years",
        "description": "Gain a strong foundation in key math topics & apply math skills in programming.",
        "rating": 4,
        "reviews": "1.2K",
        "image": "/Courses/math.png"
    },
    {
        "title": "AI/ML",
        "age_group": "14-17 Years",
        "description": "Learn how computers think & learn basic data science and machine learning.",
        "rating": 4.5,
        "reviews": "1.2K",
        "image": "/Courses/ai-ml.png"
    },
    {
        "title": "Mini Coders",
        "age_group": "5-7 Years",
        "description": "Independently code simple projects in Scratch Jr.",
        "rating": 2.5,
        "reviews": "1.2K",
        "image": "/Courses/mini-coders.png"
    },
    {
        "title": "Rising Coders",
        "age_group": "8-10 Years",
        "description": "Engage in Project-Based Learning for real-world application with Scratch.",
        "rating": 4.5,
        "reviews": "1.2K",
        "image": "/Courses/rising-coders.png"
    },
    {
        "title": "Young Developers",
        "age_group": "11-14 Years",
        "description": "Create simple web pages and understand web structure & styling.",
        "rating": 3.5,
        "reviews": "1.2K",
        "image": "/Courses/young-coders.png"
    },
    {
        "title": "Robotics",
        "age_group": "10-17 Years",
        "description": "Understand how robots work and how to program them for real-world applications.",
        "rating": 4.5,
        "reviews": "1.2K",
        "image": "/Courses/robotics.png"
    },
    {
        "title": "Game Development",
        "age_group": "10-17 Years",
        "description": "Understand game logic, design, and interactivity.",
        "rating": 4.5,
        "reviews": "1.2K",
        "image": "/Courses/game-dev.png"
    }
]

const CoursesContent = () => {
    const [cardPerSlide, setCardPerSlide] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCards, setActiveCards] = useState<Course[]>([]);


    const totalPages = Math.ceil(courses.length / cardPerSlide);

    useEffect(() => {
        const updateCardPerSlide = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardPerSlide(3);
            } else if (width >= 768) {
                setCardPerSlide(2);
            } else {
                setCardPerSlide(1);
            }
        };

        updateCardPerSlide();
        window.addEventListener('resize', updateCardPerSlide);
        return () => window.removeEventListener('resize', updateCardPerSlide);
    }, []);

    useEffect(() => {
        const startIdx = (currentPage - 1) * cardPerSlide;
        const endIdx = startIdx + cardPerSlide;
        setActiveCards(courses.slice(startIdx, endIdx));
    }, [cardPerSlide, currentPage]);

    const goToPrevPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
    const goToNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));

    return (
        <div className='bg-[#e5effc]'>
            <Wrapper className='relative'>
                <h1 className='text-center text-3xl font-semibold my-5'>Courses We Provide</h1>

                {/* Cards Grid */}
                <div className='w-full relative flex flex-col gap-10'>
                    <div className='flex gap-2 text-gray-500 w-full justify-between items-center'>
                        <div className='flex gap-2'>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Circle size={16} className={twMerge('text-gray-500 cursor-pointer outline-none hover:scale-125 transition-all', currentPage === i + 1 ? "bg-primary border-primary rounded-full" : "")} key={`${i + 1} page`} onClick={() => setCurrentPage(i + 1)} />
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <Button className='rounded-2xl' disabled={currentPage === 1} varient='outline' onClick={goToPrevPage}>
                                <ArrowLeft />
                            </Button>
                            <Button className='rounded-2xl' varient='outline' disabled={currentPage === totalPages} onClick={goToNextPage}>
                                <ArrowRight />
                            </Button>
                        </div>

                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-8 gap-10 sm:grid-cols-8 overflow-x-auto">
                        {activeCards.map(course => (
                            <CourseCard course={course} key={course.title} />
                        ))}
                    </div>
                    <Button className='w-fit mx-auto'>View All Courses</Button>

                </div>

            </Wrapper>
        </div>
    );
};

interface Course {
    title: string;
    age_group: string;
    description: string;
    rating: number;
    reviews: string;
    image: string;
}

const CourseCard = ({ course }: { course: Course }) => {
    return (
        <div className="lg:col-span-4 md:col-span-4 sm:col-span-8 p-5 bg-[rgba(255,255,255,0.3)] rounded-3xl">
            <Image alt='CourseImage' src={course.image} width={200} height={200} className='w-full object-cover aspect-square rounded-3xl mb-2 max-h-[250px]' />
            <div className='font-semibold text-lg'>{course.title}</div>
            <div className='flex gap-1 items-center'><UserRound className='text-gray-500' size={16} /> <span className='text-primary'>{course.age_group}</span></div>
            <div>{course.description}
            </div>
            <div className='flex gap-2 text-gray-500 items-center text-sm'>
                <RatingStar rating={course.rating} />({course.reviews})
            </div>
        </div>
    )
}

export default CoursesContent