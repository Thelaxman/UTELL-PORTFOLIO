import React from "react";
import {
  FaGooglePlus,
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">About Utell</h1>
        <p className="py-4">
          {" "}
          Utell is an It soultions enterprise that has helped many businesses
          grow and create their own online brand since 10 years. Our solutions
          are robust, agile, scalable, innovative and engage that will empower
          your online presence in a given time frame.
        </p>
        <div className="flex justify-between w-[75%] my-6">
          <a href="https://www.facebook.com/utellconsultancy">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/company/utellconsultancy-com/">
            <FaLinkedin size={30} />
          </a>
          <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html">
            <FaGooglePlus size={30} />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FUtellConsultan1%2F">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg: col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-700"> Services</h6>
          <ul>
            <li className="py-2 text-sm">Web Designing </li>
            <li className="py-2 text-sm">Cybersecurity Solutions</li>
            <li className="py-2 text-sm">Network Professional Services</li>
            <li className="py-2 text-sm">Cloud Based IT Services</li>
            <li className="py-2 text-sm">Server Setup and Configuration</li>
            <li className="py-2 text-sm">Digital Marketing Solutions</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-700">Other Links</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">Services</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-700">Get In Touch</h6>
          <ul>
            <li className="py-2 text-sm">Calgary</li>
            <li className="py-2 text-sm">
              <span>Regional Campuses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
