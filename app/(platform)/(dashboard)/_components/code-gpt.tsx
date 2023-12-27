'use client'
import React, { useState } from 'react';

import axios from 'axios';

type Props = {
    API_KEY: string;
};

const CodeGPT: React.FC<Props> = ({ API_KEY }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Array<{ role: string, content: string }>>([]);

    const queryModel = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        setMessages([...messages, { role: 'user', content: input }]);
        const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: input,
                max_tokens: 60
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            }
        );
        setMessages([...messages, { role: 'user', content: input }, { role: 'ai', content: result.data.choices[0].text.trim() } ]);
        setInput('');
    };

    return (
        <div className="m-auto mt-10 max-w-2xl p-10 shadow-lg">
            <div className="overflow-y-auto h-64 mb-3">
                {messages.map((message, index) => (
                    <div className={`mb-2 ${message.role === 'ai' ? 'text-blue-500' : 'text-green-500'}`} key={index}>
                        <div className="font-bold">
                            {message.role.toUpperCase()}
                        </div>
                        <div>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
            
            <form onSubmit={queryModel}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        className="w-full p-2 border rounded" 
                    />
                </div>
                <div>
                    <button className="px-3 py-2 rounded bg-blue-500 text-white" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default CodeGPT;