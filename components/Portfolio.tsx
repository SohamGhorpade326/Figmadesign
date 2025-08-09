import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
    {
        title: "Stean",
        category: "BRANDING",
        description: "Modern branding aesthetics with brand marks, lettering and collateral for a luxury furniture brand. I drafted logos and built a lasting impression.",
        imageUrl: "https://images.pexels.com/photos/4103247/pexels-photo-4103247.jpeg",
    },
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="bg-[#F5F2EC] py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold text-gray-500 mb-2">PORTFOLIO</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        MY LATEST WORKS
                    </h2>
                </div>
                {portfolioItems.map((item, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group shadow-2xl">
                        <Image 
                            src={item.imageUrl} 
                            alt={item.title} 
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-10"></div>
                        <div className="absolute bottom-10 right-10 flex items-center gap-4">
                           <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white text-left">
                                <p className="text-xs font-bold tracking-widest text-gray-300 mb-1">{item.category}</p>
                                <h3 className="text-4xl font-bold">{item.title}</h3>
                                <p className="mt-2 max-w-xs text-sm text-gray-200">{item.description}</p>
                           </div>
                           <div className="p-5 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white cursor-pointer hover:bg-white/20 transition-all">
                                <ArrowRight size={24} />
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
