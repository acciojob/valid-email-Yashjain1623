function validEmail(str: string): boolean {
  // Regular expression for validating an email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Test the input string against the regex
  return emailRegex.test(str);
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
