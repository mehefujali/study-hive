import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import { AuthContext } from "../../context/Authprovider";
import { Link, Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
      const { state } = useLocation()
      const [sowPass, setSowPass] = useState(false)
      const { user, googleSignIn, signInUser } = useContext(AuthContext)
      const handleGoogleLogin = () => {
            googleSignIn()
                  .then(() => {
                        toast.success('You have successfully signed in')
                  })
      }
      const handleSignIn = (e) => {
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            signInUser(email, password)
                  .then(() => {
                        toast.success('You have successfully signed in')
                  })
                  .catch(() => {
                        toast.error('Invalid Email or Password !')
                  })
      }
      if (user) {
            return <Navigate to={state || '/'}></Navigate>
      }
      return (
            <div>

                  <div className=" h-[90vh]  flex items-center justify-center">
                        <div className=" w-3/12 hidden lg:flex">
                              <img src="https://i.ibb.co/kSdrwKb/rb-2150316925.png" alt="" />
                        </div>
                        <div className="w-64 md:w-96 shadow-primary-color2 p-7 rounded-md shadow-md">
                              <h1 className=" text-xl md:text-3xl font-bold  text-center">Login</h1>
                              <div className="divider"></div>
                              <form onSubmit={handleSignIn} className=" space-y-3 w-full ">
                                    <label className=" flex flex-col " htmlFor="">
                                          Email
                                          <input required
                                                className=" rounded input focus:outline-none border-primary-color" type="email"
                                                name="email"
                                                id=""
                                                placeholder="Enter email"
                                          />
                                    </label>
                                    <label className=" flex flex-col  relative select-none" htmlFor="" >
                                          <div
                                                onClick={() => setSowPass(!sowPass)}
                                                className=" absolute right-3  top-10 cursor-pointer text-xl text-primary-color"
                                          >
                                                {
                                                      sowPass ? <LuEyeClosed /> : <LuEye />
                                                }
                                          </div>

                                          Password
                                          <input
                                                required
                                                className=" rounded input focus:outline-none border-primary-color" type={sowPass ? 'text' : 'password'}
                                                name="password"
                                                id=""
                                                placeholder="Enter password"
                                          />
                                    </label>
                                    <button className=" btn bg-primary-color hover:bg-primary-color w-full">Login</button>

                              </form>
                              <div className="divider">OR</div>
                              <button onClick={handleGoogleLogin} className=" text-xs md:text-sm btn bg-transparent border w-full"><FcGoogle className=" md:text-3xl " />Continue with google</button>
                              <p className=" text-center mt-2">{`don't have an account?`} <Link className="text-primary-color" to='/register'>Register</Link></p>
                        </div>

                  </div>
            </div>
      );
};

export default Login;