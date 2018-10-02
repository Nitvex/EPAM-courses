export function replaceStaticEmailsWithLinks(input) {
  return input.replace(/(([\w-]|(\.(?!\.)))+@\w+\.\w+)/g,
                      '<a href="mailto:$1">$1</a>');
}
