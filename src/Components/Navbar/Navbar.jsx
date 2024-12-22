import { Link, NavLink, useLocation } from "react-router-dom";
import 'animate.css';
import { TfiMenuAlt } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import { GoSignOut } from "react-icons/go";
import Swal from "sweetalert2";
import { MdAssignmentAdd, MdOutlineAssignmentInd } from "react-icons/md";
const Navbar = () => {
      const { user, signOutUser } = useContext(AuthContext)

        const {pathname} = useLocation()
        
      const handleSignOut = () => {
            Swal.fire({
                  title: "Sign Out",

                  text: "Are you sure you want to sign out?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#ff0000",
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
      return (
            <div  className={`${pathname === '/' &&  "absolute top-0  z-50 w-full"}`}>
                  <div className=" ">
                        <div className="navbar md:w-11/12 mx-auto">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                <TfiMenuAlt className=" text-2xl" />
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow">
                                                <NavLink to="/assignments">Assignments</NavLink>
                                                {
                                                      user && <NavLink>Pending Assignments</NavLink>
                                                }
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
                                                <NavLink to="/assignments">Assignments</NavLink>
                                                {
                                                      user && <NavLink>Pending Assignments</NavLink>
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
                                                            className="menu menu-sm dropdown-content rounded text-gray-500 w-fit  z-[1] mt-3 p-4 shadow-md shadow-primary-color2 font-semibold space-y-4 bg-white">

                                                            <Link to="/create-assignment" className=" flex gap-1 text-center"><MdAssignmentAdd className=" text-xl" /> CreateAssignments</Link>
                                                            <Link className=" flex gap-1 text-center"><MdOutlineAssignmentInd className=" text-xl" /> MyAttemptedAssignments</Link>
                                                            <div className="divider my-0"></div>
                                                            <button onClick={handleSignOut} className=" btn btn-xs border flex gap-1 rounded items-center">
                                                                  <FaSignOutAlt></FaSignOutAlt> Logout </button>
                                                      </ul>
                                                </div>
                                                <button onClick={handleSignOut} className=" btn-circle  text-xl"><GoSignOut /></button>
                                          </div> : <div className=" flex gap-2">
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