"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "+1 (782)-778-9931"
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "youremail@email.com"
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: "1234 Street Name, City, State 12345"
//   }
// ];

import { motion } from "framer-motion";
import { Input } from "../../components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue
// } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";

type formDataProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>();
  const [isMailSent, setIsMailSent] = useState(false);
  const [formData, setFormData] = useState<formDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const formHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIsMailSent(false);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const sendEmail = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current || "",
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        }
      );
      if (sendEmail.status === 200 && sendEmail.text === "OK") {
        setIsMailSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: ""
        });
      }
    } catch (error) {
      console.log("Failed to send email: ", error);
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={submitHandler}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Contact to hire me for your projects or to arrange an interview.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData?.firstName}
                  onChange={formHandler}
                  required
                />
                <Input
                  type="lastname"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData?.lastName}
                  onChange={formHandler}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData?.email}
                  onChange={formHandler}
                  required
                />
                <Input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData?.phoneNumber}
                  onChange={formHandler}
                  required
                />
              </div>
              {/* Select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Developement</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message"
                name="message"
                value={formData?.message}
                onChange={formHandler}
                required
              />
              {/* button */}
              <Button size="default" className="max-w-40">
                Send Message
              </Button>
            </form>
            {isMailSent && (
              <div className="text-center py-8">
                <p className="text-white">Email sent successfully!</p>
              </div>
            )}
          </div>
          {/* info */}
          {/* <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => {
                return (
                  <li key={i} className=" flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
