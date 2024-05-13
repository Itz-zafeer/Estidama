import { validateEmail } from "@/app/utils/validateEmail";
import React, { useEffect, useState } from "react";

const useForm = (inputFieldsData) => {
  const [states, setStates] = useState({});
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newStates = {};
    inputFieldsData?.forEach((item) => {
      newStates[item.id] = "";
    });
    setStates(newStates);
    setErrors(newStates);
  }, []);

  const handleChange = (e) => {
    setStates((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let isError = false;
    setIsLoading(true);

    Object.keys(states).forEach((key, index) => {
      if (!states[key] && inputFieldsData[index]?.required) {
        newErrors[key] = "This Field is Required";
        isError = true;
      } else if (key.toLowerCase().includes("email")) {
        if (!validateEmail(states[key])) {
          newErrors[key] = "The Email isn't Correct";
          isError = true;
        }
      }
    });

    setErrors(newErrors);

    if (!isError) {
      if (isVerified) {
        setTimeout(() => {
          setIsLoading(false);
          setStatus("success");
          //For testing ERror
          // setStatus("failed");
        }, 1500);
      } else {
        // setCaptchaError(true);
      }
    }
  };

  return {
    states,
    setStates,
    status,
    setStatus,
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    handleChange,
    handleSubmit
  };
};

export default useForm;
