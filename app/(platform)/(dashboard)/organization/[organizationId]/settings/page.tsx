'use client'
import React, { useState, useEffect } from 'react';
import { OrganizationProfile } from '@clerk/nextjs';

const SettingsPage = () => {
    const [apiKey, setApiKey] = useState('');
    const [showApiKey, setShowApiKey] = useState(false);

    useEffect(() => {
        const storedApiKey = localStorage.getItem('API_KEY') || '';
        setApiKey(storedApiKey);
    }, []);

    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApiKey(event.target.value);
    };

    const saveApiKey = () => {
        localStorage.setItem('API_KEY', apiKey);
        alert('API Key saved successfully.');
    };

    const toggleShowApiKey = () => {
        setShowApiKey(!showApiKey);
    };

    return (
        <div className="w-full">
            <OrganizationProfile
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: "none",
                            width: "100%"
                        },
                        card: {
                            border: "1px solid #e5e5e5",
                            boxShadow: "none",
                            width: "100%"
                        }
                    }
                }}
            />

            <div className="mt-10 mb-4 px-4">
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                    OpenAI API Key
                </label>
                <div className="mt-1 relative">
                    <input
                        type={showApiKey ? 'text' : 'password'}
                        name="apiKey"
                        id="apiKey"
                        value={apiKey}
                        onChange={handleApiKeyChange}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                    <button
                        onClick={toggleShowApiKey}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                        {showApiKey ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button
                    onClick={saveApiKey}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Save API Key
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
