import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 m-0 flex items-center justify-between py-6 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0)) shadow-lg z-10">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="ml-10 text-3xl font-bold text-purple-600 hover:text-purple-800">N</h1>
      </div>
      <div className="hidden md:flex items-center justify-center mr-10 gap-6 text-1xl">
        <a href="#home" className="hover:text-purple-600">Home</a>
        <a href="#about" className="hover:text-purple-600 delay-2.5">About</a>
        <a href="#projects" className="hover:text-purple-600">Project</a>
        <a href="#contact" className="hover:text-purple-600">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-violet shadow-lg md:hidden">
          <div className="flex flex-col items-center py-7 bg-black">
            <a href="#home" className="py-2 hover:text-purple-600">Home</a>
            <a href="#about" className="py-2 hover:text-purple-600 ">About</a>
            <a href="#projects" className="py-2 hover:text-purple-600">Project</a>
            <a href="#contact" className="py-2 hover:text-purple-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

