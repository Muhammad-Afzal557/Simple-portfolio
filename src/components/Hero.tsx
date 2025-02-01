import React from 'react'
import Navbar from '@/components/Navbar'


const Hero = () => {
  return (
    <div>
           
    <div id='hero' className=' w-52 h-52 bg-[url(/WhatsAppb9.jpg)] bg-cover mt-10 ml-20 rounded-[100px] '>

            <div className=' container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
                <div className=' hidden lg:block'></div>
                <div className=' text-[40px] sm:text-[40px] font-bold leading-tight flex justify-center items-center'>
                    <div className=' ml-[40rem] mb-80 '>
                        <p>Here</p>
                        <p>is</p>
                        <p>Muhammad Afzal Soomro</p>
                    </div>
                </div>
            </div>
      
    </div>
    </div>

  )
}

export default Hero
