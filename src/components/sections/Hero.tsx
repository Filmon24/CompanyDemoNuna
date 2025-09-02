// src/components/sections/Hero.tsx 
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-950 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Innovating{" "}
          <span className="text-purple-400">Tomorrow&apos;s</span>{" "}
          <span className="text-white">Technology</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Nuna Technologies delivers cutting-edge software solutions that
          transform businesses and drive digital innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border-2 border-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Chevron Down */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white text-3xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
