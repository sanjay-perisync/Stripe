import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = ({ userData }) => {
  const navigate = useNavigate();

  const {
    businessLocation,
    businessType,
    personalDetails,
    businessDetails,
    publicDetails,
    bankDetails,
    twoStepAuth,
    extras
  } = userData;

  const renderSection = (title, data) => {
    if (!data || Object.keys(data).length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <div className="grid grid-cols-1 gap-3">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex">
              <span className="text-gray-600 w-1/3 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </span>
              <span className="text-gray-900 w-2/3">{value?.toString() || 'Not provided'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    navigate('/dashboard-home');
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Review Your Information</h2>
      </div>
      <div className="space-y-6">
        {/* Business Basics Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Business Basics</h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex">
              <span className="text-gray-600 w-1/3">Business Location:</span>
              <span className="text-gray-900 w-2/3">{businessLocation || 'Not selected'}</span>
            </div>
            <div className="flex">
              <span className="text-gray-600 w-1/3">Business Type:</span>
              <span className="text-gray-900 w-2/3">{businessType || 'Not selected'}</span>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        {renderSection('Personal Details', personalDetails)}
        {renderSection('Business Details', businessDetails)}
        {renderSection('Public Details', publicDetails)}
        {renderSection('Bank Details', bankDetails)}
        {renderSection('Two-Step Authentication', twoStepAuth)}
        {renderSection('Additional Features', extras)}

        {/* Agreement Text */}
        <div className="mt-8 rounded-lg">
          <p className="text-sm">
            By submitting this form, you agree to the Stripe Services Agreement, 
            to receiving text messages from Stripe, and you certify that the information 
            provided is complete and correct.
          </p>
        </div>

       
      </div>

       {/* Agree and Submit Button */}
       <div className="mt-6 flex w-full ">
          <button 
            onClick={handleSubmit} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Agree and Submit
          </button>
        </div>
    </div>
  );
};

export default Review;
