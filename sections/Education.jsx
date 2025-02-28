import React from 'react';
import Image from 'next/image';
import { IoRocketSharp } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { BiBookOpen } from "react-icons/bi";

const Education = () => {
return (
    <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto" id='education'>
      {/* Left Side - Image */}
    <div className=''>
        <Image src="/Hero.webp" alt="Education" width={500} height={200} className="lg:w-full lg:h-[90vh]" />
    </div>
    
      {/* Right Side - Text */}
    <div className='lg:pt-10'>
      <div className="">
        <h2 className="max-sm:text-lg lg:text-xl pb-2 flex items-center gap-3"><IoRocketSharp /> <span>Education</span></h2>
        <h3 className="max-sm:text-3xl lg:text-5xl">Enlightened The <br/>Pathways</h3>
        <hr className="w-[20%] border-t-4 rounded-xl border-gray-500 mt-5" />
        <p className="py-3 font-extralight opacity-70">I'm a Senior GenAI Engineer, LinkedIn Top Voice, Educator and Content Creator with a passion for mentoring and empowering others to get started in tech. With 5 years of experience in creating compelling content on Python, ML/DL, GenAI/LLMs, Data Analysis, Data Visualization, Computer Vision, NLP, Git, and GCP, I've reached over 20 Million content views across social media platforms including LinkedIn, Twitter, 𝗠𝗟 𝗜𝗻𝗱𝗶𝗮 (now Age of Geeks) etc.</p>
      </div>
      <div className="pt-5">
        <div className="flex lg:items-center gap-7 py-5">
          <div className="max-sm:text-3xl lg:text-5xl max-sm:mt-4 font-extralight opacity-70"><PiGraduationCap /></div>
          <div className="">
            <h3 className="max-sm:text-lg lg:text-2xl">Masters in Machine Learning</h3>
            <p className="max-sm:text-sm font-extralight opacity-70">University of Arizona, 2023 - 2025</p>
          </div>
        </div>
        <div className="flex lg:items-center gap-7 py-5">
          <div className="max-sm:text-3xl lg:text-5xl max-sm:mt-4 font-extralight opacity-70"><BiBookOpen /></div>
          <div className="">
            <h3 className="max-sm:text-lg lg:text-2xl">BE - Computer Science Hons</h3>
            <p className="max-sm:text-sm font-extralight opacity-70">Chandigarh University, 2017 - 2021</p>
          </div>
        </div>
      </div>
      </div>
    </div>
);
};

export default Education;