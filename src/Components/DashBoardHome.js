import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashBoardHome() {
  const [isTestMode, setIsTestMode] = useState(false);

  const toggleTestMode = () => {
    setIsTestMode((prev) => !prev);
  };

 const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Active-Payment');
  };

  return (

    // wrapper div
    <div className="">
      {/* Test Mode Banner */}
      {isTestMode && (
        <div className="bg-orange-600 text-white px-4 py-2 flex justify-between items-center">
          <span>Test mode</span>
          <div className="flex items-center gap-2">
            <span className="hidden lg:flex">
              You're using test data. To accept payments, complete your business profile.
            </span>
          </div>
          <button className="flex items-center px-3 py-1">
            Complete profile
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}


      {/* hero  */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white justify-between hidden lg:flex text-gray-500 flex-col  border-r h-screen border-gray-200 p-4 overflow-hidden left-0 top-0 sticky">
          <div className="flex flex-col justify-between gap-5">
            <div>
              <p className="flex items-center py-2 px-3 rounded-lg">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>New Business</span>
              </p>
            </div>

            <div className="space-y-1">
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                Balances
              </a>
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Transactions
              </a>
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Customers
              </a>
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Product Catalogue
              </a>
            </div>

            <div className="space-y-1">
              <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Products
              </a>
              <a href="#" className="flex items-center justify-between focus:text-purple-600 px-3 py-2 rounded-lg ">
                <div className='flex'>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p>Payments</p>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='h-4 w-4'></img>
              </a>

              <a href="#" className="flex items-center justify-between focus:text-purple-600 px-3 py-2 rounded-lg ">
                <div className='flex'>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p>Billing</p>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='h-4 w-4'></img>
              </a>

              <a href="#" className="flex items-center justify-between focus:text-purple-600 px-3 py-2 rounded-lg ">
                <div className='flex'>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p>Reporting</p>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='h-4 w-4'></img>
              </a>

              <a href="#" className="flex justify-between items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
                <div className='flex'>
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <p>More</p>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='h-4 w-4'></img>
              </a>
            </div>
          </div>

          <div>
            <a href="#" className="flex items-center focus:text-purple-600 px-3 py-2 rounded-lg ">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Developers
            </a>
          </div>
        </aside>




        {/* Right Content main */}
        <main className="flex-1 px-4 py-1 overflow-hidden">
         

            {/* Header */}
          
            <header className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center gap-4 py-2 w-full ">

                <div className="flex items-center gap-4">

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-8 pr-4 py-2 w-[350px] lg:w-[400px] xl:[650px] border border-gray-100 rounded-lg bg-gray-100 outline-none  focus:ring-2 focus:ring-indigo-500"
                    />
                    <svg className="w-5 h-5 absolute left-2 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between w-auto gap-6 lg:gap-4 ">

                  {/* test mode toggle button */}
                  <div className="flex items-center gap-2">
                    <span>Test mode</span>
                    <div
                      className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${isTestMode ? "bg-orange-400" : "bg-gray-200"
                        }`}
                      onClick={toggleTestMode}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isTestMode ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </div>
                  </div>
                  {/* test mode toggle button ends */}
                 
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                 
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                 
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              
                  <svg className="w-5 h-5 text-white bg-indigo-400 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              
            </header>

            <div className='flex justify-between items-center gap-4 mt-5'>
              <div>
                <h1 className="text-3xl font-bold mb-4">Activate payments on your account</h1>
                <p className="text-gray-600 mb-6 mx-auto max-w-2xl text-[18px]">
                  Fill out your business profile to accept payments. Any progress you make will be saved, so you can always finish later.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2" onClick={handleClick} >
                  Activate payments <span className='font-bold text-2xl'>→</span>
                </button>
              </div>
              <div>
                <img src='/Stripe_Web_Onboarding_6-removebg-preview.png' alt='Stripe Onboarding' className="max-w-full h-auto object-contain" />
              </div>
            </div>


            {/* Get Started Section */}
            <div className="mt-12 bg-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-start mx-auto max-w-[1310px]">
                <h2 className="text-3xl font-bold">Get started with Stripe</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>


              <div className=" px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                  {/* No Code Card */}
                  <div className="relative py-10 space-y-4">
                    <div className="absolute top-4  border rounded-full  px-3 py-1 text-sm">
                      No code
                    </div>
                    <h3 className="text-[20px] font-semibold mb-4 ">Create a subscription from the Dashboard</h3>
                    <button className=" font-medium text-[18px] py-2 rounded-md text-indigo-500 transition-colors">
                      Start →
                    </button>

                    <div>
                      <img src='/last_one-removebg-preview.png' className='rounded-lg shadow-xl'></img>
                    </div>
                  </div>

                  {/* Low Code Card */}
                  <div className="relative space-y-4 py-10 px-6">
                    <div className="absolute top-4  border rounded-full text-start px-3 py-1 text-sm">
                      Low code
                    </div>
                    <h3 className="text-[20px] font-semibold mb-4">Use a pre-built payment form for your checkout</h3>
                    <button className=" font-medium text-[18px] py-2 rounded-md text-indigo-500 transition-colors">
                      Start →
                    </button>
                    <div>
                      <img src='last_two-removebg-preview.png' alt='' className='rounded-lg shadow-xl'>
                      </img>
                    </div>
                  </div>



                  {/* Help Section */}

                  <div className='flex flex-col'>
                    <div className="text-center bg-white flex px-5 items-center gap-10 mb-12 border rounded-xl py-4 max-h-52 w-auto">

                      <div> 
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></div>

                      <div> <p className=" mb-4 font-semibold">
                        Need help getting started?
                      </p>
                        <p className="">
                          Contact a product specialist
                        </p></div>

                    </div>

                    {/* Explore Link */}

                    <div className='text-center bg-white flex px-5 items-center gap-10 mb-12 border rounded-xl py-4 h-32'>

                      <div>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </div>

                      <div>
                        <p className="font-semibold">
                          Explore all products
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}

export default DashBoardHome;