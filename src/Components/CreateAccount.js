import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const [email, setEmail] = useState(location.state?.email || "");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPasswordStrength(strongPasswordRegex.test(password) ? "Strong" : "Weak");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email.trim()) validationErrors.email = "Email is required";
    if (!fullName.trim()) validationErrors.fullName = "Full name is required";
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (passwordStrength !== "Strong") {
      validationErrors.password =
        "Password must be at least 8 characters with a mix of letters, numbers, and special characters.";
    }
    if (!country.trim()) validationErrors.country = "Country is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/verify-account", { state: { email } });
    }
  };

  return (
    <div className="bg-white px-2 min-h-screen">
      <section className="max-w-6xl mx-auto py-8 border-0 lg:border-l-[2px] lg:border-gray-200 px-[6px] relative">

        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Stripe</h1>
        </header>

        <div className="flex gap-4 flex-wrap lg:flex-nowrap justify-center  py-8">
          {/* Header Section */}
          <div className="my-10 flex flex-col p-2">
            <div className="grid md:grid-rows-3 gap-8">
              <div className="relative">
                <h2 className="font-semibold text-lg mb-2 flex items-center relative">
                  <span className="w-[2px] h-5 bg-blue-500 absolute top-0 left-[-16px]"></span>
                  Get started quickly
                </h2>
                <p className="text-gray-600">
                  Integrate with developer-friendly APIs or choose low-code or
                  pre-built solutions.
                </p>
              </div>
              <div className="relative">
                <h2 className="font-semibold text-lg mb-2 flex items-center relative">
                  <span className="w-[2px] h-5 bg-blue-500 absolute top-0 left-[-16px]"></span>
                  Support any business model
                </h2>
                <p className="text-gray-600">
                  E-commerce, subscriptions, SaaS platforms, marketplaces, and
                  more—all within a unified platform.
                </p>
              </div>
              <div className="relative">
                <h2 className="font-semibold text-lg mb-2 flex items-center relative">
                  <span className="w-[2px] h-5 bg-blue-500 absolute top-0 left-[-16px]"></span>
                  Join millions of businesses
                </h2>
                <p className="text-gray-600">
                  Stripe is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="max-w-md bg-white rounded-lg shadow-xl px-12 py-6">
            <h2 className="text-2xl font-bold mb-6">Create your Stripe account</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>

                  {password && (
                    <p
                      className={`text-sm ${passwordStrength === "Strong" ? "text-green-900" : "text-red-500"
                        }`}
                    >
                      {passwordStrength}
                    </p>
                  )}
                </div>

                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  className={`w-full px-3 py-2 border rounded-md transition-all duration-300 ${password
                      ? passwordStrength === "Strong"
                        ? "border-green-700 focus:ring-green-700"
                        : "border-red-500 focus:ring-red-500"
                      : "border-gray-300"
                    }`}
                  required
                />

                {/* Strength Indicators */}
                {password && (
                  <div className="flex gap-1 mt-2">
                    <span className={`h-1 flex-1 rounded ${passwordStrength === "Strong"
                        ? "bg-green-700"
                        : "bg-red-500"
                      }`}></span>
                    <span className={`h-1 flex-1 rounded ${passwordStrength === "Strong"
                        ? "bg-green-700"
                        : "bg-red-500"
                      }`}></span>
                    <span className={`h-1 flex-1 rounded ${passwordStrength === "Strong"
                        ? "bg-green-700"
                        : "bg-red-500"
                      }`}></span>
                  </div>
                )}
              </div>


              {/* Country Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >

                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Mexico">Mexico</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Russia">Russia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Chile">Chile</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Austria">Austria</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Finland">Finland</option>
                  <option value="Norway">Norway</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Greece">Greece</option>
                  <option value="Romania">Romania</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-4">
                <input type="checkbox" className="h-4 w-4 mt-1" />
                <p className="">
                  Get emails from Stripe about product updates, industry news,
                  and events. You can <a href="" className="text-blue-700">Unsubscribe</a> at any time.
                  <a href="" className="text-blue-700"> Privacy policy</a>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Create account
              </button>


              <div>
                <p className="text-center">Already have an account?<span className="text-indigo-500"> Sign In</span></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className=" pt-8 max-w-6xl mx-auto flex justify-center lg:justify-start">
        <p className="text-sm text-gray-600">© Stripe Privacy & Terms</p>
      </footer>

    </div>
  );
}

export default CreateAccount;
