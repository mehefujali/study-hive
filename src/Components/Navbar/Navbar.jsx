import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
      return (
            <div>
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <NavLink>Assignments</NavLink>
                                          <NavLink>Pending Assignments</NavLink>
                                    </ul>
                              </div>
                              <Link to={'/'} className=" flex items-center text-xl md:text-2xl lg:text-3xl font-bold">
                                    <img className=" w-8 md:w-16 lg:w-20" src="https://i.ibb.co/XY6W7rV/Screenshot-2024-12-21-224232-Photoroom.png" alt="" />
                                    STUDY <span className=" text-primary-color">HIVE</span>
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
                                    <button className=" btn btn-outline hover:bg-transparent hover:text-primary-color border-primary-color">Login</button>
                                    <button className=" btn  hover:bg-primary-color bg-primary-color text-white">Register</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;