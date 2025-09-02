// src/components/sections/Services.jsx
import { services } from '../../data/services'

const Services = () => {
  return (
    <section id="services" className="section bg-[#22003a] text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3 animate-slide-up opacity-0">
          Our <span className="text-primary-lighter">Services</span>
        </h2>

        <p
          className="text-base md:text-lg text-center mb-12 md:mb-14 max-w-3xl mx-auto text-gray-300 animate-slide-up opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Comprehensive solutions tailored to your business needs
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-primary-dark/95 border border-white/10 p-6 md:p-7 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 card-hover flex flex-col animate-scale-in opacity-0"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-primary-lighter">
                    <i className={service.icon}></i>
                  </span>
                </div>

                <h4 className="text-lg md:text-xl font-semibold mb-2 leading-tight">
                  {service.title}
                </h4>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base">
                      <i className="fas fa-check text-primary-lighter mt-1 mr-2"></i>
                      <span className="text-gray-200 leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;