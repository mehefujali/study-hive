import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
const AuthContext = createContext()
const Authprovider = ({ children }) => {
      const [user, setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)
      }
      const signOutUser = () => {
            return signOut(auth)
      }
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (cureentUser) => {
                  setUser(cureentUser)
            })

            return () => {
                  unSubscribe()
            }
      }, [])

      const authObj = {
            user,
            setUser,
            googleSignIn,
            signOutUser,

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