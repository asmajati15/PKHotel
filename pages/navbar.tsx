// import '../styles/globals.css';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-50 top-0 left-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <a href="" className="text-black text-2xl font-bold">
                Hotel Turu
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                    Dashboard
                  </a> */}
                <a href="/" className="text-gray-500 hover:text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                  Rooms
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                  Facilities
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 hover:text-white px-3 py-2 mr-4 rounded-md text-sm font-bold">
                  Resto
                </a>
                <a href="login" className="bg-[#7D74BE] text-white hover:bg-[#393E72] hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
