import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import SvgGrids from './svggrids';

function Hero() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      setError(''); 
      navigate('/create-account', { state: { email } });  // Pass email as state
    } else {
      setError('Please enter a valid email address');  
    }
  };

  return (
    <main>
      <div className='flex flex-wrap lg:flex-nowrap  justify-center lg:justify-end mt-10 px-2'>
        <section className='flex flex-col gap-5'>
          <div className="w-20">
            <p className="bg-gray-600 rounded-full px-2 py-1 bg-opacity-60 text-white text-center">
              Preview
            </p>
          </div>

          <h1 className='mx-auto max-w-2xl text-[50px] lg:text-[64px] font-bold opacity-60'>
            Financial infrastructure to grow your revenue
          </h1>

          <p className='mx-auto max-w-2xl text-[20px]'>
            Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </p>

          <div className='flex flex-col'>
            <div className='flex justify-between items-center border rounded-full w-80'>
            <input
                type="email"
                placeholder="Enter your Mail-id"
                className='flex-grow px-4 py-2 rounded-l-full outline-none w-2/3'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <button
                className='flex justify-center font-semibold gap-2 bg-gray-800 text-white items-center w-40 my-2 mx-2 px-2 py-2 rounded-full'
                onClick={handleSubmit} 
              >
                <span>Start Now</span>
                <svg className="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                  <g fillRule="evenodd">
                    <path className="HoverArrow__linePath" d="M0 5h7" fill="#ffffff"></path>
                    <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4" fill="#ffffff"></path>
                  </g>
                </svg>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}  
          </div>
        </section>

        <section>
          <img src='/Screenshot_2025-02-06_113648-removebg-preview.png' alt='Hero Image' className='h-auto lg:h-[700px] w-auto' />
        </section>
      </div>

      <SvgGrids />
    </main>
  );
}

export default Hero;
