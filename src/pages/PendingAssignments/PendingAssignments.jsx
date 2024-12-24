import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/Authprovider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PendingAssignments = () => {
      const [assignments, setAssignments] = useState([])
      const { user } = useContext(AuthContext)
      const [signal, setSignal] = useState(null)
      const axiosSecure = useAxiosSecure()
      useEffect(() => {
            axiosSecure.get(`${import.meta.env.VITE_backend_URL}/pending-assignments`)
                  .then(res => {
                        setAssignments(res.data)
                  })
      }, [signal])

      const handleGiveMarks = async (assignment) => {


            if (user.email === assignment.email) {
                  Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Opps!",
                        text: "You cannot grade your own assignment!",
                        showConfirmButton: false,
                        timer: 1500
                  });
                  return
            }

            Swal.fire({
                  title: 'Give Assignments marks',
                  html: `
                
                      
                   <div class="flex flex-col gap-4">
                   <div class="font-medium text-gray-700 text-start"> <span class="font-bold text-gray-700 text-start">Google docs link :</span>  <a className=" underline" target="_blank" href="${assignment.googleDocsLink}">${assignment.googleDocsLink}</a></div>
        <div class="font-medium text-gray-700 text-start"><p>  <span class="font-bold text-gray-700 text-start">Notes:</span> ${assignment.quicknote}</p></div>
      <label class="flex flex-col gap-3">
        <span className=" divider"></span>
<span class="font-medium text-gray-700 text-start"> Marks (Highest: ${assignment.marks}):</span>
        <input
          required
          id="swal-marks"
          class="rounded-md dark:text-white  border focus:border-primary-color2 border-primary-color input  focus:outline-none "
          type="text"
          placeholder="Enter assignment mark"
        />
      </label>
      <label class="flex flex-col">
        <span class="font-medium text-gray-700 text-start">Feedback</span>
        <textarea
          id="swal-feedback"
          class="rounded-md dark:text-white border border-primary-color  textarea resize-none  focus:border-primary-color2  focus:outline-none "
          placeholder="feedback"
          rows="4"
        ></textarea>
      </label>
    </div>
                
              `,
                  focusConfirm: false,
                  showCancelButton: true,
                  confirmButtonText: 'Submit',
                  confirmButtonColor: '#00BCD4',

                  preConfirm: () => {
                        const marks = document.getElementById('swal-marks').value;
                        const feedback = document.getElementById('swal-feedback').value;



                        if (!feedback) {
                              Swal.showValidationMessage('Please add  feedback');
                        }
                        if (!marks) {
                              Swal.showValidationMessage('Please enter Marks');
                        }
                        if (parseFloat(marks) > assignment.marks) {
                              Swal.showValidationMessage(`Please enter a valid mark between 0 and ${assignment.marks}.`);
                        }
                        return { marks, feedback, email: user.email }
                  }
            }).then((result) => {
                  if (result.isConfirmed) {
                        axios.put(`${import.meta.env.VITE_backend_URL}/submit-assignment/${assignment._id}`, result.value)
                              .then(res => {


                                    if (res.data.modifiedCount) {
                                          Swal.fire({
                                                title: "Good job!",
                                                text: "Assignment marked successfully! ",
                                                icon: "success",
                                                confirmButtonColor: '#00BCD4'
                                          });


                                    }

                                    if (res.data.message === "this is your assignment") {
                                          Swal.fire({
                                                title: "Opps!",
                                                text: "You cannot grade your own assignment!",
                                                icon: "error",
                                                confirmButtonColor: '#00BCD4'
                                          });
                                    }

                                    setSignal(Math.random())
                              })
                  }
            });


      };

      return (
            <div>
                  <div className="container mx-auto">
                        <div className=" text-center mt-10">
                              <h1
                                    className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                              >Pending Assignments</h1>
                              <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500 dark:text-white">Stay on top of your tasks with a clear view of all your pending assignments. Complete them before the deadline to ensure consistent progress and collaboration with your peers.</p>
                        </div>
                        <div className="divider"></div>
                        <div>


                              {assignments.length < 1 ? <div className=" w-fit flex items-center  flex-col gap-2 mx-auto mt-10 md:mt-20">
                                    <img className=" w-24 opacity-45" src="https://cdn-icons-png.flaticon.com/512/5842/5842026.png" alt="" />
                                    <h1 className=" text-3xl text-center font-light text-gray-500 dark:text-white"> No Pending assignment available </h1>
                              </div> : <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                          {/* head */}
                                          <thead>
                                                <tr className=" md:text-lg dark:text-white">
                                                      <th></th>
                                                      <th>Assignment</th>
                                                      <th>Marks</th>
                                                      <th>Examinee name</th>
                                                      <th></th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                      assignments.map((assignment, idx) => <tr key={assignment._id}>
                                                            <th>{idx + 1}</th>
                                                            <td>{assignment.title}</td>
                                                            <td>{assignment.marks}</td>
                                                            <td>{assignment.user}</td>
                                                            <td><button onClick={() => handleGiveMarks(assignment)} className=" btn btn-sm bg-primary-color rounded text-white text-nowrap">Give Mark</button></td>
                                                      </tr>)
                                                }

                                          </tbody>
                                    </table>
                              </div>}

                        </div>

                  </div>
            </div>
      );
};

export default PendingAssignments;