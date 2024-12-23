import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
const AuthContext = createContext()
const Authprovider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loding, setLoding] = useState(true)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)
      }
      const signOutUser = () => {
            return signOut(auth)
      }
      const emailRegister = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const updateUserProfile = upadate => {
            return updateProfile(auth.currentUser, upadate)
      }
      const signInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)

      }
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (cureentUser) => {
                  setUser(cureentUser)
                  if (cureentUser?.email) {
                        const user = { email: cureentUser?.email }
                        axios.post(`${import.meta.env.VITE_backend_URL}/jwt`, user, {
                              withCredentials: true
                        })
                              .then(() => {
                                    setLoding(false)
                              }
                              )
                  }
                  else {
                        axios.post(`${import.meta.env.VITE_backend_URL}/logout`, {}, {
                              withCredentials: true
                        })
                              .then(() => {
                                    setLoding(false)
                              }
                              )
                  }
                  setLoding(false)
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
            emailRegister,
            updateUserProfile,
            signInUser,
            loding,

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