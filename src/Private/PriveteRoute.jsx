import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loder from "../Components/Loder/Loder";


const PriveteRoute = ({children}) => {
      const {user , loding} = useContext(AuthContext)
      if(loding) {
            return <Loder/>
      }
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