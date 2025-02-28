import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Hero = () => {
return (
    <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 overflow-hidden max-sm:h-[80vh] lg:h-[100vh]">
    <div className="max-sm:w-[100%] lg:p-10 max-sm:mt-24 lg:mt-36">
        <h3 className='opacity-80 font-light pb-3 max-sm:mt-40'>Hello, I'm</h3>
        <h1 className="max-sm:text-5xl lg:text-7xl lg:-ms-1.5 font-bold">Bhavishya</h1>
        <p className="mt-4 font-extralight opacity-70">
            I'm a Senior GenAI Engineer, LinkedIn Top Voice, Educator and Content Creator with a passion for mentoring and empowering others to get started in tech. With 5 years of experience in creating compelling content on Python, ML/DL, GenAI/LLMs, Data Analysis, Data Visualization, Computer Vision, NLP, Git, and GCP, I've reached over 20 Million content views across social media platforms including LinkedIn, Twitter, ML India (now Age of Geeks) etc.
        </p>
    </div>
    <div
        className="relative max-sm:-top-[640px] max-sm:left-14 lg:right-36 bg-cover bg-center max-sm:min-h-64 max-sm:w-[90%] lg:min-h-[685px] lg:w-full" 
        style={{ backgroundImage: 'url(hero.webp)' }}
    >
    </div>
    <div className="max-sm:hidden lg:relative -top-[390px] left-[1240px] flex flex-col gap-4 mt-20 text-3xl">
    <Link href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-600 transition-all cursor-pointer" />
    </Link>
    <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-800 transition-all cursor-pointer" />
    </Link>
    <Link href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="hover:text-blue-400 transition-all cursor-pointer" />
    </Link>
    </div>
    </div>
);}

export default Hero;
