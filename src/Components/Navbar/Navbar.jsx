import { Link, NavLink, useLocation } from "react-router-dom";
import 'animate.css';
import { TfiMenuAlt } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import { GoSignOut } from "react-icons/go";
import Swal from "sweetalert2";
import { MdAssignmentAdd, MdDarkMode, MdOutlineAssignmentInd, MdOutlineLightMode } from "react-icons/md";
import { themeContext } from "../../context/ThemeProvider";
import './nav.css'
const Navbar = () => {
      const { user, signOutUser } = useContext(AuthContext)
      const { theme, setTheme } = useContext(themeContext)
      const { pathname } = useLocation()

      const handleSignOut = () => {
            Swal.fire({
                  title: "Sign Out",

                  text: "Are you sure you want to sign out?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#fa4b4b",
                  cancelButtonColor: "#00BCD4",
                  confirmButtonText: "Sign Out",
                  customClass: "shadow-md shadow-primary-color2 rounded-lg"
            }).then((result) => {
                  if (result.isConfirmed) {
                        signOutUser()
                              .then(() => {
                                    Swal.fire({
                                          position: "center",
                                          icon: "success",
                                          title: "Sign Out Successful",
                                          showConfirmButton: false,
                                          timer: 1000
                                    });
                              })
                  }
            });
      }

      const handleChangeTheme = () => {

            document.documentElement.classList.toggle('dark');
            setTheme(theme === "dark" ? "light" : "dark");
      };
      return (
            <div className={`${pathname === '/' && "absolute top-0  z-50 w-full"} select-none`}>
                  <div className=" ">
                        <div className="navbar md:w-11/12 mx-auto">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <TfiMenuAlt className=" text-2xl" />
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu navlinks space-y-3 menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow dark:text-white">

                                                <NavLink to="/">Home</NavLink>
                                                <NavLink to="/assignments">Assignments</NavLink>
                                                {
                                                      user && <NavLink to='/pending-assignments'>Pending Assignments</NavLink>
                                                }
                                                <div
                                                      className="w-fit h-fit cursor-pointer text-black dark:text-white active:scale-90 join"
                                                      onClick={handleChangeTheme}
                                                >

                                                      <button className={` ${theme=== "light" && 'bg-primary-color text-white'} btn btn-xs w-full dark:text-white join-item text-lg rounded`}>
                                                            <MdDarkMode />
                                                      </button>

                                                      <button className={`text-lg ${theme=== "dark" && 'bg-primary-color text-white'} dark:text-white rounded btn btn-xs w-full join-item `}>
                                                            <MdOutlineLightMode />
                                                      </button>

                                                </div>
                                          </ul>
                                    </div>
                                    <Link to={'/'} className=" flex items-center text-xl md:text-2xl lg:text-3xl font-bold">
                                          <img className={` w-12 mr-1 ${theme === "dark" && "brand"}`} src="https://i.ibb.co/FVGx3bB/study-hive-logo.png" alt="" />
                                          <div className=" hidden md:block dark:text-white">
                                                STUDY <span
                                                      className=" text-primary-color animate__animated animate__slideInRight"
                                                >HIVE</span>
                                          </div>


                                    </Link>
                              </div>

                              <div className="navbar-end">
                                    <div className="hidden lg:flex mr-8">
                                          <ul className="menu menu-horizontal navlinks px-1 gap-3 font-semibold text-gray-500 dark:text-white  text-[16px] ">
                                                <div
                                                      className="w-fit h-fit cursor-pointer text-black dark:text-white active:scale-90"
                                                      onClick={handleChangeTheme}
                                                >
                                                      {theme === "light" ? (
                                                            <h1 className="w-10 text-2xl">
                                                                  <MdDarkMode />
                                                            </h1>
                                                      ) : (
                                                            <h1 className="text-2xl w-10">
                                                                  <MdOutlineLightMode />
                                                            </h1>
                                                      )}
                                                </div>
                                                <NavLink to="/">Home</NavLink>
                                                <NavLink to="/assignments">Assignments</NavLink>
                                                {
                                                      user && <NavLink to="/pending-assignments">Pending Assignments</NavLink>
                                                }

                                          </ul>
                                    </div>

                                    {
                                          user ? <div className=" flex items-center gap-2">
                                                <Tooltip
                                                      anchorSelect=".user-name-tooltip"
                                                      place="left"
                                                      effect="solid"

                                                      style={{
                                                            backgroundColor: "#00BCD4", // ব্যাকগ্রাউন্ড রঙ
                                                            color: "#FFFFFF", // টেক্সট রঙ
                                                            borderRadius: "8px",
                                                            padding: "8px",
                                                      }}
                                                >
                                                      {user.displayName}
                                                </Tooltip>
                                                <div className="dropdown dropdown-end">
                                                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  avatar">
                                                            <div className="w-10 user-name-tooltip  rounded-full">
                                                                  <img
                                                                        alt={user?.displayName}
                                                                        src={user.photoURL || "https://cdn2.vectorstock.com/i/1000x1000/44/01/default-avatar-photo-placeholder-icon-grey-vector-38594401.jpg"} />
                                                            </div>
                                                      </div>
                                                      <ul
                                                            tabIndex={0}
                                                            className="menu menu-sm dropdown-content rounded text-gray-500 dark:text-white w-fit  z-[1] mt-3 p-4 shadow-md shadow-primary-color2 font-semibold space-y-4 bg-white dark:bg-base-200 ">

                                                            <Link to="/create-assignment" className=" flex gap-1 text-center"><MdAssignmentAdd className=" text-xl" /> CreateAssignments</Link>
                                                            <Link to="/my-submited-assignment" className=" flex gap-1 text-center"><MdOutlineAssignmentInd className=" text-xl" /> MySubmitedAssignments</Link>
                                                            <div className="divider my-0"></div>
                                                            <button onClick={handleSignOut} className=" btn btn-xs border flex gap-1 rounded items-center  dark:text-white">
                                                                  <FaSignOutAlt></FaSignOutAlt> Logout </button>
                                                      </ul>
                                                </div>
                                                <button onClick={handleSignOut} className=" btn-circle  text-xl"><GoSignOut /></button>
                                          </div> : <div className=" flex gap-2 ">
                                                <Link to="/login" className=" btn btn-sm md:btn-md btn-outline hover:bg-transparent hover:text-primary-color border-primary-color">Login</Link>
                                                <Link to="/register" className=" btn btn-sm md:btn-md  hover:bg-primary-color bg-primary-color text-white">Register</Link>
                                          </div>
                                    }

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;