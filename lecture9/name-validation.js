export function validateName(input) {
  return /^[a-zA-Z\-\s]+$/.test(input);
}
