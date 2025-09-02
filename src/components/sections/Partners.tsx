// src/components/sections/Partners.jsx
import { partners } from '../../data/partners'

const Partners = () => {
  return (
    <section id="partners" className="section bg-primary-DEFAULT ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up opacity-0">Our <span className="text-primary-DEFAULT">Partners</span></h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
          We collaborate with industry leaders to deliver exceptional results
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-center animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
          {partners.map((partner, index) => (
            <div key={index} className="bg-[#432069] p-4 rounded-2xl flex items-center justify-center h-28 md:h-32 shadow-xl">
              <img src={partner.logo} alt={partner.name} className="max-h-12"/>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking to expand our network of technology partners. Let's explore how we can work together.
          </p>
          <a href="#contact" className="bg-primary-lighter hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners