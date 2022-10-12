import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './navbar'
import Footer from './footer';

const Home: NextPage = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full bg-grey-500">
        <Navbar></Navbar>
        <main className="mt-20">
          <div className="Hero">
            <div className="mx-auto w-4/5 pb-6" style={{ height: '500px' }}>
              <img className="rounded-2xl" style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="hero.png" />
            </div>

            <div className="bg-white flex mx-auto justify-center items-center w-2/3 h-lg -mt-20 relative drop-shadow-xl rounded-xl">
              <div className="my-6 mx-4">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Room Type</span>
                  <select name="" id="" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1">
                    <option hidden value="">
                      --Select Room Type--
                    </option>
                    <option value="1">Regular Room</option>
                    <option value="2">VIP Room</option>
                    <option value="3">Exclusive Room</option>
                  </select>
                </label>
              </div>
              <div className="my-6 mx-4">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Number of Rooms</span>
                  <input
                    type="number"
                    name="number-rooms"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                    placeholder="1"
                  />
                </label>
              </div>
              <div className="my-6 mx-4">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Check-In</span>
                  <input
                    type="date"
                    name="checkin"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
              <div className="my-6 mx-4">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Check-Out</span>
                  <input
                    type="date"
                    name="checkin"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
              <div className="mt-5 mx-4">
                <a href="#" className="bg-[#7D74BE] text-white hover:bg-[#393E72] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Check
                </a>
              </div>
            </div>
          </div>
          <div className="rooms text-center py-10">
            <h2 className="text-4xl font-bold">Our Rooms</h2>
            <div className="grid grid-cols-3 gap-3 mx-auto justify-items-center w-4/5 my-5 text-left">
              <div className="mx-4 max-w-xs my-3 bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="rooms.jpg" alt="" />
                <div className="flex p-5 justify-around items-center">
                  <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Exclusive Room</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-[#5D549E] dark:text-white">$60</h5>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#7D74BE] rounded-lg hover:bg-[#393E72] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg aria-hidden="true" className="-mt-1 -ml-2 -w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-4 max-w-xs my-3 bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="rooms.jpg" alt="" />
                <div className="flex p-5 justify-around items-center">
                  <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Exclusive Room</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-[#5D549E] dark:text-white">$60</h5>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#7D74BE] rounded-lg hover:bg-[#393E72] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg aria-hidden="true" className="-mt-1 -ml-2 -w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-4 max-w-xs my-3 bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="rooms.jpg" alt="" />
                <div className="flex p-5 justify-around items-center">
                  <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Exclusive Room</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-[#5D549E] dark:text-white">$60</h5>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#7D74BE] rounded-lg hover:bg-[#393E72] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg aria-hidden="true" className="-mt-1 -ml-2 -w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-4 max-w-xs my-3 bg-white rounded-lg border border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="rooms.jpg" alt="" />
                <div className="flex p-5 justify-around items-center">
                  <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Exclusive Room</h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-[#5D549E] dark:text-white">$60</h5>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#7D74BE] rounded-lg hover:bg-[#393E72] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg aria-hidden="true" className="-mt-1 -ml-2 -w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M9 17.898C9 18.972 10.2649 19.546 11.0731 18.8388L17.3838 13.3169C18.1806 12.6197 18.1806 11.3801 17.3838 10.6829L11.0731 5.16108C10.2649 4.45388 9 5.02785 9 6.1018V17.898Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facilites">
            <div className="mx-auto w-4/5 my-5 text-left py-10 flex justify-center">
              <div className="flex flex-col items-center md:flex-row dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex flex-col justify-between leading-normal w-2/5">
                      <h5 className="mb-2 text-4xl font-bold dark:text-white">Our Facilities</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit dolore facere aspernatur. Consectetur quas velit totam? Ut, fuga quasi? Sapiente doloremque possimus itaque fugiat, maiores consectetur maxime, harum quo obcaecati vel sit! Ducimus, repellendus praesentium necessitatibus sint consequatur explicabo facere voluptatibus vero enim ex rem minus expedita, numquam dolor.</p>
                  </div>
                  <div className="w-3/5">
                    <div id="controls-carousel" className="relative" data-carousel="static">
                      {/* Carousel wrapper */}
                      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* Item 1 */}
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item>
                          <img src="restaurant.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 2 */}
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                          <img src="indoor.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 3 */}
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                          <img src="restaurant.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                      </div>
                      {/* Slider controls */}
                      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                          <span className="sr-only">Previous</span>
                        </span>
                      </button>
                      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          <span className="sr-only">Next</span>
                        </span>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </main>
      </div>
    </>
  );
};

export default Home;
