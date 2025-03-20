import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="max-w-400  mx-auto p-6 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl text-[80px] font-bold mb-10 flex justify-center">
          Contact Us
        </h2>
        <div className="flex justify-center">
          <p className="text-lg text-gray-700 text-center mb-25 max-w-2xl mx-auto">
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border-none p-2  w-[540px] h-[70px] top-[552px] left-[736px] rounded-[15px] bg-gray-200"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className=" border-none  outline-3 outline-amber-300 p-2 w-[540px] h-[70px] top-[552px] left-[736px] rounded-[15px] bg-gray-200"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-none p-2  w-[540px] h-[70px] top-[552px] left-[736px] rounded-[15px] bg-gray-200"
              required
            />
            <input 
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-none p-2  w-[540px] h-[70px] top-[552px] left-[736px] rounded-[15px] bg-gray-200"
              required
            />
          </div >
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border-none p-2  w-[1325px] h-72 rounded-[8px]  bg-gray-200 "
            required
          ></textarea>
          <div className=" flex justify-center ">
            <button
              type="submit"
              className="bg-[#3FA72F] text-white py-3 px-4  rounded-full w-[600px] h-12.5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-screen">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7850270214817!2d-73.99165022325835!3d40.72274867139201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598474c10bcf%3A0xd62d514f22a03f04!2s205%20Allen%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1713375430917!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default ContactUs;
