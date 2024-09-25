import React, { useState, useEffect } from "react";
import "./index.css";
import Modal from "./Modal.js";

import portfolio from "./data.js";

function Portfolio() {
  const [selectTab, setSelectTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700] ">
              {" "}
              Our Recent Projects
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap pt-4">
          {portfolio?.map((portfolio, index) => (
            <div className="group max-w-full  sm:w-[48.5%] md:w-[31.8%] lg:w-[32.3%] relative z-[1]">
              <figure
                style={{
                  width: "100%",
                  paddingTop: "75%",
                  position: "relative",
                }}
              >
                <img
                  className="rounded-[8px] absolute top-0 left-0 w-full h-full object-cover"
                  src={portfolio.imgUrl}
                  alt=""
                />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="h-full w-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                   rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
}

export default Portfolio;
