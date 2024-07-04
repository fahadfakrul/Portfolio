import { CONTACT } from "../constants";


const Footer = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
             <h2 className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Get in Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
        </div>
    );
};

export default Footer;