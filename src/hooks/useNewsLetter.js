import React, { useRef, useState } from "react";

const useNewsLetter = ({ errors }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const emailIsValid = (value) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleSubmit = (subscribe) => {
    if (!email) {
      setError(
        errors?.requiredError
          ? errors?.requiredError
          : "This Field is Required!"
      );
    } else if (!emailIsValid(email)) {
      setError(errors?.emailError ? errors?.emailError : "Email isn't Valid!");
    } else {
      subscribe({ EMAIL: email, tags: ["2978263"] });
      setError("");
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return {
    handleChange,
    handleSubmit,
    email,
    setEmail,
    formRef,
    error
  };
};

export default useNewsLetter;
