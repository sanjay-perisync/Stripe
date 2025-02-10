import React, { useState } from 'react';
import ContinueBtn from './ContinueBtn';

const BusinessBasics = ({ onContinue }) => {
  const [businessType, setBusinessType] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Italy", "Spain", "Netherlands",
    "Sweden", "Switzerland", "Japan", "China", "India", "Brazil", "Mexico", "South Korea", "South Africa",
    "United Arab Emirates", "Malaysia", "Singapore", "Indonesia", "Thailand", "Vietnam", "Philippines", "New Zealand",
    "Russia", "Turkey", "Saudi Arabia", "Argentina", "Colombia", "Chile", "Egypt", "Pakistan", "Bangladesh", "Nigeria",
    "Poland", "Portugal", "Greece", "Ireland", "Belgium", "Austria", "Norway", "Denmark", "Finland", "Czech Republic",
    "Hungary", "Israel", "South Sudan"
  ];

  const handleSubmit = () => {
    onContinue({ businessType, businessLocation });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Let's start with some basics</h2>
      <p className="text-gray-600 mb-6">Choose your location and business type to get started.</p>
    
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Location</label>
        <select
          className="w-full lg:w-[400px] p-2 border border-gray-300 rounded-lg bg-white"
          value={businessLocation}
          onChange={(e) => setBusinessLocation(e.target.value)}
        >
          <option value="">Select country</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
    
      <div className="mb-8 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type of business</label>
          <select
            className="w-full lg:w-[400px] p-2 border border-gray-300 rounded-lg bg-white"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option value="">Select business type</option>
            <option value="Individual">Individual</option>
          </select>
        </div> 
        <ContinueBtn 
          isDisabled={!businessType || !businessLocation} 
          onClick={handleSubmit}
        />
      </div>

     
    </>
  );
};

export default BusinessBasics;