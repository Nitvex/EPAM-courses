module.exports = function(namespace) {
    return function write(){
        console.log(`${this} ${Array.from(arguments).join(" ")}`);
    }.bind(namespace);
};