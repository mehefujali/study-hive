import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import { AuthContext } from "../../context/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
      const {state} = useLocation()
      const [sowPass, setSowPass] = useState(false)
      const {user ,googleSignIn} = useContext(AuthContext)
      const handleGoogleLogin = ()=>{
            googleSignIn()
            .then(data => {
                  console.log(data.user)
            })
      }
      if(user) {
            return <Navigate to={state||'/'}></Navigate>
      }
      return (
            <div>
                  <div className=" h-[90vh]  flex items-center justify-center">
                        <div className="w-64 md:w-96 shadow-primary-color2 p-7 rounded-md shadow-md">
                              <form action="" className=" space-y-3 w-full ">
                                    <label className=" flex flex-col " htmlFor="">
                                          Email
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type="email"
                                                name="email"
                                                id=""
                                                placeholder="Enter email"
                                          />
                                    </label>
                                    <label className=" flex flex-col  relative select-none" htmlFor="" >
                                          <div
                                               onClick={()=>setSowPass(!sowPass)}
                                                className=" absolute right-3  top-10 cursor-pointer text-xl text-primary-color"
                                          >
                                                {
                                                      sowPass ? <LuEyeClosed /> : <LuEye />
                                                }
                                          </div>

                                          Password
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type={sowPass ? 'text' : 'password'}
                                                name="email"
                                                id=""
                                                placeholder="Enter password"
                                          />
                                    </label>
                                    <button className=" btn bg-primary-color hover:bg-primary-color w-full">Login</button>
                                    
                              </form>
                                     <div className="divider">OR</div>
                                     <button onClick={handleGoogleLogin} className=" btn bg-transparent border w-full"><FcGoogle className=" text-3xl" />Continue with google</button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;