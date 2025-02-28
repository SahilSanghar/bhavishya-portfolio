import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="grid grid-cols-2 max-w-5xl mx-auto gap-6">
      {/* First Row - Set fixed height */}
      <div className="flex items-center min-h-[300px]">
        <h2 className="uppercase">
          My Journey Of <br />
          Giving Back
        </h2>
      </div>
      <div className="flex items-center min-h-[300px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, et reprehenderit! 
        Quidem officia fuga et veniam, doloremque quis illum veritatis!
      </div>

      {/* Second Row - Auto height */}
      <div className="">
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <Image src='/IBM.webp' alt='IBM' width={100} height={100} />
            <div>
              <p className="font-semibold">IBM</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum quibusdam suscipit dolorem fugiat fuga consectetur architecto neque sint at?</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Image src='/rakuten.png' alt='Rakuten' width={100} height={100} />
            <div>
              <p className="font-semibold">Rakuten</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda veniam officia! Tenetur nulla quos amet aliquam porro magni eveniet quidem in ab? Ratione esse porro est incidunt minus veniam.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Image src='/packt.jpg' alt='Packt' width={100} height={100} />
            <div>
              <p className="font-semibold">Packt</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas numquam totam excepturi, delectus facilis beatae quisquam? Illo alias, fugit omnis ipsum, suscipit aut tempore nobis libero vel, adipisci praesentium.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Image src='/placeholder.webp' alt='Placeholder' width={1200} height={200} />
      </div>
    </div>
  )
}

export default Experience
