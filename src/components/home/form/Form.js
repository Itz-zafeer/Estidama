"use client";
import React from "react";
import Content from "./Content";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
import InputElements from "./InputElements";
const handelFormSubmit = (e) => {
  e.preventDefault();
  const formFail = document.querySelector(".formFail");
  const formSuccess = document.querySelector(".formSuccess");
  const contactForm = document.getElementById("contactForm");
  if (!navigator.onLine) {
    // alert("Network is offline. Please check your internet connection and try again.");
    contactForm.style.opacity = 0;
    contactForm.style.pointerEvents = "none";
    formFail.classList.add("active");
    setTimeout(() => {
      formFail.classList.remove("active");
      contactForm.style.opacity = 1;
      contactForm.style.pointerEvents = "initial";
    }, 8000);
    return;
  }

  let formIsValid = true;
  const inputEls = document.querySelectorAll("#contactForm .inputMain input");
  inputEls.forEach((inputEl) => {
    if (!inputEl.value) {
      inputEl.parentElement.parentElement.classList.add("active");
      formIsValid = false;
      setTimeout(() => {
        inputEl.parentElement.parentElement.classList.remove("active");
      }, 8000);
    }
  });
  if (formIsValid) {
    // Form submission logic here
    contactForm.style.opacity = 0;
    contactForm.style.pointerEvents = "none";
    formSuccess.classList.add("active");

    setTimeout(() => {
      formSuccess.classList.remove("active");
      contactForm.style.opacity = 1;
      contactForm.style.pointerEvents = "initial";
    }, 8000);
    console.log("Form submitted successfully!");
  } else {
    console.log("Form submission failed. Please fill in all required fields.");
  }
};
const inputsData = [
  {
    placeholder: "الأسم *",
    errormsg: "name"
  },
  {
    placeholder: "البريد الإلكتروني  *",
    type: "email",
    errormsg: "email"
  },
  {
    placeholder: "موضوع",
    errormsg: "Theme"
  },
  {
    placeholder: "رسالتك *",
    errormsg: "letter"
  }
];
const Form = () => {
  return (
    <section id="contact">
      <div className="Container1640 pb220 relative">
        <div className="lg:w-[42.1875vw] w-full mx-[auto]">
          <Content />
          <ErrorMsg />
          <SuccessMsg />
          <form
            onSubmit={handelFormSubmit}
            id="contactForm"
            className="w-full mt56"
          >
            <InputElements inputsData={inputsData} />
            <button
              className={`mt56 mx-[auto] block uppercase text24 hover:bg-[#132D2B] transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[3.02604166667vw] lg:py-[0.52083333333vw] py-[8px] px-[35px] sm:py-[10px] sm:px-[40px] text-white`}
            >
              ارسل
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
