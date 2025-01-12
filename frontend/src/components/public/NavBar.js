import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();
  const [dropNav, setDropNav] = useState(false);
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <div className=" bg-blue-500 w-[100%] h-[60px] text-slate-100 flex justify-center items-center">
        24 x 7 Service - Get Personalized Quote Now{" "}
      </div>
      <div className=" flex md:flex-row flex-col md:justify-around justify-start items-center">
        <div className=" flex justify-between flex-row gap-10 items-center">
          <div className=" flex flex-row gap-[20px] w-full justify-between items-center">
            <img src={logo} alt="logo" className="md:w-[80px] w-[60px]" />
            <div className=" text-blue-500 font-bold text-[18px]">
              GLOBAL <span className=" text-green-500">EXPLORERS</span>
            </div>
          </div>
          <div
            className=" sm:hidden block cursor-pointer"
            onClick={() => setDropNav(!dropNav)}
          >
            <FontAwesomeIcon icon={dropNav ? faXmark : faBars} size="xl" />
          </div>
        </div>

        <div
          className={`
            ${
              dropNav
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            } sm:opacity-100 sm:pointer-events-auto sm:max-h-full flex flex-col sm:flex-row duration-500 md:text-[18px] text-[16px] overflow-hidden`}
          onClick={() => setDropNav(!dropNav)}
        >
          <Link
            className={`${
              isActive("/") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`/`}
          >
            Home
          </Link>
          <Link
            className={`${
              isActive("/about") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`about`}
          >
            About
          </Link>
          <Link
            className={`${
              isActive("/tour") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500 
            `}
            to={`tour`}
          >
            Tour
          </Link>
          <Link
            className={`${
              isActive("/contact") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`contact`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
