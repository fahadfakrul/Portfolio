import html from "../assets/technologies/html.png";
import c from "../assets/technologies/c.png";
import cpp from "../assets/technologies/c++.png";
import canva from "../assets/technologies/canva.png";
import css from "../assets/technologies/css.png";
import express from "../assets/technologies/expressjs.png";
import figma from "../assets/technologies/figma.png";
import firebase from "../assets/technologies/firebase.png";
import git from "../assets/technologies/git.png";
import github from "../assets/technologies/github.png";
import javascript from "../assets/technologies/javascript.png";
import mongodb from "../assets/technologies/mongdb.png";
import react from "../assets/technologies/react.png";
import tailwind from "../assets/technologies/tailwind.png";
import {  motion } from "framer-motion";
const iconVariants = (duration) => ({
    initial:{y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}} className="my-20 text-center text-4xl bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent">
        Technologies
      </motion.h2>
      <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0 , x:-100}}
      transition={{duration:1.5}} className="flex flex-wrap max-w-2xl mx-auto justify-center items-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial='initial' animate="animate" className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={html} alt="" width={70} />
        </motion.div>
        <motion.div  variants={iconVariants(3)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={css} alt="" width={70} />
        </motion.div>
        <motion.div  variants={iconVariants(4)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={react} alt="" width={70} />
        </motion.div>
        <motion.div  variants={iconVariants(2)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={tailwind} alt="" width={70} />
        </motion.div>
        <motion.div  variants={iconVariants(4.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={javascript} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={express} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={firebase} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={git} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={mongodb} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={github} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={figma} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={canva} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={c} alt="" width={70} />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial='initial' animate="animate"  className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={cpp} alt="" width={70} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
