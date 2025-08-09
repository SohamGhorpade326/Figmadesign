const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Gradient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full blur-[150px] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6">
        <p className="font-medium text-gray-300 mb-4">👋 HEY, I AM ERICA</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          A YOUNG CREATIVE <br />
          DESIGNER BASED IN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            SAN DIEGO
          </span>
        </h1>
        <div className="mt-12 flex justify-center items-center space-x-4">
          <a href="#portfolio" className="px-8 py-3 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            MY WORKS
          </a>
          <a href="#contact" className="px-8 py-3 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
