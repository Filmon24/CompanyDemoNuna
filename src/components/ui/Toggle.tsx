// src/components/ui/Toggle.tsx
const Toggle = ({ isMobile = false }) => {
  const toggleTheme = () => {
    // 1. Get the HTML element
    const html = document.querySelector('html');

    // 2. Add a null check
    if (html) { // Only proceed if the element exists
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
    // If html is null, the function will simply do nothing
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <input 
        type="checkbox" 
        id={isMobile ? "mobile-toggle" : "toggle"} 
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        onChange={toggleTheme}
      />
      <label 
        htmlFor={isMobile ? "mobile-toggle" : "toggle"} 
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
};

export default Toggle;