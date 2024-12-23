import { ClipLoader } from "react-spinners";

const Loder = () => {

      return (
            <div className=" h-[70vh] w-full flex items-center justify-center">
                  <div className=" w-fit ">
                        <ClipLoader
                              color="#00BCD4"
                              size={50}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                        />
                  </div>
            </div>
      );
};

export default Loder;