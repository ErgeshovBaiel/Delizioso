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
    <div className="mt-50">
      <div className="max-w-6xl mx-auto p-6  rounded-lg">
        <h2 className=" h-[92px] font-[Tinos] font-bold text-[80px] leading-[100%] text-center mb-12.5"
        >Contact Us</h2>
        <p className="text-lg text-gray-700 text-center  mb-10">
          We love hearing from our customers. Feel free to share your
          experience or ask any questions you may have.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-14 rounded-[15px] bg-gray-200"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-14 rounded-[15px] bg-gray-200"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-14 rounded-[15px] bg-gray-200"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-14 rounded-[15px] bg-gray-200"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-48 rounded-[8px] bg-gray-100"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF8A00] text-white py-3 px-4 text-xl mt-10 rounded-full w-full md:w-[300px] h-12.5 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-full h-[700px] mt-30">
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
