import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const PriveteRoute = ({children}) => {
      const {user} = useContext(AuthContext)
      if(user){
            return children
      }
      return (
            <Navigate to={'/login'}/>
      );
};
PriveteRoute.propTypes ={
      children:PropTypes.object.isRequired
}
export default PriveteRoute;