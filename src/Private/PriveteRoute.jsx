import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loder from "../Components/Loder/Loder";


const PriveteRoute = ({children}) => {
      const {user , loding} = useContext(AuthContext)
      const {pathname} = useLocation()
      if(loding) {
            return <Loder/>
      }
      if(user){
            return children
      }
      return (
            <Navigate state={pathname} to={'/login'}/>
      );
};
PriveteRoute.propTypes ={
      children:PropTypes.object.isRequired
}
export default PriveteRoute;