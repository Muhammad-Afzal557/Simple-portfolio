import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";


import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className=' pt-32 container'>
        <div className=' grid md:grid-cols-2 gap-12'>
            <div className=' space-y-8'>
                <h2 className=' text-4xl '>Get in touch </h2>
          <p className=' text-gray-400 text-[18px] pt-2'>
            Drop me line a, give me a call ,or send me a message by submitting the form.
          </p>
          <div className=' flex gap-4 items-center'><AiOutlineMail size={30}  />
          soomor123@gmail.com
          </div>
          <div className=' flex gap-4 items-center'><BsTelephone  size={30}/>
          +92 3242000039
          </div>
            </div>
            <div className=" space-y-8">
              <div className=" flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className=" h-[49px] bg-transparent border-accent border-2 rounded-[10px] border-solid" id="name"/>
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input type="email" 
                className=" h-[49px] bg-transparent border-accent border-2 rounded-[10px] border-solid" id="email"/>
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="phone">Phone</label>
                <input type="phone" 
                className=" h-[49px] bg-transparent border-accent border-2 rounded-[10px] border-solid" id="phone" required/>
              </div>
              <div className=" flex flex-col gap-1">
                <label htmlFor="msg">Message</label>
                <textarea  
                className=" bg-transparent border-accent border-2 rounded-[10px] border-solid" id="msg" rows={8}>
                </textarea>
              </div>
              <button className=" bg-scroll p-2 px-6 bg-accent">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact



{/* <AiOutlineMail /> */}
