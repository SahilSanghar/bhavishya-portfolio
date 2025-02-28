import Image from 'next/image'
import React from 'react'

const Badge = () => {
return (
    <div className='flex items-center justify-center max-sm:gap-5 lg:gap-20 py-8'>
        <Image src='/IBM.webp' alt='IBM' width={100} height={100} />
        <Image src='/rakuten.png' alt='IBM' width={100} height={100} />
        <Image src='/packt.jpg' alt='packt' width={100} height={100} />
    </div>
)
}

export default Badge