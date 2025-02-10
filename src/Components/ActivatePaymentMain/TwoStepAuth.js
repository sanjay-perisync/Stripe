import { useState, useRef, useEffect } from "react";
import ContinueBtn from "./ContinueBtn";

const TwoStepAuth = ({ onContinue }) => {
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [isAuthAppAddedModalOpen, setIsAuthAppAddedModalOpen] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isDoneClicked, setIsDoneClicked] = useState(false); 

    const inputRefs = useRef([]);

    useEffect(() => {
        if (isOtpModalOpen) {
            inputRefs.current[0]?.focus();
        }
    }, [isOtpModalOpen]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmitOtp = () => {
        setIsOtpModalOpen(false);
        setIsAuthAppAddedModalOpen(true); 
    };

    const handleDoneClick = () => {
        setIsDoneClicked(true);
        setIsAuthAppAddedModalOpen(false);
    };

    const handleContinueClick = () => {
        if (isDoneClicked) {
            onContinue(); 
        }
    };

    return (
        <div className=" px-4 py-6 flex flex-col min-h-screen">
            <section className="flex flex-col gap-4">
                <div className="max-w-xl mx-auto p-6 bg-white">
                    <h2 className="text-2xl font-bold mb-2">Keep Your Account Secure</h2>

                    <p className="text-gray-700 mb-4">
                        Stripe requires two-step authentication to secure your account.
                        By using either your phone or an authenticator app in addition to your password,
                        you ensure that no one else can log in.
                        We encourage enabling multiple forms of authentication as a backup.
                    </p>

                    <div className="flex flex-col gap-4 mt-5">
                    
                        {!isDoneClicked && (
                            <>
                                <button
                                    className="border rounded-lg p-2"
                                    onClick={() => setIsQrModalOpen(true)}
                                >
                                    Use an Authenticator App
                                </button>
                                <button className="border rounded-lg p-2">Add Security Key</button>
                                <button className="border rounded-lg p-2">Add a Passkey</button>
                            </>
                        )}

                     
                        {isDoneClicked && (
                            <>

                                <button className="border rounded-lg p-2 flex justify-start items-center gap-2 sm:text-sm  lg:text-[18px]">
                                    <img src="https://cdn-icons-png.flaticon.com/512/16105/16105013.png" className="h-6"></img> <p>Authenticator App</p></button>
                                <button className="border rounded-lg p-2 flex justify-center items-center gap-2 sm:text-sm  lg:text-[18px]">
                                    <span className="whitespace-nowrap ">Add More Methods</span> <span className="bg-gray-200 p-1 ml-2 rounded-lg text-slate-400">Recommended</span></button>
                            </>
                        )}
                    </div>
                </div>

                <ContinueBtn isDisabled={!isDoneClicked} onClick={handleContinueClick} />
            </section>

            {/* QR Code Modal */}
            {isQrModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h3 className="text-xl font-semibold mb-4">Use an Authenticator App</h3>
                        <p className="text-gray-700">
                            Scan the QR code using <span className="text-indigo-400">Google Authenticator, Microsoft Authenticator, or Authy</span> to set up your account.
                        </p>

                        <div className="flex justify-center mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/241/241521.png"
                                alt="Dummy QR Code"
                                className="p-2 h-40"
                            />
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                className="border text-black px-4 py-2 rounded-lg"
                                onClick={() => setIsQrModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                onClick={() => {
                                    setIsQrModalOpen(false);
                                    setIsOtpModalOpen(true);
                                }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* OTP Modal */}
            {isOtpModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                        <h3 className="text-xl font-semibold mb-4 text-center">Enter Authentication Code</h3>
                        <p className="text-gray-700 text-center">Enter the 6-digit code from your authenticator app.</p>

                        <div className="flex justify-center items-center gap-6 my-4">
                            {/* Left Side (3 OTP Fields) */}
                            <div className="flex  gap-2">
                                {otp.slice(0, 3).map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>

                            {/* Right Side (3 OTP Fields) */}
                            <div className="flex  gap-2">
                                {otp.slice(3, 6).map((digit, index) => (
                                    <input
                                        key={index + 3}
                                        ref={(el) => (inputRefs.current[index + 3] = el)}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleChange(index + 3, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index + 3, e)}
                                        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                className="border text-black px-4 py-2 rounded-lg"
                                onClick={() => setIsOtpModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                onClick={handleSubmitOtp}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Authenticator App Added Modal */}
            {isAuthAppAddedModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/16105/16105013.png"
                                alt="Authenticator Icon"
                                className="h-5"
                            />
                            <h3 className="text-xl font-semibold">Authenticator App Added</h3>
                        </div>

                        <p className="text-gray-700 mb-6 border-y p-2">
                            From now on, whenever you sign in to your account, you'll need to enter both your password and an authentication code generated by your authenticator app.
                        </p>

                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-32"
                                onClick={handleDoneClick}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TwoStepAuth;
