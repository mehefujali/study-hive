
import './hero.css'
const Hero = () => {
      return (
            <div className=' relative hero-bg pt-24'>

                  <div className="container relative w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
                         <img 
                         className='hidden lg:flex w-40 absolute top-5 xl:top-10 animate__animated animate__rotateIn' 
                         src="https://i.ibb.co/YLFWQqz/victor.png" alt="" />
                         
                        <div className=" w-full lg:w-5/12  space-y-2">
                              <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Learn Together, Grow <span className=" text-primary-color">Together!</span></h1>
                              <p className=" text-lg">Join our online group study platform to collaborate, share knowledge, and boost your learning experience with friends.</p>
                              <p className=" text-gray-500">{`Welcome to StudyMate, the ultimate platform for students to study together, complete assignments, and help each other grow. Whether you're looking to collaborate on projects, get feedback on your work, or simply share knowledge with friends, our platform makes learning fun and effective. Join us today and take your learning to the next level!`}</p>
                        </div>
                        <div className=' img-bg'>
                              <img className=" max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl" src="https://i.ibb.co/HnT2RSP/image.png" alt="" />
                        </div>
                        <img className='hidden md:flex right-8  w-32 lg:w-20 xl:w-44 lg:right-2/3   absolute  2xl:bottom-5 bottom-0' src="https://i.ibb.co/wwpZv8M/fsd.png" alt="" />
                  </div>
            </div>
      );
};

export default Hero;