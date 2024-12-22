
import { Link } from 'react-router-dom';
import './hero.css'
import { FaPeopleGroup } from 'react-icons/fa6';
const Hero = () => {
      return (
            <div className=' relative hero-bg pt-24'>

                  <div className="container relative w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                        <img
                              className='hidden animate__infinite hero-cercle lg:flex w-40 absolute top-5 xl:top-10 animate__animated animate__rotateIn'
                              src="https://i.ibb.co/YLFWQqz/victor.png"
                              alt=""
                        />


                        <div className=" w-full lg:w-5/12 flex flex-col gap-4">
                              <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Learn Together, Grow <span className=" text-primary-color">Together!</span></h1>
                              <p className=" text-lg">Join our online group study platform to collaborate, share knowledge, and boost your learning experience with friends.</p>
                              <p className=" text-gray-500 ">{`Welcome to StudyMate, the ultimate platform for students to study together, complete assignments, and help each other grow. Whether you're looking to collaborate on projects, get feedback on your work, or simply share knowledge with friends, our platform makes learning fun and effective. Join us today and take your learning to the next level!`}</p>

                              <div className=' flex gap-1 mt-9'>
                                    <Link className=' btn btn-sm md:btn-md  hover:bg-primary-color bg-primary-color text-white'>Get Started</Link>
                                    <Link className='  btn btn-sm md:btn-md btn-outline hover:bg-transparent hover:text-primary-color border-primary-color'>Learn More</Link>
                              </div>
                        </div>
                        <div className=' img-bg relative'>
                              <div className=' text-black p-1 md:p-4 absolute backdrop-blur-sm flex items-center gap-1 border-white border-2 rounded-lg bottom-10 md:bottom-1/3 bg-primary-color2  bg-opacity-35 '><FaPeopleGroup className=' text-3xl' /> Work together with your group </div>
                              <img className=" max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl" src="https://i.ibb.co/HnT2RSP/image.png" alt="" />
                        </div>
                        <img className='hidden md:flex right-8  w-32 lg:w-20 xl:w-44 lg:right-2/3   absolute  2xl:bottom-5 bottom-0' src="https://i.ibb.co/wwpZv8M/fsd.png" alt="" />
                  </div>
            </div>
      );
};

export default Hero;