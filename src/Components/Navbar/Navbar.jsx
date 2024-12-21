import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import { TfiMenuAlt } from "react-icons/tfi";
const Navbar = () => {

      return (
            <div>
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <TfiMenuAlt className=" text-2xl" />
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow">
                                          <NavLink>Assignments</NavLink>
                                          <NavLink>Pending Assignments</NavLink>
                                    </ul>
                              </div>
                              <Link to={'/'} className=" flex items-center text-xl md:text-2xl lg:text-3xl font-bold">
                                    <img className=" w-12 mr-1" src="https://i.ibb.co/FVGx3bB/study-hive-logo.png" alt="" />
                                    <div className=" hidden md:block">
                                          STUDY <span
                                                className=" text-primary-color animate__animated animate__slideInRight"
                                          >HIVE</span>
                                    </div>


                              </Link>
                        </div>

                        <div className="navbar-end">
                              <div className="hidden lg:flex mr-8">
                                    <ul className="menu menu-horizontal px-1 gap-3 font-semibold text-gray-500  text-[16px]">
                                          <NavLink>Assignments</NavLink>
                                          {/* <NavLink>Pending Assignments</NavLink> */}

                                    </ul>
                              </div>
                              <div className=" flex gap-2">
                                    <Link to="/login" className=" btn btn-sm md:btn-md btn-outline hover:bg-transparent hover:text-primary-color border-primary-color">Login</Link>
                                    <Link className=" btn btn-sm md:btn-md  hover:bg-primary-color bg-primary-color text-white">Register</Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;