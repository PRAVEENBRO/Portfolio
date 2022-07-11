// in ActionProvider.js
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleHello() {
        // const message = this.createChatbotMessage('Hello. Nice to meet you.');
        const message = 'Hello. Nice to meet you.';
        console.log("first")
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}

export default ActionProvider;