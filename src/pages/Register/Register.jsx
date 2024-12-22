import { useContext, useState } from "react";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Authprovider";
import toast from "react-hot-toast";


const Register = () => {
      const { state } = useLocation()
      const [sowPass, setSowPass] = useState(false)
      const { emailRegister, updateUserProfile, setUser, user } = useContext(AuthContext)

      const handleRegister = e => {
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            const name = form.name.value
            const photo = form.image.value
            const hasUppercase = /[A-Z]/.test(password);
            
            if (password.length < 6) {
                  toast.error('Password must be at least 6 characters long.')
                  return
            }
            if (!hasUppercase) {
                  toast.error("Password must contain at least one uppercase letter.")
                  return
            }
            const hasLowercase = /[a-z]/.test(password);
            if (!hasLowercase) {
                  toast.error('Password must contain at least one lowercase letter.')
                  return
            }
            


            emailRegister(email, password)
                  .then(() => {
                        updateUserProfile({
                              displayName: name,
                              photoURL: photo
                        })
                        setUser({
                              displayName: name,
                              photoURL: photo
                        })

                        toast.success(' Account Created Successfully! ')

                  })
                  .catch(() => {
                        toast.error('Account Creation Failed')
                  })
      }
      if (user) {
            return <Navigate to={state || '/'} />
      }
      return (
            <div>
                  <div className=" h-[90vh]  flex items-center justify-center">
                        <div className=" w-3/12 hidden lg:flex">
                              <img src="https://i.ibb.co/tsWf9d0/rb-2150292676.png" alt="" />
                        </div>
                        <div className="w-64 md:w-96 shadow-primary-color2 p-7 rounded-md shadow-md">
                              <form onSubmit={handleRegister} action="" className=" space-y-3 w-full ">
                                    <label className=" flex flex-col " htmlFor="">
                                          Full name
                                          <input
                                                className=" rounded input focus:outline-none border-primary-color" type="text"
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
                                                className=" rounded input focus:outline-none border-primary-color" type="url"
                                                name="image"
                                                id=""
                                                placeholder="Enter photo URL"
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
                                                className=" rounded input focus:outline-none border-primary-color" type={sowPass ? 'text' : 'password'}
                                                name="password"
                                                id=""
                                                placeholder="Enter password"
                                          />
                                    </label>
                                    <button className=" btn bg-primary-color text-white hover:bg-primary-color w-full">Create account</button>

                              </form>
                              <div className="divider"></div>

                              <p className=" text-center mt-2">{`already have an account?`} <Link className="text-primary-color" to='/login'>Login</Link></p>
                        </div>
                  </div>
            </div>
      );
};

export default Register;