export const validateEmail = (email) => {
  // Regular expression for validating an email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
};
