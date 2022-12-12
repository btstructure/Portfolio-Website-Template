import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //must create an account at https://www.emailjs.com/
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "#myForm")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-300 to-purple-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h1 className="text-white text-center text-5xl p-4 font-bold">
          Contact Me
        </h1>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2 justify-center"
          >
            <input
              name="user_name"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500	"
              type="text"
              placeholder="Name"
              required
            />
            <input
              name="user_email"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              name="user_message"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
              maxlength="700"
              rows="10"
              placeholder="Enter your message..."
              required
            />
            <button className="p-2 my-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md mx-auto flex-items-center">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
