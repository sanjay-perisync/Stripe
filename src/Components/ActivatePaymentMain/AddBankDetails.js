import { useState, useEffect } from "react";
import ContinueBtn from "./ContinueBtn";

const AddBankDetails = ({ onContinue }) => {
    const [formData, setFormData] = useState({
        bankName: "",
        accountNumber: "",
        confirmAccountNumber: "",
        payoutSchedule: "automatic"
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.bankName) {
            newErrors.bankName = "Please select your bank";
        }
        if (!formData.accountNumber || formData.accountNumber.length !== 12) {
            newErrors.accountNumber = "Account number must be exactly 12 digits";
        }
        if (formData.confirmAccountNumber !== formData.accountNumber) {
            newErrors.confirmAccountNumber = "Account numbers do not match";
        }

       
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const isValid =
            formData.bankName !== "" &&
            formData.accountNumber.length === 12 &&
            formData.confirmAccountNumber === formData.accountNumber;
        
      
        setIsFormValid(isValid);
    }, [formData]);

    const handleSubmit = (e) => {
       
        if (e) e.preventDefault();
        
        const isValid = validateForm();
   
        
        if (isValid && onContinue) {
         
            onContinue(formData);
        }
    };

    return (
        <div className="bg-gray-50 px-4 py-6 flex gap-5 flex-col min-h-screen">
            <section className="flex flex-col gap-4">
                <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">Add an Account for Payouts</h2>
                    <p className="text-gray-600 mb-4">
                        Earnings that you will receive will be sent to this Account.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* Bank Selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Choose your Bank Account</label>
                            <select
                                name="bankName"
                                value={formData.bankName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            >
                                <option value="">Please select your bank...</option>
                                <option value="sbi">State Bank of India (SBI)</option>
                                <option value="hdfc">HDFC Bank</option>
                                <option value="icici">ICICI Bank</option>
                                <option value="axis">Axis Bank</option>
                                <option value="kotak">Kotak Mahindra Bank</option>
                                <option value="pnb">Punjab National Bank (PNB)</option>
                                <option value="bob">Bank of Baroda (BoB)</option>
                                <option value="canara">Canara Bank</option>
                                <option value="union">Union Bank of India</option>
                                <option value="indusind">IndusInd Bank</option>
                                <option value="idbi">IDBI Bank</option>
                                <option value="yes">YES Bank</option>
                                <option value="bandhan">Bandhan Bank</option>
                                <option value="federal">Federal Bank</option>
                                <option value="rbl">RBL Bank</option>
                                <option value="idfc">IDFC FIRST Bank</option>
                                <option value="uco">UCO Bank</option>
                                <option value="indian">Indian Bank</option>
                                <option value="central">Central Bank of India</option>
                                <option value="southindian">South Indian Bank</option>
                            </select>
                            {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName}</p>}
                        </div>

                        {/* Account Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Account Number</label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={formData.accountNumber}
                                onChange={handleChange}
                                placeholder="Enter 12-digit account number"
                                className="w-full p-2 border rounded-lg"
                                maxLength="12"
                            />
                            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber}</p>}
                        </div>

                        {/* Confirm Account Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Confirm Account Number</label>
                            <input
                                type="text"
                                name="confirmAccountNumber"
                                value={formData.confirmAccountNumber}
                                onChange={handleChange}
                                placeholder="Re-enter account number"
                                className="w-full p-2 border rounded-lg"
                                maxLength="12"
                            />
                            {errors.confirmAccountNumber && <p className="text-red-500 text-sm">{errors.confirmAccountNumber}</p>}
                        </div>

                        {/* Payout Schedule */}
                        <div className="mt-6">
                            <h3 className="font-bold text-xl mb-2">Select Your Payout Schedule</h3>
                            <p className="text-gray-500 mb-4">
                                Choose how often you want to receive your payouts.
                            </p>

                            {/* Radio Buttons */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="automatic"
                                        name="payoutSchedule"
                                        value="automatic"
                                        checked={formData.payoutSchedule === "automatic"}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <label htmlFor="automatic" className="text-gray-700">
                                        Automatic every day
                                    </label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="manual"
                                        name="payoutSchedule"
                                        value="manual"
                                        checked={formData.payoutSchedule === "manual"}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <label htmlFor="manual" className="text-gray-700">
                                        Manual
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <ContinueBtn 
                    isDisabled={!isFormValid}
                    onClick={() => {
                       
                        handleSubmit();
                    }}
                />
            </section>
        </div>
    );
};

export default AddBankDetails;