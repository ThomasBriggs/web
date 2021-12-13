class User {

    static num = 0;
    socketId = 0;
    userNum = 0;

    constructor(socketId) {
        this.socketId = socketId
        this.userNum = (User.num+=1)
    }

    getNum() {
        return this.userNum
    }
}

module.exports = User