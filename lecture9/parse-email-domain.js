export function parseEmailDomain(emailAddress) {
  return emailAddress.match(/^([\w-]|(\.(?!\.)))+@(\w+\.\w+)$/)[3];
}
