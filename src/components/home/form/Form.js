"use client";
import React from "react";
import Content from "./Content";
import ErrorMsg from "./ErrorMsg";
import SuccessMsg from "./SuccessMsg";
import useForm from "@/hooks/useForm";
import InputField from "@/components/common/InputField";
import CaptchaField from "@/components/common/CaptchaField";

const inputFieldsData = [
  {
    type: "text",
    placeholder: "الأسم *",
    id: "name",
    required: true
  },
  {
    type: "text",
    placeholder: "البريد الإلكتروني  *",
    id: "email",
    required: true
  },
  {
    type: "text",
    placeholder: "موضوع",
    id: "subject"
  },
  {
    type: "text",
    placeholder: "رسالتك *",
    id: "message",
    required: true
  }
];
const Form = ({ arabic, content, translations, inputFieldsData }) => {
  const {
    isLoading,
    states,
    setStates,
    errors,
    handleChange,
    handleSubmit,
    status,
    captchaRef,
    captchaError,
    handleRecaptchaChange
  } = useForm({
    inputFieldsData: inputFieldsData,
    endpoint: "contact",
    arabic,
    errorMessages: {
      emailError: translations?.emailError,
      requiredError: translations?.requiredError
    }
  });

  return (
    <section id="contactSection">
      <div className="Container1640 pb220 relative">
        <div className="lg:w-[42.1875vw] w-full mx-[auto]">
          <Content title={content?.title} desc={content?.desc} />
          {status && status == "success" ? (
            <SuccessMsg message={translations?.successMessage} />
          ) : (
            status == "failed" && (
              <ErrorMsg message={translations?.errorMessage} />
            )
          )}
          <form
            onSubmit={handleSubmit}
            id="contactForm"
            className={`w-full mt56 ${status ? "opacity-0" : "opacity-1"}`}
          >
            <div className="flex flex-col lg:gap-y-[1.66666666667vw] gap-y-[20px]">
              {inputFieldsData?.map((input, index) => (
                <InputField
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={states[input.id]}
                  error={errors[input.id]}
                  id={input.id}
                  widthHalf={input?.widthHalf}
                  handleChange={handleChange}
                />
              ))}
            </div>

            <CaptchaField
              captchaError={captchaError}
              captchaRef={captchaRef}
              handleRecaptchaChange={handleRecaptchaChange}
              arabic={arabic}
            />
            <button
              className={`mt56 mx-[auto] block uppercase text24 ${
                isLoading ? " pointer-events-none " : " hover:bg-[#132D2B] "
              } transition-all duration-300 bg-[#5EBD8E] border100 lg:px-[3.02604166667vw] lg:py-[0.52083333333vw] py-[8px] px-[35px] sm:py-[10px] sm:px-[40px] text-white`}
            >
              {isLoading ? "Loading..." : "      ارسل"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
