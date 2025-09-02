// src/components/sections/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="section bg-primary py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up opacity-0">Get In <span className="text-primary-lighter">Touch</span></h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
          Ready to start your next project or have questions about our services? Contact us today.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/2 animate-slide-up opacity-0" style={{animationDelay: '0.5s'}}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-lighter"/>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-lighter"/>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-lighter"/>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message"  className="w-full bg-primary border border-primary-lighter rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-lighter"></textarea>
              </div>
              <button type="submit" className="bg-primary-lighter hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up opacity-0" style={{animationDelay: '0.7s'}}>
            <div className="bg-primary-dark p-6 md:p-8 rounded-2xl h-full shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-lighter text-xl mr-4 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Headquarters</h4>
                    <p>123 Tech Boulevard, Suite 500<br/>San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-lighter text-xl mr-4 mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-300">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-lighter text-xl mr-4 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>info@nunatech.com</p>
                    <p className="text-sm text-gray-300">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary-lighter text-xl mr-4 mt-1">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Follow Us</h4>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-primary-lighter hover:text-white text-xl transition-colors duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="text-primary-lighter hover:text-white text-xl transition-colors duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="text-primary-lighter hover:text-white text-xl transition-colors duration-300">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-primary-lighter hover:text-white text-xl transition-colors duration-300">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact