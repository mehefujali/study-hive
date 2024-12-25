import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/Authprovider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loder from "../../Components/Loder/Loder";


const AssignmentDetails = () => {
      const [assignment ,setAssignment ] = useState({})
      const {user} = useContext(AuthContext)
      const navigate = useNavigate()
      const axiosSecure = useAxiosSecure()

      const {id} = useParams()
      const [loding , setLoding] = useState(false)

     useEffect(()=>{
      setLoding(true)
      axiosSecure.get(`${import.meta.env.VITE_backend_URL}/assignment-details/${id}`)
      .then((res) => {
            setAssignment(res.data)
      })
      setLoding(false)
     })

      const handleTakeAssignment = async () => {

            


            Swal.fire({
                  title: 'Submit your assignment',
                  html: `
                
                      
                   <div class="flex flex-col gap-4">
      <label class="flex flex-col">
        <span class="font-medium text-gray-700 text-start">Google docs link</span>
        <input
          required
          id="swal-google-docs"
          class="rounded-md dark:text-white   border focus:border-primary-color2 border-primary-color input  focus:outline-none "
          type="url"
          placeholder="Enter google docs link"
        />
      </label>
      <label class="flex flex-col">
        <span class="font-medium text-gray-700 text-start">Quick note</span>
        <textarea
          id="quick-note"
          class="rounded-md  border border-primary-color  textarea resize-none  focus:border-primary-color2 dark:text-white  focus:outline-none "
          placeholder="quick note"
          rows="4"
        ></textarea>
      </label>
    </div>
                
              `,
                  focusConfirm: false,
                  showCancelButton: true,
                  confirmButtonText: 'Submit',
                  confirmButtonColor: '#00BCD4' ,
                  preConfirm: () => {
                        const googleDocsLink = document.getElementById('swal-google-docs').value;
                        const quicknote = document.getElementById('quick-note').value;
                       
                        if (!quicknote  ) {
                              Swal.showValidationMessage('Please enter  quick note');
                        }
                        if (!googleDocsLink  ) {
                              Swal.showValidationMessage('Please enter google docs link');
                        }
                        return {googleDocsLink,quicknote , user : user.displayName , email:user.email , assignmentId : assignment._id , status: 'pending'}
                  }
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.post(`${import.meta.env.VITE_backend_URL}/submit-assignment` , result.value)
                        .then(res => {
                              if(res.data.insertedId){
                                    Swal.fire({
                                          title: "Good job!",
                                          text: "Assignment submitted successfully ",
                                          icon: "success"
                                        });

                                        navigate('/my-submited-assignment')
                              }


                        })
                  }
            });


      };
      return (
            <div>

                  <ScrollRestoration></ScrollRestoration>
                  <div className=" container mx-auto w-11/12 mt-11 h-full flex items-center justify-center">

                        {
                         loding? <Loder></Loder> :<div className=" w-full md:w-8/12 border rounded-lg overflow-hidden">
                         <img className=" w-full object-cover max-h-[50vh] " src={assignment?.thumbnail} alt="" />
                         <div>
                               <div className=" p-6   ">
                                     <h1 className=" text-xl md:text-2xl xl:text-3xl font-bold">{assignment.title}</h1>
                                     <p>{assignment.description}</p>
                                     <p><span className=" font-semibold">Marks :</span> {assignment.marks}</p>
                                     <p><span className=" font-semibold">Difficulty lavel :</span> {assignment.difficulty}</p>
                                     <p><span className=" font-semibold">Due date :</span> {assignment.date}</p>
                                     <button onClick={handleTakeAssignment} className=" btn rounded bg-primary-color text-white hover:bg-primary-color2 w-full mt-3 ">Take assignment</button>
                               </div>
                         </div>
                   </div>
                        }

                  </div>
            </div>
      );
};

export default AssignmentDetails;