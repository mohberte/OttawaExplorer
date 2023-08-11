import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Pricing = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_du8zg74",
        "template_0120vi4",
        formRef.current,
        "241ANegz5vjJtfCWc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.text);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="community" className="h-auto w-full bg-[#0A0A0A]">
      <div data-aos="fade-left">
        <h1 className="text-[30px] md:text-[40px] font-bold text-center pt-8 text-white">
          Got a Question
        </h1>
        <p className="text-[13px] md:text-[16px] max-w-[24rem] md:max-w-[42rem] xl:max-w-[45rem] font-light text-center pt-6 text-white m-auto">
          Got a question or need helping planning your trip, you can reach out to us !
          <br /> Let us be your trusted companion on this remarkable journey of
          safe exploration. Your next unforgettable adventure awaits!
        </p>
      </div>
      <div
        className="flex flex-col w-[95vw] md:flex-row justify-around ml-auto mr-auto pt-[4rem] pb-8 lg:align-middle"
        data-aos="fade-right"
      >
        <div className="flex-[0.75] bg-white p-8 rounded-2xl mb-[5rem]">
          <h3 className="text-[2rem] text-black font-semibold">Contact.</h3>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>

            <button
              type="submit"
              value="Send"
              className="bg-[#41B22F] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {/* {loading ? "Sending..." : "Send"} */}
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
