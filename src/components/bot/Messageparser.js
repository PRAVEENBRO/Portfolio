// in MessageParser.js
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        if (message.includes('hello')) {
            console.log(message)
            this.actionProvider.handleHello();
        }
    }
}

export default MessageParser;