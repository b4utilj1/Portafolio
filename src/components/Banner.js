import React from 'react';

// images

import image from '../assets/avatar.png'

// icons
import {FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

// types animations
import {TypeAnimation} from 'react-type-animation'

// Motion
import {motion} from 'framer-motion'

// variantes
import {fadeIn} from '../variants'

const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:min-h[78vh] items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row items-center lg-gap-x-12'>
        {/* Text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.4)}
          initial="hidden" 
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '>Santiago 
            <span > Monsalve</span></motion.h1>                                                                                                                                                                                                                                                                      
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden" whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
          <span className=' text-white mr-4'>Soy un</span>
         <TypeAnimation  
         sequence={[
          'Desarrollador',
          2000,
          'Junior',
          2000,
          'Estudiante',
          2000, 
         ]}
         speed={50}
         className='text-accent'
         repeat={Infinity}
         wrapper='span'
         />
         </motion.div>
         <motion.p
         variants={fadeIn('up', 0.4)}
         initial="hidden" 
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}} 
         className='text-[36px] mb-8 max-w-lg mx-auto lg:-mx-0'>Soy un estudiante de analisis
          y desarrollo de softtware del sena de medellin
          , tengo 19 años soy una persona muy apasionada por aprender tecnologias o cosas nuevas, soy
          una persona muy responsable con mi trabajo y con la capacidad de aprender rapido y aprender de las demas personas.
         </motion.p>
         <motion.div
         variants={fadeIn('up', 0.4)}
         initial="hidden" 
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}} 
         className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>
          <button className='btn btn-lg'>Contactarme</button>
          <a href='#' className='text-gradient btn-link'>Mi Portafolio
          </a>
         </motion.div>
         {/* Socials */}
         <motion.div
         variants={fadeIn('up', 0.4)}
         initial="hidden" 
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}}  
         className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://github.com/b4utilj1'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/santiago-monsalve-953497218/'>
            <FaLinkedin />
          </a>
          <a href='https://wa.me/3165167056'>
            <FaWhatsapp />
          </a>
         </motion.div>
        </div>
        {/* image */}
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden" 
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={image} alt='' />
        </motion.div>
      </div>
    </div>
  </section>
   
};

export default Banner;
