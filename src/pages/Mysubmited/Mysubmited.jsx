import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authprovider";
import SubmitedAssignmentCard from "../../Components/SubmitedAssignmentCard/SubmitedAssignmentCard";
import Loder from "../../Components/Loder/Loder";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Mysubmited = () => {
      const { user } = useContext(AuthContext)
      const [loding , setLoding ] = useState(false)
      const [assignments,setAssignments] = useState([])
      const axiosSecure = useAxiosSecure()
      useEffect(() => {
            setLoding(true)
            axiosSecure.get(`${import.meta.env.VITE_backend_URL}/my-submited-assignment?email=${user.email}`)
            .then(res=>{
                  setAssignments(res.data)
                  setLoding(false)
            })
      }, [user.email])
      
      return (
            <div>
                  <div className=" container mx-auto">
                        <div>
                              <div className=" text-center mt-10">
                                    <h1
                                          className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                                    >My Submitted Assignments</h1>
                                    <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500 dark:text-white">Review all the assignments you have submitted so far. Track your progress, view grades, and check feedback from your peers. Stay organized and improve with each submission.</p>
                              </div>
                              <div className="divider"></div>
                              {
                                    loding ? <div>
                                         <Loder></Loder> 
                                    </div> : <div className=" flex flex-col  gap-4  sm:flex-row flex-wrap items-center justify-center   sm:items-start sm:justify-start w-11/12 md:w-full mx-auto">
                                    { assignments.length < 1 ? <div className=" w-fit flex items-center  flex-col gap-2 mx-auto mt-10 md:mt-20">
                                           <img className=" w-24 opacity-45" src="https://cdn-icons-png.flaticon.com/512/5842/5842026.png" alt="" />
                                          <h1 className=" text-3xl font-light text-gray-500 dark:text-white"> No data available </h1>
                                    </div> :
                                      assignments.map(assignment => <SubmitedAssignmentCard 
                                      key={assignment._id}
                                      assignment={assignment}
                                      
                                      ></SubmitedAssignmentCard> )
                                    }
                              </div>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Mysubmited;