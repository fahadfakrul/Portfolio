import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub></FaGithub>
        <FaLinkedin></FaLinkedin>
        <FaSquareXTwitter></FaSquareXTwitter>
      </div>
    </nav>
  );
};

export default NavBar;
