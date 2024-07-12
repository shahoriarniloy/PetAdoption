import { FaPaw, FaHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <div
    
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/Dtj4sT3/cute-puppy-group-sitting-looking-camera-indoors-generated-by-artificial-intelligence.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-10"></div>
      <div className="relative text-center text-pink-900 p-6 rounded-lg bg-opacity-80">
        <div className=' bg-white bg-opacity-50 px-8 py-4 rounded-full border border-pink-900 border-solid'>
        <h1 className="text-5xl font-bold mb-4 text-pink-900 banner-title">Find Your New Best Friend</h1>
        <p className="text-lg  text-black font-bold thin  ">Join us in giving pets a second chance at a loving home</p>

        </div>
       
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8 mt-8">
          <div className="bg-white bg-opacity-80 text-pink-900 p-4 rounded-lg shadow-md flex items-center space-x-4">
            <FaHeart className="text-4xl text-pink-900" />
            <div>
              <h2 className="text-2xl font-bold">Total Adopted</h2>
              <p className="text-xl">1,234</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-80 text-pink-900 p-4 rounded-lg shadow-md flex items-center space-x-4">
            <FaPaw className="text-4xl text-pink-900" />
            <div>
              <h2 className="text-2xl font-bold">To Be Adopted</h2>
              <p className="text-xl">567</p>
            </div>
          </div>
        </div>
        <a href="#adoption" className="banner-title bg-pink-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600  transition duration-300">
          Adopt Now
        </a>
      </div>
    </div>
  );
};

export default Home;
