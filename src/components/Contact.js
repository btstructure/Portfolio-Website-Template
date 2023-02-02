// import React, { useRef } from "react";
// // import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Contact() {
//   const form = useRef();

//   // const sendEmail = (e) => {
//   //   e.preventDefault();

//     //must create an account at https://www.emailjs.com/
//   //   emailjs
//   //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "#myForm")
//   //     .then(
//   //       (result) => {
//   //         console.log(result.text);
//   //         console.log("message sent");
//   //       },
//   //       (error) => {
//   //         console.log(error.text);
//   //         console.log("message not sent");
//   //       }
//   //     );
//   // };

//   const notify = () =>
//     toast.success("Message has been sent!", {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       progress: undefined,
//       theme: "light",
//     });

//   return (
//     <div
//       id="contact"
//       className="w-full h-screen bg-gradient-to-b from-gray-300 to-purple-500 text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <h1 className="text-white text-center text-5xl p-4 font-bold">
//           Contact Me
//         </h1>
//         <div className="flex justify-center items-center">
//           <form
//             ref={form}
//             // onSubmit={sendEmail}
//             className="flex flex-col w-full md:w-1/2 justify-center"
//           >
//             <input
//               name="user_name"
//               className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500	"
//               type="text"
//               placeholder="Name"
//               required
//             />
//             <input
//               name="user_email"
//               className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
//               type="email"
//               placeholder="Email"
//               required
//             />
//             <textarea
//               name="user_message"
//               className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
//               maxlength="700"
//               rows="10"
//               placeholder="Enter your message..."
//               required
//             />
//             <button className="p-2 my-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md mx-auto flex-items-center" onClick={notify}>
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
//error message and sent
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const notify = (e) => {
    console.log(name, email, message);
    e.preventDefault()
    if (name !== "" && email !== "" && message !== "") {
      toast.success("Message has been sent!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setName("") 
      setEmail("") 
      setMessage("")
    } else {
      toast.error("Please complete the form.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

 

  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-300 to-purple-500 text-white"
    >
      <ToastContainer />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h1 className="text-white text-center text-5xl p-4 font-bold">
          Contact Me
        </h1>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            className="flex flex-col w-full md:w-1/2 justify-center"
          >
            <input
              name="user_name"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500	"
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameChangeHandler}
              required
            />
            <input
              name="user_email"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={emailChangeHandler}
              required
            />
            <textarea
              name="user_message"
              className="p-2 my-4 bg-transparent border-2 border-cyan-200 rounded-md text-white placeholder-gray-500"
              maxLength="700"
              rows="10"
              placeholder="Enter your message..."
              value={message}
              onChange={messageChangeHandler}
              required
            />
            <button
              className="p-2 my-4 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-md text-white font-bold text-center text-xl mx-auto px-8 py-2 transition duration-300 ease-in-out transform hover:scale-110"
              onClick={notify}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
