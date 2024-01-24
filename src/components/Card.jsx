import React from 'react';

const Card = () => {
    return (
        <div className="bg-gray-900 text-white p-4 text-center rounded-xl shadow-md m-20">
            <h1 class="bg-gray-200 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl">
                Getting Started
            </h1>
            <h3 className='p-3 mt-3'>
                <p className="italic text-2xl font-serif pt-2">"The best way to learn is to get started"</p>
            </h3>
            <p className="text-xl text-gray-300 p-4">
                Whether you're a beginner or an experienced coder, this collection provides in-depth insights into algorithms and data structures crucial for competitive programming. We're dedicated to expanding our knowledge base by enhancing existing articles and adding new ones, all aimed at empowering programmers in their coding journey.
            </p>
            <div>
                <button class="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded font-sans text-xl">
                    Take me to Articles
                </button>
            </div>
        </div>
    );
};

export default Card;
