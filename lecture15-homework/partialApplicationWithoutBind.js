var slice = Array.prototype.slice;

function logger(namespace) {
    return function write(){
        console.log(`${namespace} ${Array.from(arguments).join(" ")}`);
    }
}

module.exports = logger;