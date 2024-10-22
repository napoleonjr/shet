 

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="m-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl">AB</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a href="https://www.facebook.com/meowmeng31" aria-label="Facebook" className="hover:text-purple-600">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/jaywelryy/" aria-label="Instagram" className="hover:text-purple-600">
          <FaInstagram />
        </a>
        <a href="https://github.com/napoleonjr" aria-label="GitHub" className="hover:text-purple-800">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
