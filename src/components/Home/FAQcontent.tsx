import React from 'react'
import Accordion from '../ui/accordion'
import Wrapper from '../ui/wrapper'

const FAQcontent = () => {
    return (
        <Wrapper className='mt-16 '>
            <div className='max-w-[600px] mx-auto flex flex-col gap-5'>
                <h1 className='text-center text-3xl font-semibold mb-5'>FAQs</h1>
                <Accordion title='What age group is best suited for your courses?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='Does my child need prior coding experience?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='How are the classes conducted?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='How are the classes conducted?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='What programming languages do you teach?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='How can I enroll my child in a course?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='Will my child build real projects?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
                <Accordion title='How can I track my child’s progress?'>
                    <p className='text-primary-text text-base'> Our courses are designed for children aged 5 to 16 years, with structured learning paths based on age and skill level. We offer beginner-friendly courses for young learners and advanced programming for older students.</p>
                </Accordion>
            </div>

        </Wrapper>
    )
}

export default FAQcontent 