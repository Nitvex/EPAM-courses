export function collectEmailDomains(input) {
    let regExp=/([\w-]|(\.(?!\.)))+@(\w+\.\w+)/g;
    let result;
    let domains={};
    while (result = regExp.exec(input)) {
        domains[result[3]]=true;
    }
    return Object.keys(domains).sort().join(",");
}
