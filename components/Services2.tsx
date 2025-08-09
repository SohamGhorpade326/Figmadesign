import React from 'react';

const servicesData = [
    { title: "Visual Alchemist", description: "Crafting brand identities that transcend, ensuring your brand captivates and stands out in a crowded digital landscape." },
    { title: "Aesthetic Maestro", description: "Elevating designs with a keen eye, weaving designs with a keen vision print and digital for consistently striking visuals." },
    { title: "Storytelling Virtuoso", description: "Mastering the art of storytelling in video editing, creating compelling narratives for promotional videos and short films." },
];

const DecorativeDiamond: React.FC = () => (
    <div className="w-4 h-4 bg-gray-800 transform rotate-45 flex-shrink-0"></div>
);

const Services2: React.FC = () => {
    return (
        // KEY CHANGE: Section is now relative with huge bottom padding to make space
        <section id="services" className="bg-[#F5F2EC] pt-24 md:pt-32 pb-96 relative">
            
            {/* This div holds the content and sits ON TOP of the gradient */}
            <div className="container mx-auto px-6 relative z-10">
                 <div className="text-left mb-16 max-w-lg">
                    <p className="text-sm font-bold text-gray-500 mb-2">MY OFFERS</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        ART OF VISUAL ALCHEMY
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-12">
                    <div className="flex justify-center md:justify-start">
                         <a href="#contact" className="px-8 py-3 h-fit font-semibold text-gray-700 border-2 border-gray-400 rounded-full hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300">
                            CONTACT ME
                        </a>
                    </div>
                    <div className="space-y-12">
                        {servicesData.map((service, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="pt-2"><DecorativeDiamond /></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- THIS IS THE FINAL, CORRECT GRADIENT --- */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full h-[70vh] z-0"
              style={{
                background: 'linear-gradient(to top, #111111 5%, rgba(212, 98, 153, 0.45) 50%, rgba(253, 202, 138, 0.4) 85%, transparent 100%)'
              }}
            ></div>
        </section>
    );
};

export default Services2;