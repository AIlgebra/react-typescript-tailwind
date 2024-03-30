import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-lg text-gray-700">We are delighted to have you here.</p>
            <div className="mt-8">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Home;
