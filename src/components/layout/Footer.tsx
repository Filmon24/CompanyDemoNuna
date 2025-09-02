// src/components/layout/Footer.jsx
const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ]

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#teams' },
    { name: 'Projects', href: '#projects' },
    { name: 'Partners', href: '#partners' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ]

  return (
    <footer className="bg-primary-darker py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
              <span className="text-primary-lighter">Nuna</span> Technologies
            </a>
            <p className="mt-2 text-gray-400">
              Innovating tomorrow's technology today.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-dark mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Nuna Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer