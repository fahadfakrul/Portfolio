import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from 'sweetalert2'
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vcbsupj', 'template_7q8w6th', form.current, {
        publicKey: 'Y8g9uKfrlm4PHW_sm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message is sent successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}} className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
        Contact Me
       
      </motion.h1>
      <div className="flex flex-wrap ">
        <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:1}}
          transition={{duration:1}}  className="w-full lg:w-1/2 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent   text-5xl flex items-center justify-center">
        <p>Let&apos;s work <br />
        together!</p></motion.div>
        <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:100 , opacity:1}}
          transition={{duration:1}}  className="w-full lg:w-1/2  p-10">
        <form className="flex-1" ref={form} onSubmit={sendEmail}>
         <input className="bg-transparent border-b outline-none py-3 px-2 transition-all  w-full placeholder:text-white focus:border-[#931CC1] " name="from_name" type="text"
         placeholder="Your Name" />
         <input className="bg-transparent border-b outline-none py-3 px-2 transition-all  w-full placeholder:text-white focus:border-[#931CC1] " name="email_id" type="email"
         placeholder="Your Email" />
         <textarea className="bg-transparent border-b outline-none py-12 px-2 transition-all  w-full placeholder:text-white focus:border-[#931CC1] " name="message" id="" placeholder="Your Message"></textarea>
         <button type="submit" className="border mt-3 border-[#931CC1] rounded-full p-3 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent transition hover:scale-105">Submit</button>
        </form>
        </motion.div>
      </div>
        </div>
    );
};

export default Contact;