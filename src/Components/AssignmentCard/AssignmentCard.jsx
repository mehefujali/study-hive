import axios from "axios";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { signalContext } from "../../context/SignalProvider";


const AssignmentCard = ({ assignment }) => {
      const {setSignal} = useContext(signalContext)
      const handleDeleteAssignMent = () => {
            Swal.fire({


                  text: "Are you sure you want to Delete this assignment?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#fa4b4b",
                  cancelButtonColor: "#00BCD4",
                  confirmButtonText: "Delete",
                  customClass: "shadow-md shadow-primary-color2 rounded-lg"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axios.delete(`${import.meta.env.VITE_backend_URL}/assignments/${assignment._id}`)
                              .then(res => {
                                    if (res.data.deletedCount) {
                                          Swal.fire({
                                                position: "center",
                                                icon: "success",
                                                title: "Sign Out Successful",
                                                showConfirmButton: false,
                                                timer: 1000
                                          });
                                    }
                                    setSignal(Math.random())
                              })
                  }
            });

      }
      return (
            <div >
                  <div className=" rounded-md overflow-hidden shadow-md dark:shadow-gray-400">
                        <div>
                              <img className=" w-full object-cover h-72" src={assignment.thumbnail} alt="" />
                        </div>
                        <div className=" px-6   ">
                              <h1 className=" text-xl md:text-2xl xl:text-3xl font-bold">{assignment.title}</h1>
                              <p><span className=" font-semibold">Marks :</span> {assignment.marks}</p>
                              <p><span className=" font-semibold">Difficulty lavel :</span> {assignment.difficulty}</p>
                        </div>
                        <div className="divider my-0 py-0"></div>
                        <div className=" p-6 flex flex-col md:flex-row ">
                              <button onClick={handleDeleteAssignMent} className=" btn flex-1 btn-error text-white rounded"><RiDeleteBinLine className="text-lg" /> delete</button>
                              <Link className=" btn flex-1 bg-primary-color2 text-white rounded"><FaEdit />Update</Link>
                              <Link to={`/assignment-details/${assignment._id}`} className=" btn flex-1 flex items-center gap-2 bg-primary-color text-white rounded"><MdOutlineAssignment className=" text-lg" />View </Link>
                        </div>
                  </div>
            </div>
      );
};
AssignmentCard.propTypes = {
      assignment: PropTypes.object.isRequired
}
export default AssignmentCard;