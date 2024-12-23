import DatePicker from "react-datepicker";
import { AuthContext } from "../../context/Authprovider";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";


const UpdateAssignment = () => {
     const assignment = useLoaderData()
      const [startDate, setStartDate] = useState(new Date());
      const date = format(new Date(startDate), "dd/MM/yyyy");
      const { user } = useContext(AuthContext)
      
      return (
             <div className="min-h-[90vh]">
                  <ScrollRestoration/>
                              <div className=" text-center mt-10">
                                    <h1
                                          className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                                    >Manage Your Assignments</h1>
                                    <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500 dark:text-white">Explore and manage all your assignments in one place. Track pending tasks, view your submitted work, check grades, and get feedback to continuously improve. Stay organized and never miss a deadline!</p>
                              </div>
                              <div className=" h-full mt-10  flex items-center justify-center">
            
            
                                    <div className="w-11/12 mb-16  md:w-9/12 lg:w-7/12 border-primary-color2  border-2  shadow-primary-color2 p-7 rounded-md shadow-md">
            
                                          <form  action="" className=" space-y-3 gap-6  w-full md:grid grid-cols-12">
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
            
            
                                                <label className=" flex flex-col  relative select-none col-span-6" htmlFor="" >
                                                      Due date
                                                      <DatePicker 
                                                      
                                                      className=" rounded input 
                                                      focus:outline-none border-primary-color box-border w-full "
            
                                                            selected={assignment.date}
                                                            onChange={(date) => setStartDate(date)}
                                                            minDate={new Date()}
                                                      />
                                                </label>
            
            
            
            
                                                <button className=" col-span-12 btn bg-primary-color text-white hover:bg-primary-color w-full">Create assignment</button>
            
                                          </form>
                                          <div className="divider"></div>
            
            
                                    </div>
                              </div>
                        </div>
      );
};

export default UpdateAssignment;