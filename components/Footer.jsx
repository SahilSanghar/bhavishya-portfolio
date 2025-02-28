"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IconDownload } from "@tabler/icons-react";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlineSettingsPhone } from "react-icons/md";

const Footer = () => {
    const handleDownload = () => {
      const resumeUrl = "/Resume.pdf"; // Update this with your actual resume file path
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Bhavishya_Pandit_Resume.pdf"; // Change the file name as needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

return (
    <div className="grid max-sm:grid-cols-2 max-sm:px-5 lg:grid-cols-6 max-sm:gap-10 lg:gap-20 bg-[#171717] -mx-12 -mb-2 py-7 max-sm:mt-14">
        <div className="max-sm:hidden"></div>
        <div className="max-sm:space-y-3.5">
            <h3 className="max-sm:text-2xl lg:text-3xl lg:text-center">Social Links</h3>
            <hr className="w-[35%] lg:mx-auto border-t-4 rounded-xl border-gray-500 lg:my-2" />
            <div className="text-3xl py-2.5 flex items-center justify-around">
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
            <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition my-3"
            >
                <IconDownload className="h-6 w-6" />
                <span className="">My Resume</span>
            </button>
        </div>
        <div className="">
            <ul className="space-y-3  max-sm:text-sm lg:text-xl">
                <p className="max-sm:text-2xl lg:text-3xl">Resources</p>
                <hr className="w-[38%] border-t-4 rounded-xl border-gray-500 my-2" />
                <li className=""><a href="#about">About</a></li>
                <li className=""><a href="#experience">Experience</a></li>
                <li className=""><a href="#education">Education</a></li>
                <li className=""><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div className="">
            <ul className="space-y-3 max-sm:text-sm lg:text-xl">
                <p className="max-sm:text-2xl lg:text-3xl">Profiles</p>
                <hr className="w-[28%] border-t-4 rounded-xl border-gray-500 my-2" />
                <li className=""><a href="https://developer.ibm.com/profiles/bhavishya.pandit/">IBM</a></li>
                <li className=""><a href="https://www.freecodecamp.org/news/author/bhav09/">Freecode Camp</a></li>
            </ul>
        </div>
        <div className="">
            <ul className="space-y-3  max-sm:text-sm lg:text-xl">
                <p className="max-sm:text-2xl lg:text-3xl">Contact</p>
                <hr className="w-[38%] border-t-4 rounded-xl border-gray-500 my-2" />
                <li className="">
                    <p className="lg:flex">bhavishyapandit9 <span className="">@gmail.com</span></p>
                </li>
                <li className="">
                    <p className="">+91 8849414781</p>
                </li>
            </ul>
        </div>
    </div>
)
}

export default Footer