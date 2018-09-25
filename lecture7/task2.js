const a = {
    value: 0,
    valueOf: function () {
        return ++this.value;
    }
};
console.log(a == 1 && a == 2 && a == 3);