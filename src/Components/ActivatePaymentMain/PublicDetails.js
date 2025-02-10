import { useState } from 'react';
import ContinueBtn from './ContinueBtn';

const PublicDetails = ({ onContinue }) => {
    const [formData, setFormData] = useState({
        statementDescriptor: '',
        shortenedDescriptor: ''
    });
    const [isEnabled, setIsEnabled] = useState(false);

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));


        if (name === 'statementDescriptor') {
            if (value.length < 5 || value.length > 22) {
                setErrors(prev => ({
                    ...prev,
                    statementDescriptor: 'Statement descriptor must be between 5-22 characters'
                }));
            } else {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.statementDescriptor;
                    return newErrors;
                });
            }
        }

     
        const isValid = value.length >= 5 && value.length <= 22;
        setIsFormValid(isValid);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (isFormValid && onContinue) {
            onContinue(formData);
        }
    };

    return (
        <div className=" px-4 py-6 flex gap-5 flex-col min-h-screen">
            <section className="flex flex-col gap-4">
                <div className="max-w-xl mx-auto p-6 bg-white">
                    <h2 className="text-2xl font-bold mb-2">Add public details for customers</h2>
                    <p className="text-gray-600 mb-6">
                        This information may be visible in payment statements, invoices, and receipts.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">
                                Statement descriptor
                            </label>
                            <select
                                name="statementDescriptor"
                                value={formData.statementDescriptor}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg bg-white font-semibold"
                            >
                                 <option value=" Statement descriptor">CONTENT-MOBBIN.COM</option>
                            </select>

                            {errors.statementDescriptor && (
                                <p className="text-red-500 text-sm mt-1">{errors.statementDescriptor}</p>
                            )}

                            <div className='border px-2 py-2 my-5'>
                                <div className='bg-gray-50'>
                                <img src='https://th.bing.com/th/id/R.91f4576648a154cf11d6eddae30e3718?rik=yL%2fTgkooJ5nRiw&riu=http%3a%2f%2fwww.ayuvamedicals.com%2fassets%2fimg%2fbank.svg&ehk=TrTpHktgmmPZGnOyOkY%2fVT903PUr9knwMxq6FJF7fV4%3d&risl=&pid=ImgRaw&r=0' alt='' className='h-5 w-5'></img>
                                </div>
                                <div className="mt-4  bg-gray-50 rounded-lg">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span></span>
                                    <span>$20.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-indigo-500 font-medium mb-1">
                                    <span>CONTENT-MOBBIN.COM</span>
                                    <span>$340.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span></span>
                                    <span>$63.00</span>
                                </div>
                            </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Your statement descriptor shows up on your customers' bank or credit card statements. It should be 5-22 characters.
                            </p>

                         
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <label className="block text-gray-700 font-medium">
                                    Shortened descriptor
                                </label>
                                <span className="text-sm text-gray-500 px-2 py-0.5 bg-gray-100 rounded">
                                    Optional
                                </span>
                            </div>
                            <select
                                name="shortenedDescriptor"
                                value={formData.shortenedDescriptor}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg bg-white font-semibold"
                            >
                                <option value="shortenedDescriptor">Custom...</option>
                                <option value="CONTENT-MO">CONTENT-MO</option>
                            </select>



                            <div className='border px-2 py-2 my-5'>
                                <div className='bg-gray-50'>
                                <img src='https://th.bing.com/th/id/R.91f4576648a154cf11d6eddae30e3718?rik=yL%2fTgkooJ5nRiw&riu=http%3a%2f%2fwww.ayuvamedicals.com%2fassets%2fimg%2fbank.svg&ehk=TrTpHktgmmPZGnOyOkY%2fVT903PUr9knwMxq6FJF7fV4%3d&risl=&pid=ImgRaw&r=0' alt='' className='h-5 w-5'></img>
                                </div>
                                <div className="mt-4  bg-gray-50 rounded-lg">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span></span>
                                    <span>$20.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-indigo-500 font-medium mb-1">
                                    <span>CONTENT-MO* T-SHIRT</span>
                                    <span>$340.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span></span>
                                    <span>$63.00</span>
                                </div>
                            </div>
                            </div>


                            <p className="text-sm text-gray-500 mt-2">
                                A short summary or label associated with transactions, similar to the full statement descriptor. You may provide more specific details about a charge with dynamic suffixes. When a suffix is used, it is combined with the shortened descriptor on card statements.
                            </p>


                            <div>
  <p className="text-gray-700 font-medium mt-10">Customer Support Phone Number</p>
  <label className="flex items-center gap-2 mt-2  rounded-lg p-2 ">
    {/* Country Code Dropdown */}
    <select 
      className="p-2 border rounded bg-white focus:ring focus:ring-blue-400 focus:border-blue-500"
      value={formData.countryCode}
      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
    >
      <option value="+91">🇮🇳 India (+91)</option>
      <option value="+1">🇺🇸 United States (+1)</option>
      <option value="+44">🇬🇧 United Kingdom (+44)</option>
      <option value="+61">🇦🇺 Australia (+61)</option>
      <option value="+1">🇨🇦 Canada (+1)</option>
      <option value="+81">🇯🇵 Japan (+81)</option>
      <option value="+86">🇨🇳 China (+86)</option>
      <option value="+49">🇩🇪 Germany (+49)</option>
      <option value="+33">🇫🇷 France (+33)</option>
      <option value="+39">🇮🇹 Italy (+39)</option>
      <option value="+34">🇪🇸 Spain (+34)</option>
      <option value="+31">🇳🇱 Netherlands (+31)</option>
      <option value="+46">🇸🇪 Sweden (+46)</option>
      <option value="+41">🇨🇭 Switzerland (+41)</option>
      <option value="+32">🇧🇪 Belgium (+32)</option>
      <option value="+52">🇲🇽 Mexico (+52)</option>
      <option value="+55">🇧🇷 Brazil (+55)</option>
      <option value="+7">🇷🇺 Russia (+7)</option>
      <option value="+27">🇿🇦 South Africa (+27)</option>
      <option value="+62">🇮🇩 Indonesia (+62)</option>
      <option value="+63">🇵🇭 Philippines (+63)</option>
      <option value="+66">🇹🇭 Thailand (+66)</option>
      <option value="+82">🇰🇷 South Korea (+82)</option>
      <option value="+90">🇹🇷 Turkey (+90)</option>
      <option value="+92">🇵🇰 Pakistan (+92)</option>
      <option value="+880">🇧🇩 Bangladesh (+880)</option>
      <option value="+20">🇪🇬 Egypt (+20)</option>
      <option value="+971">🇦🇪 UAE (+971)</option>
      <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
      <option value="+234">🇳🇬 Nigeria (+234)</option>
      <option value="+54">🇦🇷 Argentina (+54)</option>
      <option value="+94">🇱🇰 Sri Lanka (+94)</option>
      <option value="+56">🇨🇱 Chile (+56)</option>
      <option value="+98">🇮🇷 Iran (+98)</option>
      <option value="+48">🇵🇱 Poland (+48)</option>
      <option value="+30">🇬🇷 Greece (+30)</option>
      <option value="+43">🇦🇹 Austria (+43)</option>
      <option value="+45">🇩🇰 Denmark (+45)</option>
      <option value="+358">🇫🇮 Finland (+358)</option>
      <option value="+420">🇨🇿 Czech Republic (+420)</option>
      <option value="+36">🇭🇺 Hungary (+36)</option>
      <option value="+972">🇮🇱 Israel (+972)</option>
      <option value="+964">🇮🇶 Iraq (+964)</option>
      <option value="+251">🇪🇹 Ethiopia (+251)</option>
      <option value="+256">🇺🇬 Uganda (+256)</option>
      <option value="+213">🇩🇿 Algeria (+213)</option>
      <option value="+505">🇳🇮 Nicaragua (+505)</option>
      <option value="+998">🇺🇿 Uzbekistan (+998)</option>
    </select>

    {/* Phone Number Input */}
    <input
      type="tel"
      placeholder="Enter phone number"
      className="p-2 border rounded-lg flex-1 focus:ring focus:ring-blue-400 focus:border-blue-500"
      value={formData.phoneNumber}
      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
    />
  </label>


  <div className='flex gap-2 items-center my-2'>
  <div
  className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-colors ${
    isEnabled ? "bg-indigo-500" : "bg-gray-200"
  }`}
  onClick={() => setIsEnabled(!isEnabled)}
>
  <div
    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${
      isEnabled ? "translate-x-6" : "translate-x-0"
    }`}
  ></div>
</div>

<p className='font-semibold text-md'>Show phone number on receipts and invoices</p>
</div>

  <p>This hides your customer support number on invoices and receipts. Your customers support number will still be shown on customer bank and credit card statements.</p>
</div>



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

export default PublicDetails;