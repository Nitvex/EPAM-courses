export function validatePhone(input) {
  return /^(8|(\+7))\d{10}$/.test(input);
}
