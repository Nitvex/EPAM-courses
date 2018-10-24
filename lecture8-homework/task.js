Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
};

console.log([1, 2, 3, 4].myMap((v, iter, arr) => {
    return v * v;
}));

console.log([1, 2, 3, 4, 5, 6, 7].myMap((v, iter, arr) => {
    return v + 1;
}));
console.log([1,2,3].reduce((acc,val)=>{
    return acc+val;
}));