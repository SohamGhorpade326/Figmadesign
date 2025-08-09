/*
================================================================================
File: /components/Testimonials.tsx (FINAL VERSION)
================================================================================
*/
import React from 'react';
import Image from 'next/image';

const testimonialsData = [
    {
        name: "TechStartup Xperience",
        author: "SARAH THOMPSON",
        testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
        date: "February 2024",
        logoUrl: "https://placehold.co/40x40/111111/ffffff?text=🚀",
    },
    {
        name: "GlorifiedBrand",
        author: "SARAH THOMPSON",
        testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
        date: "January 2024",
        logoUrl: "https://placehold.co/40x40/111111/ffffff?text=⚙️",
    },
    {
        name: "WorldofStartups",
        author: "SARAH THOMPSON",
        testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
        date: "November 2023",
        logoUrl: "https://placehold.co/40x40/111111/ffffff?text=🌍",
    },
    {
        name: "StartupNation",
        author: "SARAH THOMPSON",
        testimonial: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
        date: "April 2023",
        logoUrl: "https://placehold.co/40x40/111111/ffffff?text=💡",
    },
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
                        <div key={index} className="bg-gradient-to-br from-white to-[#dfa332] p-8 rounded-2xl text-gray-900 shadow-lg">
                            <div className="flex items-center mb-4 gap-4">
                                <Image src={item.logoUrl} alt={`${item.name} logo`} width={48} height={48} className="rounded-full bg-white p-2" />
                                <div>
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    <p className="text-xs font-semibold text-gray-500 tracking-wider">{item.author}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">&quot;{item.testimonial}&quot;</p>
                            <p className="text-right text-sm font-medium text-gray-500">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;