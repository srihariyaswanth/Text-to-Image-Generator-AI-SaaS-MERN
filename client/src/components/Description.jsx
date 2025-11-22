import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
        <img
          src={assets.sample_img_1}
          alt=""
          className='w-50 xl:w-80 rounded-lg shadow-lg'
        />

        <div className='max-w-xl'>
          <h1 className='text-3xl font-medium max-w-lg'>
            Introducing the AI-powered Text to Image Generator
          </h1>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            Enter any text prompt, and our next-generation AI instantly creates stunning, high-quality images. From product mockups to character art and beyond, even your wildest ideas can come to life with ease. With cutting-edge AI at its core, your creativity knows no bounds!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
