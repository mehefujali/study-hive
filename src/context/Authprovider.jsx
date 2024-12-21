import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
const AuthContext = createContext()
const Authprovider = ({ children }) => {
      const [user, setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () =>{
            return   signInWithPopup(auth,googleProvider)
      }

      const authObj = {
            user,
            setUser,
            googleSignIn,

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