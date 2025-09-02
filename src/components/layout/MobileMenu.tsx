// src/components/layout/MobileMenu.jsx
import Toggle from '../ui/Toggle'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}


const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) =>  {
  if (!isOpen) return null

  return (
    <div id="mobile-menu" className="md:hidden mt-4 pb-4">
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          className="block py-2 text-white hover:bg-primary-light transition-colors duration-300 rounded px-4"
          onClick={onClose}
        >
          {link.name}
        </a>
      ))}
      <div className="mt-4 px-4">
        <span className="text-white mr-2">Dark Mode</span>
        <Toggle isMobile={true} />
      </div>
    </div>
  )
}

export default MobileMenu