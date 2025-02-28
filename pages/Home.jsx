import Badge from '@/sections/Badge'
import CTA from '@/sections/CTA'
import Education from '@/sections/Education'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Project from '@/sections/Project'
import Speaker from '@/sections/Speaker'
import React from 'react'

const Landing = () => {
return (
    <>
        <Hero />
        <Badge />
        <Speaker />
        <Experience />
        <Education />
        <Project />
        <CTA />
    </>
)
}

export default Landing