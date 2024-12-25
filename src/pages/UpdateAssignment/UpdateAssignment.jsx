import DatePicker from "react-datepicker";
import { AuthContext } from "../../context/Authprovider";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loder from "../../Components/Loder/Loder";


const UpdateAssignment = () => {

      const {id} = useParams()
      const [loding ,setLoding] = useState(false)
      const [assignment , setAssignment  ] = useState({})
      const navigate = useNavigate()
      const [startDate, setStartDate] = useState(new Date().toISOString());
      const date = format(new Date(startDate), "dd/MM/yyyy");
      const { user } = useContext(AuthContext)
      const axiosSecure = useAxiosSecure()
      useEffect(()=>{
           setLoding(true)
            axiosSecure.get(`${import.meta.env.VITE_backend_URL}/assignment-details/${id}`)
            .then((res) => {
                  setAssignment(res.data)
                 setLoding(false)
            })
            
           } , [])
     
     
      const handleUpdateAssignment = (e) => {
            e.preventDefault()
            const form = e.target
            const title = form.title.value
            const description = form.description.value
            const marks = form.marks.value
            const thumbnail = form.image.value
            const difficulty = form.difficulty.value

            const newAssignment = {
                  title,
                  description,
                  marks,
                  thumbnail,
                  difficulty,
                  date,
                  creatorName: user?.displayName,
                  creatorEmail: user?.email,
            }

            axiosSecure.put(`${import.meta.env.VITE_backend_URL}/update-assignment/${assignment._id}`, newAssignment)
                  .then(res => {
                        if (res.data.modifiedCount) {
                              Swal.fire({
                                    title: "Assignment Updated",
                                    icon: "success",
                                    draggable: true
                              });
                              navigate('/assignments')

                        }
                  })

      }

      return (
            <div className="min-h-[90vh]">
                  <ScrollRestoration />
                  <div className=" text-center mt-10">
                        <h1
                              className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                        >Manage Your Assignments</h1>
                        <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500 dark:text-white">Explore and manage all your assignments in one place. Track pending tasks, view your submitted work, check grades, and get feedback to continuously improve. Stay organized and never miss a deadline!</p>
                  </div>
                  <div className=" h-full mt-10  flex items-center justify-center">


                        {loding? <Loder/>:<div className="w-11/12 mb-16  md:w-9/12 lg:w-7/12 border-primary-color2  border-2  shadow-primary-color2 p-7 rounded-md shadow-md">

                              <form onSubmit={handleUpdateAssignment} action="" className=" space-y-3 gap-6  w-full md:grid grid-cols-12">
                                    <label className=" flex flex-col mt-3 col-span-6 " htmlFor="">
                                          Title
                                          <input
                                                defaultValue={assignment?.title}
                                                required
                                                className=" rounded input focus:outline-none border-primary-color" type="text"
                                                name="title"
                                                id=""
                                                placeholder="Enter assignment title"
                                          />
                                    </label>
                                    <label className=" flex flex-col col-span-6 " htmlFor="">
                                          Description
                                          <input
                                                required
                                                defaultValue={assignment?.description}
                                                className=" rounded input focus:outline-none border-primary-color" type="text"
                                                name="description"
                                                id=""
                                                placeholder="Enter assignment description"
                                          />
                                    </label>
                                    <label className=" flex flex-col col-span-6 " htmlFor="">
                                          Marks
                                          <input
                                                required
                                                defaultValue={assignment.marks}
                                                className=" rounded input focus:outline-none border-primary-color" type="text"
                                                name="marks"
                                                id=""
                                                placeholder="Enter assignment marks"
                                          />
                                    </label>
                                    <label className=" flex flex-col col-span-6 " htmlFor="">
                                          thumbnail Image URL
                                          <input
                                                required
                                                defaultValue={assignment.thumbnail}
                                                className=" rounded input focus:outline-none border-primary-color" type="url"
                                                name="image"
                                                id=""
                                                placeholder="Enter thumbnail Image URL"
                                          />
                                    </label>
                                    <label className=" flex flex-col col-span-6  relative select-none" htmlFor="" >


                                          Assignment difficulty
                                          <select
                                                defaultValue={assignment.difficulty}
                                                className="  select rounded  focus:outline-none border-primary-color " name="difficulty" id="">
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                          </select>
                                    </label>


                                    <label className="flex flex-col relative select-none col-span-6" htmlFor="">
                                          Due date
                                          <DatePicker
                                                className="rounded input focus:outline-none border-primary-color box-border w-full"
                                                selected={startDate ||new Date(assignment?.date?.split('/').reverse().join('-'))} 
                                                onChange={(date) => setStartDate(date)} 
                                                minDate={new Date()}
                                          />
                                    </label>





                                    <button className=" col-span-12 btn bg-primary-color text-white hover:bg-primary-color w-full">Update assignment</button>

                              </form>
                              <div className="divider"></div>


                        </div>}
                  </div>
            </div>
      );
};

export default UpdateAssignment;