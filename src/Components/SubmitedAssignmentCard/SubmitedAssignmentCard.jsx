import PropTypes from "prop-types";



const SubmitedAssignmentCard = ({ assignment }) => {
      return (
            
                  <div className={` w-full sm:w-fit p-4 rounded-md border-l-4 h-full border ${assignment.status === "pending" ? 'border-l-yellow-400' : 'border-primary-color '}  shadow-md relative `}>
                       
                        <div className=" w-fit text-lg  font-semibold">
                              <h1 className=" text-2xl font-bold">{assignment?.title}</h1>
                              <p>Status : <span className={`${assignment.status === "pending"? 'text-yellow-500' : 'text-green-500'}`}>{assignment?.status}</span></p>
                              <p>Total marks : {assignment?.marks}</p>
                              {
                                    assignment.obtainedMarks && <p>Obtained marks : {assignment?.obtainedMarks}</p>
                              }
                              {
                                    assignment.obtainedMarks && <p>Feedback : {assignment?.feedback}</p>
                              }

                        </div>
                  </div>
            
      );
};

SubmitedAssignmentCard.propTypes = {
      assignment: PropTypes.object.isRequired
}
export default SubmitedAssignmentCard;