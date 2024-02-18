import React from 'react';
import {motion} from 'framer-motion'
// Variants
import { fadeIn } from '../variants';
// Img
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section id='work' className='section'>
  <div className='container mx-auto'>
        <div className='flex  flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden" whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0'>
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>Mis Ultimos<br/>Proyectos</h2>
              <p className='max-w-sm mb-16'>Aca estan una serie de proyectos realizados por mi cuenta.
              hay proyectos mas avanzados como unos mas especiales aparte que constantemente estoy mejorando algunos y agregando detalles
              nuevos a ellos</p>
              <button className='btn btn-sm'>Ver todos los proyectos</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-3xl'>
                Diseños1
                </span>
               </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white '>Titulo de proyectos1</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden" whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 flex flex-col gap-y-20'>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className= 'text-gradient text-3xl'>
                Diseños2
                </span>
               </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white '>Titulo de proyectos</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} />
              {/* pretitle */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient text-3xl'>
                Diseños3
                </span>
               </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white '>Titulo de proyectos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  </section>;
};

export default Work;
