import React, { useState } from "react";
import ActivatePaymentHeader from "./ActivePyamentHeader";
import PersonalDet from "./Personaldet";
import BusinessDetails from "./BusinessDetails";
import PublicDetails from "./PublicDetails";
import AddBankDetails from "./AddBankDetails";
import TwoStepAuth from "./TwoStepAuth";
import AddExtra from "./AddExtra";
import Review from "./Review";
import BusinessBasics from "./BusinessBasics";

const Step = ({ steps = [], currentStep = 0, currentSubStep = 0 }) => {
  return (
    <div className="hidden lg:flex flex-col w-64 pr-8 border-r border-gray-200">
      <h1 className="text-2xl font-bold mb-6">Activate Payments</h1>
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={step.title}>
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2
                    ${isCompleted ? "border-blue-500 bg-blue-500 text-white" : isActive ? "border-blue-500 text-blue-500" : "bg-gray-500 text-gray-500"}`}
                >
                  {index + 1}
                </div>
                <span className={`${isCompleted || isActive ? "text-blue-500 font-medium" : "text-gray-500"}`}>
                  {step.title}
                </span>
              </div>

              {isActive && step.subSteps && Array.isArray(step.subSteps) && (
                <div className="ml-6 mt-2 space-y-2">
                  {step.subSteps.map((subStep, subIndex) => {
                    const subStepCompleted = subIndex < currentSubStep;
                    return (
                      <div key={subStep} className="flex items-center space-x-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold border-2
                            ${subStepCompleted ? "border-blue-500 bg-blue-500 text-white" : "bg-gray-500 text-gray-500"}`}
                        ></div>
                        <span className={`${subStepCompleted ? "text-blue-500 whitespace-nowrap" : "text-gray-500 whitespace-nowrap"}`}>
                          {subStep}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ActivatePayments = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [userData, setUserData] = useState({
    businessLocation: "",
    businessType: "",
    personalDetails: {},
    businessDetails: {},
    publicDetails: {},
    bankDetails: {},
    twoStepAuth: {},
    extras: {},
  });

  const steps = [
    { title: "Verify your business", subSteps: ["Business Type", "Personal Details", "Business Details", "Public Details"] },
    { title: "Add your bank", subSteps: ["Add Bank Details"] },
    { title: "Secure your account", subSteps: ["Two Step Authentication"] },
    { title: "Add extras", subSteps: ["Climate Contributions"] },
    { title: "Review and finish", subSteps: ["Summary"] },
  ];

  const handleContinue = () => {
    if (currentStep === 0 && currentSubStep < steps[0].subSteps.length - 1) {
      setCurrentSubStep((prev) => prev + 1);
    } else {
      setCurrentSubStep(0);
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBusinessBasicsSubmit = ({ businessType, businessLocation }) => {
    setUserData(prev => ({
      ...prev,
      businessType,
      businessLocation
    }));
    handleContinue();
  };

  const handlePersonalDetailsSubmit = (formData) => {
    setUserData((prev) => ({ ...prev, personalDetails: formData }));
    handleContinue();
  };

  const handleBusinessDetailsSubmit = (formData) => {
    setUserData((prev) => ({ ...prev, businessDetails: formData }));
    handleContinue();
  };
  
  const handlePublicDetailsSubmit = (formData) => {
    setUserData((prev) => ({ ...prev, publicDetails: formData }));
    handleContinue();
  };
  
  const handleAddBankDetails = (formData) => {
    setUserData((prev) => ({ ...prev, bankDetails: formData }));
    handleContinue();
  };
  
  const handleTwoStepAuth = (formData) => {
    setUserData((prev) => ({ ...prev, twoStepAuth: formData }));
    handleContinue();
  };
  
  const handleAddExtra = (formData) => {
    setUserData((prev) => ({ ...prev, extras: formData }));
    handleContinue();
  };

  return (
    <div className="px-4 py-6 flex gap-5 flex-col min-h-screen">
      <ActivatePaymentHeader />
      <section className="flex">
        <Step steps={steps} currentStep={currentStep} currentSubStep={currentSubStep} />
        <div className="pl-0 md:pl-8">
          {currentStep === 0 && currentSubStep === 0 && (
            <BusinessBasics onContinue={handleBusinessBasicsSubmit} />
          )}
          {currentStep === 0 && currentSubStep === 1 && (
            <PersonalDet onContinue={handlePersonalDetailsSubmit} />
          )}
          {currentStep === 0 && currentSubStep === 2 && (
            <BusinessDetails onContinue={handleBusinessDetailsSubmit} />
          )}
          {currentStep === 0 && currentSubStep === 3 && (
            <PublicDetails onContinue={handlePublicDetailsSubmit} />
          )}
          {currentStep === 1 && currentSubStep === 0 && (
            <AddBankDetails onContinue={handleAddBankDetails} />
          )}
          {currentStep === 2 && currentSubStep === 0 && (
            <TwoStepAuth onContinue={handleTwoStepAuth} />
          )}
          {currentStep === 3 && currentSubStep === 0 && (
            <AddExtra onContinue={handleAddExtra} />
          )}
          {currentStep === 4 && currentSubStep === 0 && (
            <Review userData={userData} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ActivatePayments;