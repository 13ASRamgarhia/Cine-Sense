import React from "react";
import logo from "../Assets/logo.png"
import { Link, useLocation } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Navbar = () => {
  const location = useLocation()
  
  const toggleHamburger = () => {
    document.getElementById("slideoverBG").classList.toggle("invisible");
    document.getElementById("slideroverContainer").classList.toggle("invisible");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  return (
    <>
      <nav className="navbar bg-bgColor fixed w-[100%] z-50 px-4 laptop:px-10 py-2 my-auto shadow-lg">
        <div className="w-full flex justify-between">
          <div className="brand-div text-3xl flex space-x-2 laptop:space-x-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <p className="brandName font-bold font-inter">Cine<span className="text-logoColor">Sense</span></p>
          </div>
          <div className="nav-items-div space-x-10 text-xl my-auto hidden laptop:flex">
            <div className="nav-item px-2 py-2">
              <Link to="/" className={`text-gray-600 hover:text-black focus:text-current font-montserrat ${location.pathname === "/" ? "underline underline-offset-2" : ""} transition-all duration-150`}>Home</Link>
            </div>
            <div className="nav-item px-4 py-2">
              <Link to="/About" className={`text-gray-600 hover:text-black focus:text-current font-montserrat ${location.pathname === "/About" ? "underline underline-offset-2" : ""} transition-all duration-150`}>About</Link>
            </div>
            <div className="flex space-x-4">
              <div className="nav-item px-4 py-1 rounded-xl border-2 border-white hover:border-2 hover:border-logoColor">
                <Link to="/Login" className={`text-gray-600 hover:text-black focus:text-current font-montserrat transition-all duration-150`}>Login</Link>
              </div>
              <div className="nav-item text-gray-50 bg-logoColor hover:bg-transparent hover:text-black px-4 py-1 rounded-xl border-2 border-logoColor">
                <Link to="/Signup" className={`hover:text-black focus:text-current font-montserrat transition-all duration-150`}>Sign up</Link>
              </div>
            </div>
          </div>
          <div onClick={toggleHamburger} className="flex flex-col laptop:hidden my-auto" id="">
            <div className={`hamburger space-y-1`}>
              <div className="bg-black w-6 h-1"></div>
              <div className="bg-black w-6 h-1"></div>
              <div className="bg-black w-6 h-1"></div>
            </div>
          </div>
        </div>

        <div className="mobileNavbar fixed inset-0 w-full z-50 h-screen invisible" id="slideroverContainer">
          <div  className="slideoverBG absolute duration-500 ease-out transition-all w-full h-screen bg-white opacity-50 right-0 top-0 translate-x-full" id="slideoverBG"></div>
          <div className="absolute duration-500 ease-out transition-all w-full h-full bg-logoColor right-0 top-0 translate-x-full" id="slideover">
            <div className="HBheader flex w-fit ml-auto mt-3 mr-3">
              <button onClick={toggleHamburger}>
                <Icon name="close" size="big" className="text-white" />
              </button>
            </div>
            <div className="HBcontent mt-10">
              <Link onClick={toggleHamburger} to="/" className="linkRouter no-underline hover:text-white hover:no-underline">
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">Home</div>
              </Link>
              <Link onClick={toggleHamburger} to="/" className="linkRouter no-underline hover:text-white hover:no-underline">
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">Home</div>
              </Link>
              <Link onClick={toggleHamburger} to="/About" className="linkRouter no-underline hover:text-white hover:no-underline">
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">About</div>
              </Link>
              <Link onClick={toggleHamburger} to="/Contact" className="linkRouter no-underline hover:text-white hover:no-underline">
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
