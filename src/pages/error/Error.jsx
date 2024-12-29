import { Link } from "react-router-dom";


const Error = () => {
      return (
            <div className=" h-[100vh] w-[100vw] flex items-center justify-center">

                  <div className=" w-fit text-center flex flex-col items-center gap-2">
                        <h1 className=" text-9xl font-bold">404</h1>
                        <p className=" text-3xl font-light">Page not found</p>
                        <Link className=" btn btn-sm" to="/">Back to home</Link>
                  </div>

            </div>
      );
};

export default Error;