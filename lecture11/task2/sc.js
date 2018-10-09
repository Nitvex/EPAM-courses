console.clear();

// Called with new? Use the newly constructed object.
// Called with call or apply (or bind)? Use the specified object.
// Called with a context object owning the call? Use that context object.
// Default: undefined in strict mode, global object otherwise.

const programmer = {
    language: 'JavaScript',
    writeCode() {
        return `I create bugs in ${this.language}`;
    }
};

// Tasks: replace "null" in console.logs with the right value

console.log('1 task passed:', programmer.writeCode() === 'I create bugs in JavaScript');

const writeCode = programmer.writeCode;
console.log('2 task passed:', writeCode() === 'I create bugs in undefined');
console.log('3 task passed:', writeCode.call({ language: 'Turbo Pascal' }) === 'I create bugs in Turbo Pascal');

const writeJavaCode = programmer.writeCode.bind({ language: 'Java' });
console.log('4 task passed:', writeJavaCode.apply({ language: 'Turbo Pascal' }) === 'I create bugs in Java');

function JavaProgrammer() {
    this.language = 'Java';
}
console.log('5 task passed:', (new JavaProgrammer()).language === 'Java');

JavaProgrammer.call(programmer);
console.log('6 task passed:', programmer.language === 'Java');
