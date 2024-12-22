
const Faq = () => {
      return (
            <div>
                  <div className="container mx-auto">
                        <div className=" flex justify-end">
                              <div className=" text-center">
                                    <h1
                                          className=" text-xl md:text-2xl lg:text-3xl font-bold  "
                                    >Frequently Asked Questions</h1>
                                    <p className="w-11/12 mx-auto  md:w-5/12 text-gray-500">Got questions about how our platform works? Here are some of the most common questions we receive about StudyMate and their answers. If you have more queries, feel free to contact us!</p>
                              </div>
                        </div>
                        <div className=" flex flex-col md:flex-row mt-16 w-11/12 mx-auto gap-6 justify-between items-center">
                              <div className=" w-full space-y-2">
                                    <div tabIndex={0} className="collapse w-full collapse-arrow border border-base-300 ">
                                          <div className="collapse-title text-xl font-medium">
                                                What is Study Hive?
                                          </div>
                                          <div className="collapse-content">
                                                <p> attribute is necessary to make the div focusable.</p>
                                          </div>
                                    </div>
                                    <div tabIndex={0} className="collapse w-full collapse-arrow border border-base-300 ">
                                          <div className="collapse-title text-xl font-medium">
                                                How do I join?
                                          </div>
                                          <div className="collapse-content">
                                                <p> Simply sign up, create a profile, and start collaborating with your friends.</p>
                                          </div>
                                    </div>
                                    <div tabIndex={0} className="collapse w-full collapse-arrow border border-base-300 ">
                                          <div className="collapse-title text-xl font-medium">
                                                Is it free to use?
                                          </div>
                                          <div className="collapse-content">
                                                <p>Yes, Study Hive is completely free for all users.</p>
                                          </div>
                                    </div>
                                    <div tabIndex={0} className="collapse w-full collapse-arrow border border-base-300 ">
                                          <div className="collapse-title text-xl font-medium">
                                                Can I use it on my phone?
                                          </div>
                                          <div className="collapse-content">
                                                <p>Absolutely! Study Hive is optimized for all devices.</p>
                                          </div>
                                    </div>

                              </div>
                              <div className=" flex-auto">
                                    <img className=" lg:max-w-screen-2xl" src="https://cdni.iconscout.com/illustration/premium/thumb/faq-illustration-download-in-svg-png-gif-file-formats--customer-questions-and-answers-helpful-information-maggy-pack-design-development-illustrations-4097184.png?f=webp" alt="" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Faq;