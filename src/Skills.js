import React from "react";
import frontend from "./media/front-end (1).png";
import backend from "./media/backend.png";
import design from "./media/design.png";
import app from "./media/apps.png";
function Skills() {
  return (
    <section className="pt-0 " id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            How do we help?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            We provide services in IT. We help you grow with our awesome team of
            technician who are ready to help in scaling your business to new
            heights.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2 "></div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm: pr-8">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-[#318CE7] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          {" "}
                          FrontEnd Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Crafting Digital Experiences, One Pixel at a Time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                  justify-center"
                  >
                    <figure>
                      <img src={frontend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm: pl-8">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-[#318CE7] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          {" "}
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Empowering Your Platform's Foundation with Seamless
                          Functionality
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                  justify-center"
                  >
                    <figure>
                      <img src={backend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm: pr-8">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-[#318CE7] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          {" "}
                          UI/UX Design
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Elevating User Journeys through Intuitive Design
                          Excellence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                  justify-center"
                  >
                    <figure>
                      <img src={design} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm: pl-8">
                      <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <h3 className="text-[#318CE7] font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          {" "}
                          App Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Innovative Solutions, Building Tomorrow's Digital
                          Ecosystems
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                  justify-center"
                  >
                    <figure>
                      <img src={app} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
