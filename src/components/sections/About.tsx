// src/components/sections/About.tsx
const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-primary py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slide-up opacity-0">
          About <span className="text-primary-lighter">Nuna Technologies</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
          {/* Left Image */}
          <div
            className="lg:w-1/2 animate-slide-up opacity-0 flex justify-center"
            style={{ animationDelay: '0.3s' }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="About Nuna Technologies"
              className="rounded-2xl shadow-2xl max-h-[200px] w-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div
            className="lg:w-1/2 animate-slide-up opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3">Who We Are</h3>
            <p className="text-sm md:text-base mb-4 leading-relaxed">
              Founded in 2015, Nuna Technologies has rapidly emerged as a leader
              in innovative software development. Our team of passionate
              engineers, designers, and strategists work together to create
              solutions that solve real-world problems.
            </p>

            <h3 className="text-lg md:text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-sm md:text-base mb-4 leading-relaxed">
              To empower businesses through technology by delivering scalable,
              secure, and user-centric software solutions that drive growth and
              efficiency.
            </p>

            {/* Mini Cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-primary-dark p-4 rounded-xl shadow-lg text-center">
                <div className="text-primary-lighter text-2xl mb-2">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">Innovation</h4>
                <p className="text-xs leading-snug">
                  Pushing boundaries with cutting-edge technology
                </p>
              </div>

              <div className="bg-primary-dark p-4 rounded-xl shadow-lg text-center">
                <div className="text-primary-lighter text-2xl mb-2">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4 className="font-bold text-sm mb-1">Integrity</h4>
                <p className="text-xs leading-snug">
                  Ethical practices and transparent operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
