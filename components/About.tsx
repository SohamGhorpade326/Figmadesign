import React from 'react';
import Image from 'next/image'; // <-- Import next/image

const About: React.FC = () => {
    return (
        <section id="about" className="bg-[#F5F2EC] py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-40 w-full h-full"></div>
                        <Image 
                            src="https://images.unsplash.com/photo-1587614382346-4ec580c38b18?q=80&w=1887&auto=format&fit=crop" 
                            alt="Erica Jones working on a laptop" 
                            width={500} // <-- Add width
                            height={600} // <-- Add height
                            className="relative w-full max-w-sm h-[480px] object-cover rounded-[3rem] shadow-2xl"
                        />
                    </div>
                    {/* Right Column: Text Content */}
                    <div className="text-gray-800">
                        <p className="text-sm font-bold text-gray-500 mb-2">ABOUT</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, and then my passion for code led me to web development. These varied skills set my work apart, and I&apos;ve ventured into 3D modeling for immersive experiences.
                        </p>
                        <a href="#contact" className="px-10 py-4 font-semibold text-gray-700 border-2 border-gray-400 rounded-full hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300">
                            SCHEDULE A CALL
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;