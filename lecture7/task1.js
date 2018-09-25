let str = "Hello, world";

function reverse(str) {
    return str.split("").reverse().join("");
}

str = reverse(str);
console.log(str);