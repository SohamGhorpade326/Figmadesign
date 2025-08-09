import React from 'react';

const testimonialsData = [
    { name: "TechStartup Xperience", company: "Nathan Thompson", testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.", logoUrl: "https://placehold.co/40x40/cccccc/333?text=T" },
    { name: "GlorifiedBrand", company: "Sarah Thompson", testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.", logoUrl: "https://placehold.co/40x40/cccccc/333?text=G" },
    { name: "WorldofStartups", company: "Michael Johnson", testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.", logoUrl: "https://placehold.co/40x40/cccccc/333?text=W" },
    { name: "StartupNation", company: "Emily Williams", testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.", logoUrl: "https://placehold.co/40x40/cccccc/333?text=S" },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-[#111111] py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 text-white">
                    <p className="text-sm font-bold text-orange-500 mb-2">TESTIMONIALS</p>
                    <div className="flex items-center justify-center gap-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold">
                            WHAT PEOPLE SAY
                        </h2>
                        <svg width="25" height="25" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0029 4.38232L20.0029 21.5061L24.846 16.663L27.2676 19.0846L16.5848 29.7674L5.90198 19.0846L8.32358 16.663L13.1667 21.5061L13.1667 4.38232L20.0029 4.38232Z" fill="#4ADE80"/>
                        </svg>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonialsData.map((item, index) => (
                        // KEY CHANGE: Replaced bg-white with a custom gradient
                        <div key={index} className="bg-gradient-to-br from-white to-[#e0ad4b] p-8 rounded-2xl text-gray-900 shadow-lg">
                            <div className="flex items-center mb-4">
                                <img src={item.logoUrl} alt={`${item.name} logo`} className="w-10 h-10 rounded-full mr-4 bg-gray-200" />
                                <div>
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">"{item.testimonial}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
