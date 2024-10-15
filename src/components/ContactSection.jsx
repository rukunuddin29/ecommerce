import React, { useState } from "react";
import a from '../assets/A.jpg'; 

const ContactSection = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "277d4187-6323-4fd4-8837-5445788d7738");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage("Message sent successfully!");
        event.target.reset(); // Clear form
      } else {
        setStatusMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="pt-8 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 border bg-white rounded-2xl shadow-lg grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full relative">
              <img
                src={a}
                alt="Contact Us"
                className="w-full lg:h-full h-[60vh] lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#080127] object-cover"
              />
              <h1 className="font-manrope text-[#080127] text-4xl font-bold leading-10 absolute top-11 left-6 sm:left-11">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5">
                <div className="bg-white opacity-85 rounded-lg p-6 block">
                  <a href="#" className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#080127] rounded-full"></div>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      470-601-1911
                    </h5>
                  </a>
                  <a href="#" className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#080127] rounded-full"></div>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      Pagedone1234@gmail.com
                    </h5>
                  </a>
                  <a href="#" className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#080127] rounded-full"></div>
                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                      654 Sycamore Avenue, Meadowville, WA 76543
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#080127] font-manrope text-4xl font-semibold leading-10 mb-11">
              Send Us A Message
            </h2>
            <input
              type="text"
              name="name" // Added name attribute
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email" // Added name attribute
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone" // Added name attribute
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
              placeholder="Phone"
            />
            <textarea
              name="message" // Added name attribute
              className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Message"
              required
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-500 hover:bg-indigo-900 bg-[#080127]">
              Send
            </button>
            {statusMessage && (
              <p className="mt-4 text-sm text-center text-gray-600">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
