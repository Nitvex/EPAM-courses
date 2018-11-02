function repeat(operation, num) {
    if (num > 0) operation(operation,--num)
}

module.exports = repeat;