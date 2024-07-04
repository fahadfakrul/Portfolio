import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:1}}
          transition={{duration:1}} className="my-4">{CONTACT.address}</motion.p>
        <motion.p whileInView={{x:0 , opacity:1}}
          initial={{x:100 , opacity:1}}
          transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a className="transition hover:scale-110" href="https://github.com/fahadfakrul" target="blank"> <FaGithub ></FaGithub></a>
        <a className="transition hover:scale-110" href="https://linkedin.com/in/fahadfakrul" target="blank"><FaLinkedin></FaLinkedin></a>
        <a className="transition hover:scale-110"  href="https://twitter.com/fahadfakrul916" target="blank"><FaSquareXTwitter></FaSquareXTwitter></a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
