import React from "react";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

const Contact = () => {
  return (
    <ScrollRevealComponent>
      <section id="contact">
        <div className="pt-32 pb-10 text-center text-white md:pt-56">
          <p className="pb-10 text-4xl font-bold">Contact Me</p>
          <div className="flex items-center justify-center">
            <div className="w-3/4">
              <div className="grid grid-cols-1 gap-4 text-center">
                <div className="p-4 rounded-lg">
                  <div className="flex justify-center pt-4">
                    <a
                      href="https://www.linkedin.com/in/chanuka-dilshan-21a076223/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-90 "
                    >
                      <i className="px-1 text-3xl text-white fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/Chanukaa2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 ml-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-90 "
                    >
                      <i className="px-1 text-3xl text-white fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/chanuka_dilshann/profilecard/?igsh=Z29rcDI5eTA5c205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 ml-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-90 "
                    >
                      <i className="px-1 text-3xl text-white fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://medium.com/@Chanuka72"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 ml-5 transition-transform transform rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:scale-90 "
                    >
                      <i className="px-1 text-xl text-white fa-brands fa-medium"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollRevealComponent>
  );
};

export default Contact;
