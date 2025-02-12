import { useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import PatnersCard from "../PatnersCard/PatnersCard";

const Patners = () => {
      const [partners, setPartners] = useState([])
      useEffect(() => {
            fetch('/patners.json')
                  .then(res => res.json())
                  .then(data => setPartners(data))
      }, [])
      return (
            <div className=" my-14">
                  <div>
                        <h1 className=" text-xl md:text-3xl font-bold text-center">Our Trusted Partners</h1>
                        <div className=" mt-14">
                              <Marquee className=" h-64">
                                    {
                                          partners.map(partner => <PatnersCard key={partner.id} partner={partner}></PatnersCard>)
                                    }
                              </Marquee>
                        </div>
                  </div>
            </div>
      );
};

export default Patners;