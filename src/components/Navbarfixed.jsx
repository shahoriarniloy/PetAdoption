
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold">Logo</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#login" className="text-white hover:text-green-500">Login</a>
          <a href="#signup" className="text-white hover:text-green-500">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
