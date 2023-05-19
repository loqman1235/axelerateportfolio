import AboutReact from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

import {
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineMail,
} from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full p-5 md:p-10 relative pb-20">
      <h3 className="title">Contact Me</h3>
      <div className="w-full flex flex-col md:flex-row md:items-center gap-20">
        <form action="" className="md:w-1/2 w-full">
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="backdrop-blur-xl outline-none border border-white/10 bg-white/5 rounded-xl py-3 px-5"
            />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="false"
              className="backdrop-blur-xl outline-none border border-white/10 bg-white/5 rounded-xl py-3 px-5"
            />
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="text-sm" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              rows={10}
              className="backdrop-blur-xl outline-none border border-white/10 bg-white/5 rounded-xl py-3 px-5"
            ></textarea>
          </div>
          <div className="mb-4 w-3/4">
            <button className="py-3 w-1/2 px-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl text-lg font-semibold hover:from-blue-500 hover:to-teal-400 transition duration-700 shadow-sm flex items-center justify-center gap-1">
              Message Me
            </button>
          </div>
        </form>
        <div className="">
          <h5 className="text-lg font-semibold mb-5">Connect with me</h5>
          <div className="flex flex-col gap-4">
            <p className="text-[#B3C7D6] flex items-center gap-4">
              <AiOutlinePhone size={20} /> +1 (555) 123-4567
            </p>
            <p className="text-[#B3C7D6] flex items-center gap-4">
              <AiOutlineMail size={20} /> example@email.com
            </p>
            <p className="text-[#B3C7D6] flex items-center gap-4">
              <AiOutlineEnvironment size={20} /> 123 Oak Street, Anytown, USA
            </p>
          </div>
          {/* Social */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
