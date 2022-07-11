import React from 'react'
import config from './config';
import MessageParser from './Messageparser';
import ActionProvider from './ActionProvider';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const MyBot = () => {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    )
}

export default MyBot