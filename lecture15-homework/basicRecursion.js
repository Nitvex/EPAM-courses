function reduce(arr, fn, initial) {
    return (function step(index, acc) {
        if (index > arr.length - 1) return acc;
        return step(index + 1, fn(acc, arr[index], index, arr))
    })(0, initial)
}

module.exports = reduce;