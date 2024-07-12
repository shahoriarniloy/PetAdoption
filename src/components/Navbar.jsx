import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Social Icons Section */}
      

      <nav className={`fixed w-full top-0 z-40 transition-all duration-300 lg:px-36 md:px-32 ${isScrolled ?  'bg-gradient-to-r from-pink-100 to-white to-gray-300 shadow-md mb-0': 'bg-transparent'}`}>
        
        
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex  items-center">
          <img src="https://i.ibb.co/mX5GjTW/paw.png" alt="Pawesome Logo" className="h-12 w-auto mt-0" />

          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block ml-10">
                <div className="ml-10 flex items-center justify-center space-x-4 thin">
                  <a href="#home" className="text-pink-900 font-bold hover:text-pink-600">Home</a>
                  <a href="#about" className="text-pink-900 font-bold hover:text-pink-600">About</a>
                  <a href="#adoption" className="text-pink-900 font-bold hover:text-pink-600">Adoption</a>
                  <a href="#donation" className="text-pink-900 font-bold hover:text-pink-600">Donation</a>
                  <a href="#resources" className="text-pink-900 font-bold hover:text-pink-600">Resources</a>
                  <a href="#contacts" className="text-pink-900 font-bold hover:text-pink-600">Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded={isOpen ? 'true' : 'false'}>
                <span className="sr-only">Open main menu</span>
                <svg className={`h-6 w-6 ${isOpen ? 'text-pink-600' : 'text-gray-800'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-gray-900 shadow-md py-2">
            <div className="flex flex-col items-center">
              <a onClick={toggleMenu} href="#home" className="text-pink-900 block py-2 px-4 hover:text-pink-600">Home</a>
              <a onClick={toggleMenu} href="#about" className="text-pink-900 block py-2 px-4 hover:text-pink-600">About</a>
              <a onClick={toggleMenu} href="#adoption" className="text-pink-900 block py-2 px-4 hover:text-pink-600">Adoption</a>
              <a onClick={toggleMenu} href="#donation" className="text-pink-900 block py-2 px-4 hover:text-pink-600">Donation</a>
              <a onClick={toggleMenu} href="#resources" className="text-pink-900 block py-2 px-4 hover:text-pink-600">Resources</a>
              <a onClick={toggleMenu} href="#contacts" className="text-pink-900 block py-2 px-4 hover:text-pink-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
