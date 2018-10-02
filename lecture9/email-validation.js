export function validateEmail(emailAddress) {
  return /^([\w-]|(\.(?!\.)))+@\w+\.\w+$/.test(emailAddress);
}
