import Image from 'next/image'; // <-- Import next/image

const servicesData = [
    {
        title: "Graphic Design",
        description: "Crafting distinct brand identities that resonate with the essence of each project, leaving a lasting impression. We've established brands seeking a fresh visual perspective.",
        details: "What's included? Seamlessly transitioning between print and digital platforms, maintaining consistency and visual impact.",
        mainImageUrl: "https://placehold.co/400x300/e8e8e8/333?text=Product+Box",
        secondaryImageUrl: "https://placehold.co/200x200/d8d8d8/333?text=Cosmetic+Tube",
    },
    {
        title: "Video Editing",
        description: "Weaving compelling narratives through meticulous editing, bringing stories to life with a keen eye for pacing and visual elements to captivate audiences.",
        details: "What's included? Professional color grading, engaging promotional videos, whether for solo entrepreneurs or established brands, ensuring your message is delivered beautifully.",
        mainImageUrl: "https://placehold.co/300x400/2c2c2c/fff?text=Starry+Portrait",
        secondaryImageUrl: "https://placehold.co/250x200/c4c4c4/333?text=Child+Watching",
    },
    {
        title: "3D Animation",
        description: "Creating immersive visuals for architectural visualization, I bring concepts to life with meticulous detail and cutting-edge rendering techniques.",
        details: "What's included? From concept art to final reality renders, I channel my passion for creating immersive digital experiences and pushing the boundaries of digital expression.",
        mainImageUrl: "https://placehold.co/400x500/3d3d3d/fff?text=3D+Character",
        secondaryImageUrl: "https://placehold.co/250x200/1a1a1a/fff?text=Futuristic+Scene",
    },
];

const Services2: React.FC = () => {
    return (
        <section id="services" className="bg-[#F5F2EC] py-24 md:py-32">
            <div className="container mx-auto px-6 space-y-24">
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${index === 1 ? 'md:grid-flow-col-dense' : ''}`}
                    >
                        <div className={`text-gray-800 ${index === 1 ? 'md:col-start-2' : ''}`}>
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <div className="border-t border-gray-300 pt-4">
                                <h4 className="font-bold mb-2">What&apos;s included?</h4>
                                <p className="text-gray-600 text-sm">{service.details}</p>
                            </div>
                        </div>
                        <div className={`relative h-96 ${index === 1 ? 'md:col-start-1' : ''}`}>
                            <Image 
                                src={service.mainImageUrl} 
                                alt={service.title} 
                                width={400} height={300}
                                className={`absolute object-cover rounded-2xl shadow-lg ${
                                    index === 1 
                                    ? 'top-0 right-0 w-3/5 h-4/5' 
                                    : 'bottom-0 left-0 w-4/5 h-4/5'
                                }`} 
                            />
                            <Image 
                                src={service.secondaryImageUrl} 
                                alt={`${service.title} detail`} 
                                width={250} height={200}
                                className={`absolute object-cover rounded-2xl shadow-lg ${
                                    index === 1 
                                    ? 'bottom-0 left-0 w-2/5 h-2/5' 
                                    : 'top-0 right-0 w-2/5 h-3/5'
                                }`} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services2;
