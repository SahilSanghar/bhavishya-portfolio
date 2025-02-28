import ContactForm from '@/components/ContactForm'
import Resources from '@/components/Resources'
import React from 'react'

const CTA = () => {
return (
    <div className="lg:max-w-[80%] mx-auto" id='contact'>
        <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 max-sm:-mt-10 lg:py-20">
            <div className="">
            <p className="max-sm:text-3xl lg:text-5xl text-center">Get in Touch</p>
            <hr className="w-[25%] mx-auto border-t-4 rounded-xl border-gray-500 mt-5" />
            <ContactForm />
            </div>
            <div className="lg:mx-20">
            <p className="max-sm:text-3xl lg:text-5xl">Resources</p>
            <hr className="w-[30%] border-t-4 rounded-xl border-gray-500 mt-5" />
            <Resources />
            </div>
        </div>
    </div>
)
}

export default CTA