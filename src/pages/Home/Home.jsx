import Faq from "../../Components/Faq/Faq";
import Feature from "../../Components/Feature/Feature";
import Hero from "../../Components/Hero/Hero";
import Newslatter from "../../Components/Newslater/Newslater";
import Patners from "../../Components/Patners/Patners";


const Home = () => {
      return (
            <div>
                  <div className=" ">
                        <Hero></Hero>
                  </div>
                  <div>
                        <Feature></Feature>
                  </div>
                  <div>
                        <Faq></Faq>
                  </div>
                  <div>
                        <Newslatter/>
                  </div>
                  <div>
                        <Patners/>
                  </div>
            </div>
      );
};

export default Home;