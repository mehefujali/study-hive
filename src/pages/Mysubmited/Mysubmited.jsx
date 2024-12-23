import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authprovider";
import SubmitedAssignmentCard from "../../Components/SubmitedAssignmentCard/SubmitedAssignmentCard";

const Mysubmited = () => {
      const { user } = useContext(AuthContext)
      const [assignments,setAssignments] = useState([])
      useEffect(() => {
            axios.get(`${import.meta.env.VITE_backend_URL}/my-submited-assignment?email=${user.email}`)
            .then(res=>{
                  setAssignments(res.data)
            })
      }, [user.email])
      console.log(assignments)
      return (
            <div>
                  <div className=" container mx-auto">
                        <div>
                              <div className=" text-center mt-10">
                                    <h1
                                          className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                                    >My Submitted Assignments</h1>
                                    <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500">Review all the assignments you have submitted so far. Track your progress, view grades, and check feedback from your peers. Stay organized and improve with each submission.</p>
                              </div>
                              <div className="divider"></div>
                              <div className=" flex gap-4 flex-wrap items-center justify-center  sm:items-start sm:justify-start w-11/12 mx-auto">
                                    {
                                      assignments.map(assignment => <SubmitedAssignmentCard 
                                      key={assignment._id}
                                      assignment={assignment}
                                      
                                      ></SubmitedAssignmentCard> )
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Mysubmited;