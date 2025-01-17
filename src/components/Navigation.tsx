import "./Navigation.css";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import {NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { MdAddLocationAlt } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { TiThMenu } from "react-icons/ti";

export const Navigation = () => {
    const isTab = useMediaQuery({ query: "(max-width: 768px)" });

    // Sidebar animation variants
    const sidebarAnimation = {
        open: {
            x: 0,
            width: "18rem",
            transition: {
                damping: 40,
                stiffness: 300,
            },
        },
        closed: {
            x: -250,
            width: 0,
            transition: {
                damping: 40,
                stiffness: 300,
            },
        },
    };

    // State for controlling sidebar visibility
    const [isOpen, setIsOpen] = useState(!isTab);

    // Sync sidebar state with screen size
    useEffect(() => {
        if (isTab) {
            setIsOpen(false); // Default to closed for smaller screens
        } else {
            setIsOpen(true); // Default to open for larger screens
        }
    }, [isTab]);

    return (
        <div>
            {/* Background overlay for mobile */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-[998] bg-black/50 ${
                    isOpen && isTab ? "block" : "hidden"
                }`}
            ></div>

            {/* Sidebar container */}
            <motion.div
                variants={sidebarAnimation}
                initial={isTab ? "closed" : "open"}
                animate={isOpen ? "open" : "closed"}
                className="bg-teal-500 text-gray-800 shadow-xl z-[999] h-screen md:relative fixed top-0"
            >
                {/* Logo Section */}
                <div className="flex justify-center items-center font-medium border-b border-gray-300 py-3 px-3">
                    <img
                        src="/src/images/logo.png"
                        alt="Logo"
                        width={isOpen ? 140 : 80} // Adjust logo size based on state
                        className="transition-all duration-300"
                    />

                </div>

                {/* Control Button */}
                <div
                    onClick={() => setIsOpen(!isOpen)} // Toggle sidebar state
                    className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer"
                >
                    <IoIosArrowBack
                        size={25}/>
                </div>

                {/* Menu List */}
                <div className="flex flex-col h-full">
                    <ul className="whitespace-pre px-3 text-[0.9rem] py-5 flex flex-col gap-3 font-bold overflow-x-hidden">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <AiOutlineAppstore size={24} className="min-w-max"/>
                                {isOpen && "Dashboard"}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/field" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <MdAddLocationAlt size={24} className="min-w-max"/>
                                {isOpen && "Field"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/staff" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <FaUserPlus size={24} className="min-w-max" />
                                {isOpen && "Staff"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/crop" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <FaSeedling size={24} className="min-w-max" />
                                {isOpen && "Crop"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/vehicle" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <MdAddLocationAlt size={24} className="min-w-max" />
                                {isOpen && "Vehicle"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/equipment" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <FaScrewdriverWrench size={24} className="min-w-max" />
                                {isOpen && "Equipment"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/logs" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <FaRegNewspaper size={24} className="min-w-max" />
                                {isOpen && "Logs"}
                            </NavLink>
                        </li>
                        <br/>
                        <li>
                            <NavLink to="/setting" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <SlSettings size={24} className="min-w-max" />
                                {isOpen && "Settings"}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signout" className={({ isActive }) => `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 text-[15.5px] 
                                ${isActive ? "bg-teal-400 text-white shadow-md scale-105" : "text-gray-800"} 
                                hover:bg-teal-400 hover:text-white hover:scale-105 hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}
                                     style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                <FaSignOutAlt size={24} className="min-w-max" />
                                {isOpen && "Sign Out"}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </motion.div>

            {/* Mobile Menu Icon */}
            {isTab && !isOpen && (
                <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
                    <TiThMenu size={25} />
                </div>
            )}
        </div>
    );
};
