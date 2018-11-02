function getShortMessages(messages) {
    return messages.map(msg => msg.message)
                   .filter(msg => msg.length < 50)
}

module.exports = getShortMessages;

