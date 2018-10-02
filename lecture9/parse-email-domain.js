export function parseEmailDomain(emailAddress) {
    let result = emailAddress.match(/^([\w-]|(\.(?!\.)))+@(\w+\.\w+)$/);
    return result[3];
}
