import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const AdNavBar = () => {
  const location = useLocation();
  const [dropNav, setDropNav] = useState(false);
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <div className="flex flex-col items-center justify-start md:flex-row md:justify-around">
        <div className="flex flex-row items-center justify-between gap-10 ">
          <div className=" flex flex-row gap-[20px] w-full justify-between items-center">
            <img src={logo} alt="logo" className="md:w-[80px] w-[60px]" />
            <div className=" text-blue-500 font-bold text-[18px]">
              GLOBAL <span className="text-green-500 ">EXPLORERS</span>
            </div>
          </div>
          <div
            className="block cursor-pointer sm:hidden"
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
              isActive("/admin/") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`/admin/`}
          >
            Dashboard
          </Link>
          <Link
            className={`${
              isActive("/admin/tours/") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`../admin/tours/`}
          >
            Tours
          </Link>
          <Link
            className={`${
              isActive("/admin/addtour/") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500 
            `}
            to={`../admin/addtour/`}
          >
            Add Tours
          </Link>
          <Link
            className={`${
              isActive("/admin/profile/") ? "text-blue-500" : ""
            } px-[20px] py-[10px]  lg:mx-5 hover:text-blue-500 duration-500
            `}
            to={`../admin/profile/`}
          >
            Profile
          </Link>
          <Link to={'../admin/logout'}>Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default AdNavBar;
