import React from 'react';
import { useNavigate } from "react-router-dom";

function ActivatePaymentHeader() {
    const navigate = useNavigate();
    return (
        <div>
           
           <header className='flex justify-between px-2 py-2 h-14 items-center border-b'>
            <div className='flex items-center gap-4'>
            <button className="text-gray-400 hover:text-gray-600" onClick={() => navigate("/dashboard-home")} >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div>
                    <p className='text-gray-300'>|</p>
                    </div>

                <p>Activate Payments</p>
            </div>


            <div className='hidden md:flex'>
                <p> <span>Need Help?</span><a href='' className='text-indigo-400 font-semibold '> Contact a products specialist</a></p>
            </div>

            <div className='flex lg:hidden text-indigo-400 font-semibold'>
                <a href=''>Need Help?</a>
            </div>

           </header>
        </div>
    );
}

export default ActivatePaymentHeader;