function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(su => {
            return goodUsers.some(user => {
                return su.id === user.id;
            })
        })
    };
}

module.exports = checkUsersValid;