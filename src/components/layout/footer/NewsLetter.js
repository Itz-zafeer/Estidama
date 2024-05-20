import useNewsLetter from "@/hooks/useNewsLetter";
import React, { useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const handelSubmit = (e) => {
  e.preventDefault();
  const inputEl = document.querySelector("#newsLetterForm .inputMain input");
  if (!inputEl.value) {
    inputEl.parentElement.parentElement.classList.add("active");

    setTimeout(() => {
      inputEl.parentElement.parentElement.classList.remove("active");
    }, 8000);
  }
};

const NewsLetter = ({ translations }) => {
  const { email, handleSubmit, handleChange, formRef, error } = useNewsLetter({
    errors: {
      email: translations?.emailError,
      required: translations?.requiredError
    }
  });
  return (
    <MailchimpSubscribe
      url={
        "https://mepco.us21.list-manag.com/subscribe/post?u=5db876185483a91d46ba241f9&amp;id=82793a1984&amp;f_id=0079fee6f0"
      }
      render={({ subscribe, status, message }) => {
        if (status == "success") {
          setEmail("");
        }
        console.log(status);
        return (
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(subscribe, status);
            }}
            id="newsLetterForm"
            className="mt12 flex lg:gap-x-[0.9375vw] gap-x-[14px] items-start"
          >
            <div className="inputMain flex flex-col lg:gap-y-[0.52083333333vw] gap-y-[8px]">
              <div className="border100 bg-[#f4fff933] lg:py-[0.78125vw] lg:px-[1.38020833333vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]">
                <input
                  onChange={handleChange}
                  value={email}
                  disabled={status == "success"}
                  type="text"
                  className="w-full outline-none bg-transparent text18 placeholder:text18 placeholder:f700 text-white placeholder:text-white"
                  placeholder={translations?.placeholder}
                />
              </div>
              {error && (
                <span className="text18 z-[2] relative   text-[#D51D5D] font-[500]">
                  {error}
                </span>
              )}
              {status == "success" && (
                <span className=" text18 font-[300]  text-green-600  font-[500]">
                  {translations?.successMessage}
                </span>
              )}
              {status == "error" && (
                <span className=" text18 font-[300]   text-[#D51D5D]">
                  {translations?.errorMessage}
                </span>
              )}
            </div>

            <button
              disabled={status == "sending"}
              className={` ${
                status == "sending" ? " pointer-events-none  " : ""
              }  block uppercase text20 bg-[#132D2B] transition-all duration-300 hover:bg-[#5EBD8E] border100 lg:px-[1.25vw] lg:py-[0.78125vw] py-[8px] px-[20px] sm:py-[10px] sm:px-[25px]`}
            >
              {status == "sending"
                ? translations?.loadingText
                : translations?.btnText}
            </button>
          </form>
        );
      }}
    />
  );
};

export default NewsLetter;
