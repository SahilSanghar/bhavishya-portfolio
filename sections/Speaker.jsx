import Image from 'next/image';
import React from 'react';

const Speaker = () => {
return (
    <div className="p-6 max-w-5xl lg:mx-auto" id='about'>
      {/* Heading Section */}
    <h2 className="max-sm:text-3xl max-sm:w-[130%] lg:text-7xl max-sm:-ms-8 font-light text-center mb-2">Empowering Change,<br />Envisioning Tomorrow</h2>
    <hr className="w-[30%] mx-auto border-t-4 rounded-xl border-gray-500 mt-5 mb-20" />
      
      {/* Grid Section */}
    <div className="grid max-sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4">
        <div className="px-4 py-14 lg:w-[400px] h-[250px] max-sm:pt-36">
            <h4 className="max-sm:text-xl lg:text-3xl">Ministry of Home affairs</h4>
            <p className="max-sm:text-xl lg:py-5 max-sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est a placeat odio architecto ex explicabo nam assumenda maiores aliquam?</p>
        </div>
        <div className="p-4 mx-auto text-center max-sm:relative max-sm:-top-[300px] lg:w-[400px] h-[250px]">
          <Image src='/placeholder.webp' alt='placeholder' width={1200} height={200} />
        </div>
        <div className="max-sm:relative max-sm:-top-20 p-4 mx-auto text-center lg:w-[400px] h-[250px]">
          <Image src='/placeholder.webp' alt='placeholder' width={1200} height={200} />
        </div>
        <div className="max-sm:-mt-56 px-4 py-14 lg:w-[400px] h-[250px]">
            <h4 className="max-sm:text-xl lg:text-3xl">IIT Kharagpur & Jabalpur</h4>
            <p className="max-sm:text-xl lg:py-5 max-sm:py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est a placeat odio architecto ex explicabo nam assumenda maiores aliquam?</p>
        </div>
    </div>
    </div>
);
};

export default Speaker;
