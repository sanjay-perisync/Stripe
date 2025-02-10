import React, { useState } from 'react';
import ContinueBtn from './ContinueBtn';

function AddExtra({ onContinue }) {
    const [isChecked, setIsChecked] = useState(false);
    const [amount, setAmount] = useState('');
    const [selectedPercentage, setSelectedPercentage] = useState(null);

    const isFormValid = selectedPercentage !== null; 

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        console.log("Form submitted with", selectedPercentage);
        onContinue();
    };

    return (
        <div className="px-4 py-6 flex gap-5 flex-col min-h-screen">
            <section className="flex flex-col gap-4">
                <div className="max-w-xl mx-auto p-6 bg-white">
                    <p className='bg-gray-200 p-1 rounded-lg w-32 text-center text-gray-400 font-semibold mb-5'>Optional</p>
                    <h2 className="text-2xl font-bold mb-2">Show Customers Your Climate Commitment</h2>
                    <p className="text-gray-600 mb-4">
                        With <span className="text-indigo-600 font-semibold">Stripe Climate</span>, 
                        you can direct a fraction of your revenue from payments to fund permanent carbon removal.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="mb-4">
                            <h1 className="text-lg font-semibold">Set Your Commitment</h1>
                            <p className="text-gray-600">
                                Every dollar will fund next-generation carbon removal. 
                                You can change your commitment amount anytime in the Climate section of your dashboard.
                            </p>

                            {/* Option to select */}
                            <section className="flex flex-wrap gap-4 mt-4">
                                {[0.5, 1, 1.5].map((percentage) => (
                                    <div 
                                        key={percentage} 
                                        className={`h-auto lg:h-40 w-full lg:w-40 border rounded-lg flex flex-col justify-center items-center px-5 py-5 cursor-pointer ${selectedPercentage === percentage ? 'border-2 border-indigo-400 ' : ''}`}
                                        onClick={() => setSelectedPercentage(percentage)}
                                    >
                                        {percentage === 1 && <p className="text-gray-500 font-medium whitespace-nowrap px-2">MOST POPULAR</p>}
                                        <p className='text-3xl font-semibold'>{percentage}%</p>
                                        {percentage === 1 && <p className='text-gray-500'>of revenue</p>}
                                    </div>
                                ))}
                            </section>
                        </div>

                        <div className="mb-4 space-y-4">
                            <label className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    className='h-5 w-5'
                                    checked={isChecked} 
                                    onChange={() => setIsChecked(!isChecked)}
                                />
                                <span>Start contributing after my business has processed:</span>
                            </label>

                            <div className="flex items-center gap-2 mt-2">
                                <input 
                                    type="number" 
                                    placeholder="MYR -" 
                                    className="border rounded-lg p-2 bg-gray-200 w-auto lg:w-full"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <p className='text-gray-500 whitespace-nowrap'>of revenue with Stripe</p>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-col gap-4">
                            <ContinueBtn 
                                isDisabled={!isFormValid} 
                                onClick={handleSubmit}
                                text={selectedPercentage ? `Continue with ${selectedPercentage}%` : "Continue"}
                            />
                            <button type="button" 
                                onClick={handleSubmit} className="border p-2 rounded-lg">No Thanks</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddExtra;
