import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { ScrollRestoration } from "react-router-dom";
import './assignments.css'
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import { signalContext } from "../../context/SignalProvider";

const Assignments = () => {
      const {signal} = useContext(signalContext)
      const [assignments ,setAssignments] = useState([])
      useEffect(() => {
            axios.get(`${import.meta.env.VITE_backend_URL}/assignments`)
                  .then(res => setAssignments(res.data))
      }, [signal])
      
      const handleFilterAssignments = (e) => {
            const filter = e.target.value 
            console.log(filter)
            axios.get(`${import.meta.env.VITE_backend_URL}/filter-assignments?filter=${filter}`)
                  .then(res => setAssignments(res.data))
      }
      
      return (
            <div >
                  <div>
                        <ScrollRestoration></ScrollRestoration>
                        <div className="container mx-auto w-11/12 xl:w-full">
                              <div className="flex flex-col justify-center items-center  my-12 text-center select-none  bg-primary-color2 dark:bg-base-200 bg-opacity-35 relative  rounded-lg gap-3 bg-no-repeat overflow-hidden shadow-md shadow-primary-color2   bg-contain" id="assignments-banner">
                                    <div className=" bg-primary-color2 h-60 sm:bg-transparent text-center gap-3 flex flex-col justify-center items-center">
                                          <h1 className=" text-xl md:text-2xl xl:text-4xl text-center font-bold ">Assignments Overview</h1>
                                          <p className=" w-full ">Track, manage, and complete assignments shared by all users</p>
                                          <form className="  banner-text  h-fit   overflow-hidden rounded-xl flex-nowrap items-center flex mx-auto join  w-11/12  justify-center">


                                                <label htmlFor="" className=" relative">
                                                      <AiOutlineFileSearch className=" text-xl absolute top-3 right-3 z-10" />
                                                      <input name="search" placeholder="Search assignments..." type="text" className="input  input-md  focus:border-none focus:outline-none w-fit rounded border-primary-color join-item  px-10" />
                                                </label>

                                          </form>
                                    </div>
                                    
                              </div>
                              <div className=" h-full ">


                                    <div className=" col-span-12 lg:col-span-9  2xl:col-span-10">
                                          <div className=" flex justify-between items-center">
                                                <div>
                                                      <h4>All Assignments</h4>
                                                </div>
                                                <div>
                                                      <label className=" text-sm border rounded-md p-2" htmlFor=".filter-select">Filter :
                                                            <select onChange={handleFilterAssignments} name="" id="" className=" filter-select select select-sm  focus:border-none focus:outline-none">
                                                                  <option value="All">All</option>
                                                                  <option value="Easy">Easy</option>
                                                                  <option value="Medium">Medium</option>
                                                                  <option value="Hard">Hard</option>
                                                            </select>
                                                      </label>
                                                </div>
                                          </div>
                                          <div className="divider my-3 py-0"></div>
                                          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                                   {/* assignment cards  */}
                                                       
                                                       {
                                                         assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                                                       }

                                          </div>
                                    </div>
                              </div>
                        </div>
                      
                  </div>
            </div>
      );
};

export default Assignments;