import ContactForm from '@/components/ContactForm'
import Resources from '@/components/Resources'
import React from 'react'

const CTA = () => {
return (
    <div className="max-w-[80%] mx-auto" id='contact'>
        <div className="grid grid-cols-2 py-20">
            <div className="">
            <p className="text-5xl text-center">Get in Touch</p>
            <hr className="w-[25%] mx-auto border-t-4 rounded-xl border-gray-500 mt-5" />
            <ContactForm />
            </div>
            <div className="mx-20">
            <p className="text-5xl">Resources</p>
            <hr className="w-[30%] border-t-4 rounded-xl border-gray-500 mt-5" />
            <Resources />
            </div>
        </div>
    </div>
)
}

export default CTA