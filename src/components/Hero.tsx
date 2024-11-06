import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-surface-a0 text-primary text-center p-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-xl">
                Welcome to Your AI-Powered Assistant Ally
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md text-surface-a40">
                Discover a new way to interact, get insights, and make life simpler.
            </p>

            <button className="mt-8 bg-primary-a10 hover:bg-primary-a20 text-primary font-semibold py-2 px-6 rounded-full  border-2 border-yellow-500 transition duration-300 ease-in-out">
                Explore More !
            </button>


        </section>

    );
};

export default Hero;
