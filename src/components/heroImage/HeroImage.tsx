import React from 'react';

interface HeroImageProps {
    imageUrl: string;
    title: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                <div className="flex gap-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full transition">
                        Escape Now
                    </button>
                    <button className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 rounded-full transition">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Purple Wave at Bottom */}
            <svg className="absolute bottom-0 left-0 w-full z-10" viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path
                    d="M0,100 L0,80 L550,10 L1000,85 L1640,0 L1940,100 Z"
                    fill="#9000FF"
                />
            </svg>

            {/* Purple Wave at Bottom */}
            <svg className="absolute bottom-0 left-0 w-full z-10" viewBox="0 -35 1440 100" preserveAspectRatio="none">
                <path
                    d="M0,120 L0,50 L550,-10 L1000,55 L1640,0 L1940,70 Z"
                    fill="#070322"
                />
            </svg>

        </div>
    );
};

export default HeroImage;