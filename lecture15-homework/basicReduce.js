function countWords(inputWords) {
    return inputWords.reduce((countedWords, word) => {
        if (countedWords[word] == null) countedWords[word] = 0;
        countedWords[word] += 1;
        return countedWords;
    }, {})
}

module.exports = countWords;