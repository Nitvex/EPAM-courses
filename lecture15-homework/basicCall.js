function duckCount() {
    return [].filter.call(arguments, ((arg) => {
        return {}.hasOwnProperty.call(arg, 'quack');
    })).length;
}

module.exports = duckCount;