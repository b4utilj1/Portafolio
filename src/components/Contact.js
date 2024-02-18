import React from 'react';
// Motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return <section id='contact' className='section py-16 lg:section'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* Text */}
      <motion.div 
       className='flex-1'
       variants={fadeIn('left', 0.5)}
       initial="hidden" whileInView={'show'}
       viewport={{once: false, amount: 0.3}} >
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-5 tracking-wide'>Ponerse en contacto</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
           Vamos a trabajar <br/> juntos
          </h2>
        </div>
      </motion.div>
      {/* form */}
      <motion.form 
       variants={fadeIn('left', 0.5)}
       initial="hidden" whileInView={'show'}
       viewport={{once: false, amount: 0.3}}className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type='text'
        placeholder='Tu nombre'
        />
         <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type='text'
        placeholder='Tu Email'
        />
        <textarea placeholder='Tu mensaje' className=' resize-none mb-12 bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all'></textarea>
        <button className='btn btn-lg'>
          Enviar Mensaje
        </button>
      </motion.form>
    </div>

  </div>
  </section>;
};

export default Contact;
