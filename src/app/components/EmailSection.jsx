"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endPoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endPoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent!");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-40 w-40  md:h-80 md:w-80 z-0 blur-lg absolute top-24 md:top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="flex flex-col justify-center z-10">
        <h5 className="text-5xl font-bold text-white my-2">Let's Connect</h5>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/devxyn">
            <Image src={GithubIcon} alt="github-icon" height={50} width={50} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/johnlawrencehermo">
            <Image src={LinkedInIcon} alt="linkedin-icon" height={50} width={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100  text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."></textarea>
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {emailSubmitted && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
