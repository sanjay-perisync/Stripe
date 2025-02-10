import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VerifyMail() {
  const location = useLocation();
  const { email } = location.state || {}; 
  const navigate = useNavigate();
  
  // State for managing button click and loading
  const [isVerifying, setIsVerifying] = useState(false);

  // Function to handle resend email and redirection
  const handleResendEmail = () => {
    setIsVerifying(true);
    setTimeout(() => {
      navigate('/start'); 
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header  */}
      <header className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Stripe</h1>
      </header>

      {/*  Verification Card */}
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-lg h-auto lg:h-[300px] bg-white p-8 shadow-lg rounded-xl mx-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            First, let's verify your email
          </h1>
          
          <p className="text-gray-600 mb-6">
            Check <span className="font-semibold">{email}</span> to verify your account
            and get started.
          </p>

          <button
            onClick={handleResendEmail}
            className="w-full py-2 px-4 border border-gray-300 font-semibold rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-indigo-500 focus:text-white"
          >
            {isVerifying ? 'Verifying...' : 'Click to verify'}
          </button>

          <p className="text-sm text-gray-600 mt-4">
            Need help?{' '}
            <a href="#" className="text-indigo-700 hover:underline">Visit support</a>{' '}
            or{' '}
            <a href="#" className="text-indigo-700 hover:underline">contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyMail;
