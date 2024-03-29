import React from 'react';

// CountUp
import CountUp from 'react-countup';

// Observarble
import {useInView} from 'react-intersection-observer'

// Motion
import {motion} from 'framer-motion'

// Variant
import { fadeIn } from '../variants';

const About = () => { 
  const [ref, inView] = useInView({
   threshold: 0.5,
  });


  return (
   <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* Img */}
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        <motion.div 
        ariants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-accent'>Sobre mi</h2>
          <h3 className='h3 mb-4'>Soy un Desarrollador Junior</h3>
          <p className='mb-6'>
            En el momento solo cuento con experiencia en proyectos personales realizados por mi solo, estos meses de experiencia que tengo
            son haciendo proyectos personales
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-grandient mb-2'>
                {inView ?
                <CountUp
                start={0}
                end={19}
                duration={3}
              /> : null}
              </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Edad <br/>
                </div>
              </div>
              <div>
              <div className='text-[40px] font-tertiary text-grandient mb-2'>
                {inView ?
                <CountUp
                start={0}
                end={6}
                duration={3}
              /> : null}
              </div>
                <div className='font-primary text-sm tracking-[2px]'>
                Meses de <br/> experiencia
                </div>
              </div>
              <div>
              <div className='text-[40px] font-tertiary text-grandient mb-2'>
                {inView ?
                <CountUp
                start={0}
                end={3}
                duration={3}
              /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyectos <br/>  Realizados
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contactame</button>
                <a href='#' className='text-gradient btn-link '>Mi Portafolio</a>
              </div>
         </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
