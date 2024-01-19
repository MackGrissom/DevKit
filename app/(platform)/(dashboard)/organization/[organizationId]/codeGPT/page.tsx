'use client'
import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    API_KEY: string;
}

const CodeGPT: React.FC<Props> = ({ API_KEY }) => {
    const [messages, setMessages] = useState<Array<{ sender: string, content: string }>>([]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = async () => {
        if (newMessage.trim() === '') return;

        const userMessage = { sender: 'user', content: newMessage };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
                prompt: newMessage,
                max_tokens: 150,
            }, {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            const botMessage = { sender: 'bot', content: response.data.choices[0].text.trim() };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            // Add a message to the chat indicating the error
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', content: 'Error: Failed to send message.' }]);
        }

        setNewMessage('');
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <div className="mb-4 h-[60vh] overflow-y-auto bg-white shadow rounded-lg p-4">
                {messages.map((message, index) => (
                    <div key={index} className={`mb-2 p-3 rounded-lg text-white ${message.sender === 'user' ? 'bg-blue-500 ml-auto' : 'bg-gray-700'}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <div className="flex">
                <input 
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Type your message here..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Send
                </button>
            </div>
        </div>
    );
};

export default CodeGPT;

