const students = [
    {
        id: 1,
        name: 'Bob'
    },
    {
        id: 2,
        name: 'John'
    },
    {
        id: 3,
        name: 'Alan'
    },
];
let arr = students.reduce((acc, val) => {
    return val.id % 2 !== 0 ? acc.concat(val.name) : acc;
}, []);
console.log(arr);

