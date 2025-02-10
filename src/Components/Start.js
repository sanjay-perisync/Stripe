import React from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard-home');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Stripe</h1>
        </header>

        {/* Main Section  */}
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="max-w-3xl mx-auto px-12 py-10 space-y-6  flex flex-col justify-center items-center bg-white shadow-xl rounded-xl">
            <div className="space-y-8 ">
              <h1 className="text-2xl font-bold text-gray-900">
                How would you like to get started?
              </h1>
              <p className="text-gray-600">
                To accept payments straight away, add the required information to your business profile.
                Or start by exploring Stripe's features to find the right fit for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pb-3">
                <button
                  onClick={handleClick}
                  className="flex items-center justify-center px-4  bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <span className='py-2'>Add business information</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Explore features
                </button>
              </div>
            </div>

            {/* Info Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t py-5">
              <div className="space-y-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">What information will need?</h3>
                <p className="text-gray-600">
                  You'll be asked to provide standard business details, such as contact information and industry type.
                </p>
              </div>

              <div className="space-y-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">How long does it take?</h3>
                <p className="text-gray-600">
                  Complete your business profile in 5-10 minutes, so you can take your first payment straight away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
