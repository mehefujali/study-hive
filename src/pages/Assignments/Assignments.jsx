import axios from "axios";
import { useEffect } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { ScrollRestoration } from "react-router-dom";
import './assignments.css'

const Assignments = () => {
      useEffect(() => {
            axios.get(`${import.meta.env.VITE_backend_URL}/assignments`)
                  .then(res => console.log(res.data))
      }, [])
      return (
            <div>
                  <div>
                        <ScrollRestoration></ScrollRestoration>
                        <div className="container mx-auto w-11/12 xl:w-full">
                              <div className="  my-12 text-center h-60 bg-primary-color2 bg-opacity-35 relative flex flex-col justify-center items-center rounded-lg gap-3 bg-no-repeat overflow-hidden shadow-md shadow-primary-color2   bg-contain" id="assignments-banner">
                                    <h1 className=" text-xl md:text-2xl xl:text-4xl text-center font-bold ">Assignments Overview</h1>
                                    <p className=" w-full md:w-7/12">Track, manage, and complete assignments shared by all users</p>
                                    <form className="  banner-text  h-fit   overflow-hidden rounded-xl flex-nowrap items-center flex mx-auto join  w-11/12  justify-center">


                                          <label htmlFor="" className=" relative">
                                                <AiOutlineFileSearch className=" text-xl absolute top-3 right-3 z-10" />
                                                <input name="search" placeholder="Search assignments..." type="text" className="input  input-sm md:input-md  focus:border-none focus:outline-none w-fit rounded border-primary-color join-item  px-10" />
                                          </label>

                                    </form>
                                    <div className="   hidden sm:flex right-14 h-56 w-56 xl:h-60 xl:w-60 blur-3xl bg-primary-color absolute   opacity-60 ">

                                    </div>
                                    <div className="   hidden sm:flex left-14 h-56 w-56 xl:h-60 xl:w-60 blur-3xl bg-primary-color  absolute   opacity-60 ">

                                    </div>
                              </div>
                              <div className=" h-full ">
                                   
                                    
                                    <div className=" col-span-12 lg:col-span-9  2xl:col-span-10">
                                          <div className=" flex justify-between items-center">
                                                <div>
                                                      <h4>All jobs</h4>
                                                </div>
                                                <div>
                                                      <label className=" text-sm border rounded-md p-2" htmlFor=".filter-select">Filter :
                                                            <select name="" id="" className=" filter-select select select-sm  focus:border-none focus:outline-none">
                                                                  <option value="Easy">Easy</option>
                                                                  <option value="Midium">Midium</option>
                                                                  <option value="Heard">Heard</option>
                                                            </select>
                                                      </label>
                                                </div>
                                          </div>
                                          <div className="divider my-3 py-0"></div>
                                          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Assignments;