import Faq from "../../Components/Faq/Faq";
import Feature from "../../Components/Feature/Feature";
import Hero from "../../Components/Hero/Hero";


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
            </div>
      );
};

export default Home;