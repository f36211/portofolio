import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  function click() {
    window.location.href = "mailto:fathurrahamn11.hadi@gmail.com";
  }

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullname = "Full name is required";
    if (!form.current.reply_to.value.trim()) newErrors.email = "Email is required";
    if (!form.current.phone.value.trim()) newErrors.phone = "Phone number is required";
    if (!form.current.emailsubject.value.trim()) newErrors.subject = "Subject is required";
    if (!form.current.message.value.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ke37kmc",
        "template_54usbsd",
        form.current,
        "wGi7bPaRsIWfk4OIa"
      )
      .then(
        () => {
          setStatus("sent");
          event.target.reset();
          setFullName("");
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="w-full bg-[#081b29] py-20 px-6 sm:px-10 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-wide"
          onClick={click}
        >
          Contact <span className="text-[#02aaef]">Me!</span>
        </h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 sm:gap-6"
        >
          <input type="hidden" name="name" value={fullName} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="fullname"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-transparent border-[2px] border-[#02aaef] rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none  transition-all"
              required
            />
            <input
              name="reply_to"
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-[2px] border-[#02aaef] rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              className="w-full bg-transparent border-[2px] border-[#02aaef] rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none transition-all"
              required
            />
            <input
              name="emailsubject"
              type="text"
              placeholder="Email Subject"
              className="w-full bg-transparent border-[2px] border-[#02aaef] rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none transition-all"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            className="w-full bg-transparent border-[2px] border-[#02aaef] rounded-lg p-4 text-white placeholder-gray-300 focus:outline-none transition-all resize-none"
            required
          ></textarea>

          {status === "sending" && (
            <p className="text-sm text-[#02aaef] text-center">
              Mengirim
            </p>
          )}
          {status === "sent" && (
            <p className="text-sm text-green-400 text-center">
              Kekirim
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">
              Error
            </p>
          )}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[#02aaef] text-black font-bold px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
