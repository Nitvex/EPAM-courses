function Spy(target, method) {
    let m = target[method];
    let res = {count: 0};
    target[method] = () => {
        ++res.count;
        return m.apply(this, arguments);
    };
    return res;
}

module.exports = Spy;