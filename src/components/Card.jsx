import React, { useEffect } from 'react';
import { GlareCard } from './ui/glare-card';

function Card() {

    const linkHandler = () => {
        window.open("https://calendly.com/subhraneeljobs/free-web-consulting", "_blank");
    };
    

    return (
        <div className="min-h-screen w-full flex gap-9 justify-center items-center">
            <GlareCard className="flex flex-col items-center justify-center">
            <div className="flex"><h1 className="md:text-2xl text-xl mb-6 font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Brandify</h1><p className="md:text-2xl text-xl">🚀</p>
            </div>
                <p className="text-lg text-center px-4 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Schedule a free consultation with us to boost your online presence. We will guide you through modern strategies tailored to elevate your brand in the digital landscape</p>

            </GlareCard>
                <button onClick={linkHandler} className="px-4 py-2 z-40 text-white text-lg font-semibold rounded-md bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 hover:from-purple-500 hover:via-blue-600 hover:to-indigo-700">
                    Book a free consult
                </button>
        </div>
    );
}

export default Card;
