function curryN(fn, n) {
    if(typeof n !== 'number') n = fn.length;
    function curry(prev) {
        return arg => {
            let args = prev.concat(arg);
            if (args.length < n) return curry(args);
            return fn.apply(this, args);
        }
    }
    return curry([]);
}

module.exports = curryN;