const checkIfContentExist = (text, firstFallback, secondFallback) => {
  let finalText = text
    ? text
    : firstFallback
    ? firstFallback
    : secondFallback
    ? secondFallback
    : "";
  return finalText;
};

export default checkIfContentExist;
