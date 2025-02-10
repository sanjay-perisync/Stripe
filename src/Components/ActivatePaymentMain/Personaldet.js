import { useState, useEffect } from "react";
import ContinueBtn from "./ContinueBtn";

const PersonalDet = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    legalNameFirst: "",
    legalNameLast: "",
    email: "",
    dob: "",
    country: "Malaysia",
    address1: "",
    address2: "",
    city: "",
    state: "Pulau Pinang",
    phone: "",
    icNumber: "",
    countryCode: "+91" 
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
    const requiredFields = [
      'legalNameFirst',
      'legalNameLast',
      'email',
      'dob',
      'country',
      'address1',
      'city',
      'phone',
      'icNumber'
    ];

  requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isValid = Object.keys(formData).every(key => {
      if (key === 'address2') return true;
      return formData[key].trim() !== '';
    });
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const isValid = validateForm();
    
    if (isValid && onContinue) {
     
      onContinue(formData);
    }
  };

  const handleContinue = () => {
    console.log("Form submitted successfully!", formData);
    
  };

  return (
    <div className=" px-4 py-6 flex gap-5 flex-col min-h-screen">
      <section className="flex flex-col gap-4">
        <div className="max-w-xl mx-auto p-6 bg-white">
          <h2 className="text-2xl font-bold mb-2">Verify your personal details</h2>
          <p className="text-gray-600 mb-4">
            This information is collected to verify your identity, keep your account safe, and help meet legal and regulatory requirements.
            For more information, review the <a href="#" className="border-b-2 border-dotted font-medium">Privacy Policy</a>.
          </p>

        
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Legal Name</label>
              <div className="flex gap-2">
                <input type="text" name="legalNameFirst" value={formData.legalNameFirst} onChange={handleChange} placeholder="First Name"
                  className="w-1/2 p-2 border rounded" />
                <input type="text" name="legalNameLast" value={formData.legalNameLast} onChange={handleChange} placeholder="Last Name"
                  className="w-1/2 p-2 border rounded" />
              </div>
              {errors.legalNameFirst && <p className="text-red-500 text-sm">{errors.legalNameFirst}</p>}
              {errors.legalNameLast && <p className="text-red-500 text-sm">{errors.legalNameLast}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-gray-100"
                placeholder="Enter your email"
              />
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded" />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Home Address</label>
              <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded bg-gray-100">
                <option value="Malaysia">Malaysia</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Sweden">Sweden</option>
                <option value="Norway">Norway</option>
                <option value="Denmark">Denmark</option>
                <option value="Finland">Finland</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Austria">Austria</option>
                <option value="Belgium">Belgium</option>
                <option value="Portugal">Portugal</option>
                <option value="Greece">Greece</option>
                <option value="Ireland">Ireland</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Japan">Japan</option>
                <option value="South Korea">South Korea</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
                <option value="Mexico">Mexico</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="South Africa">South Africa</option>
                <option value="Egypt">Egypt</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Turkey">Turkey</option>
                <option value="Russia">Russia</option>
                <option value="Poland">Poland</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Hungary">Hungary</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Philippines">Philippines</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Colombia">Colombia</option>
                <option value="Peru">Peru</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Ukraine">Ukraine</option>
              </select>

              <input type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Street Address" className="w-full p-2 border rounded mt-2" />
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Flat, unit or other" className="w-full p-2 border rounded mt-2" />
              <input type="number" name="address2" value={formData.address2} onChange={handleChange} placeholder="Postal code" className="w-full p-2 border rounded mt-2" />
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full p-2 border rounded mt-2" />
             

              <label className="block text-gray-700 font-medium">State</label>
<select 
  name="state" 
  value={formData.state} 
  onChange={handleChange} 
  className="w-full p-2 border rounded bg-gray-100 focus:ring focus:ring-blue-400 focus:border-blue-500"
>
  {/* Indian States */}
 
    <option value="Maharashtra">Maharashtra</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Delhi">Delhi</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Kerala">Kerala</option>
    <option value="Telangana">Telangana</option>


  {/* United States */}

    <option value="California">California</option>
    <option value="Texas">Texas</option>
    <option value="New York">New York</option>
    <option value="Florida">Florida</option>
    <option value="Illinois">Illinois</option>


  {/* Canada */}

    <option value="Ontario">Ontario</option>
    <option value="Quebec">Quebec</option>
    <option value="British Columbia">British Columbia</option>


  {/* Australia */}

    <option value="New South Wales">New South Wales</option>
    <option value="Victoria">Victoria</option>
    <option value="Queensland">Queensland</option>


  {/* United Kingdom */}
 
    <option value="England">England</option>
    <option value="Scotland">Scotland</option>
    <option value="Wales">Wales</option>
    <option value="Northern Ireland">Northern Ireland</option>

  {/* Other  Regions */}

    <option value="Tokyo (Japan)">Tokyo (Japan)</option>
    <option value="Seoul (South Korea)">Seoul (South Korea)</option>
    <option value="Shanghai (China)">Shanghai (China)</option>
    <option value="São Paulo (Brazil)">São Paulo (Brazil)</option>
    <option value="Mexico City (Mexico)">Mexico City (Mexico)</option>
    <option value="Berlin (Germany)">Berlin (Germany)</option>
    <option value="Paris (France)">Paris (France)</option>

</select>

            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="p-2 border rounded bg-gray-100 min-w-[80px]"
                >
                  <option value="+91">🇮🇳 India (+91)</option>
                  <option value="+60">🇲🇾 Malaysia (+60)</option>
                  <option value="+1">🇺🇸 United States (+1)</option>
                  <option value="+44">🇬🇧 United Kingdom (+44)</option>
                  <option value="+61">🇦🇺 Australia (+61)</option>
                  <option value="+1">🇨🇦 Canada (+1)</option>
                  <option value="+49">🇩🇪 Germany (+49)</option>
                  <option value="+33">🇫🇷 France (+33)</option>
                  <option value="+39">🇮🇹 Italy (+39)</option>
                  <option value="+34">🇪🇸 Spain (+34)</option>
                  <option value="+31">🇳🇱 Netherlands (+31)</option>
                  <option value="+46">🇸🇪 Sweden (+46)</option>
                  <option value="+47">🇳🇴 Norway (+47)</option>
                  <option value="+45">🇩🇰 Denmark (+45)</option>
                  <option value="+358">🇫🇮 Finland (+358)</option>
                  <option value="+41">🇨🇭 Switzerland (+41)</option>
                  <option value="+43">🇦🇹 Austria (+43)</option>
                  <option value="+32">🇧🇪 Belgium (+32)</option>
                  <option value="+351">🇵🇹 Portugal (+351)</option>
                  <option value="+30">🇬🇷 Greece (+30)</option>
                  <option value="+353">🇮🇪 Ireland (+353)</option>
                  <option value="+64">🇳🇿 New Zealand (+64)</option>
                  <option value="+81">🇯🇵 Japan (+81)</option>
                  <option value="+82">🇰🇷 South Korea (+82)</option>
                  <option value="+86">🇨🇳 China (+86)</option>
                  <option value="+55">🇧🇷 Brazil (+55)</option>
                  <option value="+52">🇲🇽 Mexico (+52)</option>
                  <option value="+54">🇦🇷 Argentina (+54)</option>
                  <option value="+56">🇨🇱 Chile (+56)</option>
                  <option value="+27">🇿🇦 South Africa (+27)</option>
                  <option value="+20">🇪🇬 Egypt (+20)</option>
                  <option value="+971">🇦🇪 United Arab Emirates (+971)</option>
                  <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                  <option value="+90">🇹🇷 Turkey (+90)</option>
                  <option value="+7">🇷🇺 Russia (+7)</option>
                  <option value="+48">🇵🇱 Poland (+48)</option>
                  <option value="+420">🇨🇿 Czech Republic (+420)</option>
                  <option value="+36">🇭🇺 Hungary (+36)</option>
                  <option value="+66">🇹🇭 Thailand (+66)</option>
                  <option value="+62">🇮🇩 Indonesia (+62)</option>
                  <option value="+84">🇻🇳 Vietnam (+84)</option>
                  <option value="+63">🇵🇭 Philippines (+63)</option>
                  <option value="+92">🇵🇰 Pakistan (+92)</option>
                  <option value="+880">🇧🇩 Bangladesh (+880)</option>
                  <option value="+234">🇳🇬 Nigeria (+234)</option>
                  <option value="+57">🇨🇴 Colombia (+57)</option>
                  <option value="+51">🇵🇪 Peru (+51)</option>
                  <option value="+58">🇻🇪 Venezuela (+58)</option>
                  <option value="+380">🇺🇦 Ukraine (+380)</option>
                </select>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 font-medium">IC Number (MyKad)</label>
              <p className="py-2 text-gray-600">To verify your identity, we'll need to know your individual NRIC.</p>
              <input type="text" name="icNumber" value={formData.icNumber} onChange={handleChange} placeholder="Enter your NRIC" className="w-full p-2 border rounded" />
              {errors.icNumber && <p className="text-red-500 text-sm">{errors.icNumber}</p>}
            </div>
          </form>
       
        </div>

        <ContinueBtn 
          isDisabled={!isFormValid} 
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
};

export default PersonalDet;