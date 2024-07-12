const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-pink-100 to-white to-gray-300 shadow-md mb-0 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="uppercase font-bold mb-2">Quick Links</h5>
            <ul className="list-none">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/adopt" className="text-gray-400 hover:text-white">Adopt</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h5 className="uppercase font-bold mb-2">Follow Us</h5>
            <ul className="list-none flex space-x-4">
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase font-bold mb-2">Contact</h5>
            <p className="text-gray-400">123 Pet Street, Pet City</p>
            <p className="text-gray-400">Email: info@petadoption.com</p>
            <p className="text-gray-400">Phone: (+880) 1537197539</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-500 text-sm">
        © 2024 Pet Adoption. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
