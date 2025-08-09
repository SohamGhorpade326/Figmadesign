const Contact: React.FC = () => {
    return (
        // The smaller gradient div has been removed from here
        <section id="contact" className="bg-[#111111] text-white pt-24 md:pt-32 pb-12 md:pb-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left Column: Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">CONTACT</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Ready to elevate your visual presence? I'm here to bring your creative visions to life. Feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div><span className="font-bold">Location:</span> San Francisco, CA</div>
                            <div><span className="font-bold">Phone:</span> +1 (123) 456-7890</div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" className="bg-transparent border-b border-gray-600 focus:border-white outline-none p-2" />
                            <input type="text" placeholder="Last Name" className="bg-transparent border-b border-gray-600 focus:border-white outline-none p-2" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none p-2" />
                        
                        <div>
                            <p className="mb-4">Select Service</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <label className="flex items-center"><input type="radio" name="service" className="mr-2 accent-pink-500" /> Graphic Design</label>
                                <label className="flex items-center"><input type="radio" name="service" className="mr-2 accent-pink-500" /> 3D Modeling/Animation</label>
                                <label className="flex items-center"><input type="radio" name="service" className="mr-2 accent-pink-500" /> Video Editing</label>
                                <label className="flex items-center"><input type="radio" name="service" className="mr-2 accent-pink-500" /> Video Production</label>
                            </div>
                        </div>

                        <textarea placeholder="Write your message here" rows={4} className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none p-2"></textarea>
                        
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                SUBMIT
                            </button>
                            <p className="text-xs text-gray-500 mt-4">By submitting this form, you read and agree to the Terms & Conditions and our privacy policy.</p>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                    <p>&copy; All rights reserved @ericajonestemplate</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
