'use client'
import React from 'react';
import CodeGPT from '../../../_components/code-gpt';

const ChatbotPage: React.FC = () => {
    const [API_KEY, setAPI_KEY] = React.useState('');
    const [connected, setConnected] = React.useState(false);
    
    const initiateChatbot = (e : React.SyntheticEvent) => {
        e.preventDefault();
        setConnected(true);
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {!connected ? (
                <form onSubmit={initiateChatbot} className="m-auto mt-10 max-w-2xl p-10 shadow-lg">
                    <h2 className="text-center mb-5 font-semibold text-2xl">Input Your OpenAI API Key</h2>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            value={API_KEY} 
                            onChange={e => setAPI_KEY(e.target.value)} 
                            className="w-full px-3 py-2 rounded border"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-3 py-2 rounded bg-blue-500 text-white">
                            Connect to Chatbot
                        </button>
                    </div>
                </form>
            ) : <CodeGPT API_KEY={API_KEY}/>}
        </div>
    );
};

export default ChatbotPage;