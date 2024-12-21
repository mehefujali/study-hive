import PropTypes from "prop-types";
import { createContext, useState } from "react";
const AuthContext = createContext()
const Authprovider = ({ children }) => {
      const [user, setUser] = useState(null)

      const authObj = {
            user,
            setUser,

      }

      return (
            <AuthContext.Provider value={authObj}>
                  {children}
            </AuthContext.Provider>
      );
};

Authprovider.propTypes = {
      children: PropTypes.object.isRequired
}

export { Authprovider, AuthContext };