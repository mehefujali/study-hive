import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";


const Register = () => {
       const [sowPass, setSowPass] = useState(false)
      return (
            <div>
                   <div className=" h-[90vh]  flex items-center justify-center">
                        <div className="w-64 md:w-96 shadow-primary-color2 p-7 rounded-md shadow-md">
                              <form action="" className=" space-y-3 w-full ">
                                    <label className=" flex flex-col " htmlFor="">
                                          Full name
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type="email"
                                                name="name"
                                                id=""
                                                placeholder="Enter full name"
                                          />
                                    </label>
                                    <label className=" flex flex-col " htmlFor="">
                                          Email
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type="email"
                                                name="email"
                                                id=""
                                                placeholder="Enter email"
                                          />
                                    </label>
                                    <label className=" flex flex-col " htmlFor="">
                                          Photo URL
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type="email"
                                                name="image"
                                                id=""
                                                placeholder="Enter photo URL"
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
                                    <button className=" btn bg-primary-color hover:bg-primary-color w-full">Create account</button>
                                    
                              </form>
                                     <div className="divider"></div>
                                     
                                     <p className=" text-center mt-2">{`already have an account?`} <Link className="text-primary-color" to='/login'>Login</Link></p>
                        </div>
                  </div>
            </div>
      );
};

export default Register;