import { useState, useEffect } from "react";
import ContinueBtn from "./ContinueBtn";

const BusinessDetails = ({ onContinue }) => {
    const [formData, setFormData] = useState({
        industry: "",
        businessWebsite: "",
        productDescription: ""
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
        if (!formData.industry.trim()) {
            newErrors.industry = "Please select an industry";
        }
        if (!formData.productDescription.trim()) {
            newErrors.productDescription = "Please provide a product description";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const isValid = formData.industry.trim() !== '' &&
            formData.productDescription.trim() !== '';
        setIsFormValid(isValid);
    }, [formData]);


    const handleSubmit = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        
        const isValid = validateForm();
        if (isValid) {
            console.log('Form is valid, submitting:', formData);
            onContinue(formData);
        } else {
            console.log('Form validation failed:', errors);
        }
    };

    return (
        <div className=" px-4 py-6 flex gap-5 flex-col min-h-screen">
            <section className="flex flex-col gap-4">
                <div className="max-w-xl mx-auto p-6 bg-white   ">
                    <h2 className="text-2xl font-bold mb-2">Tell us about your business</h2>
                    <p className="text-gray-600 mb-4">
                        This information is collected to better understand and serve your business.
                    </p>

              
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Industry</label>
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            >
                                <option value="">Please select your industry...</option>
                                <option value="retail">Retail</option>
                                <option value="technology">Technology</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="finance">Finance</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="services">Services</option>
                                <option value="software">Software</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
                            <p className="mt-5 text-gray-500">
                                Selecting your industry helps satisfy risk and compliance
                                obligations. Select the option that best matches the goods or
                                services your customers will buy.
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Business website</label>
                            <input
                                type="url"
                                name="businessWebsite"
                                value={formData.businessWebsite}
                                onChange={handleChange}
                                placeholder="www.example.com"
                                className="w-full p-2 border rounded-lg"
                            />
                            <p className="text-sm  mt-1">
                                <span className="font-semibold border-b-4 border-dotted">Learn more</span> <span className="text-gray-500">about what information must appear on your business website.</span>
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Product description</label>
                            <textarea
                                name="productDescription"
                                value={formData.productDescription}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg h-24"
                                placeholder="Provide a 1-2 sentence description..."
                            />
                            {errors.productDescription && (
                                <p className="text-red-500 text-sm">{errors.productDescription}</p>
                            )}
                            <p className="text-sm text-gray-500 mt-1">
                                Provide a 1-2 sentence description. Make sure to note when you typically charge your customers (i.e. during checkout or 3 days later). This helps us better understand your business.
                            </p>
                        </div>
                        
                       
                        <div className="mt-4">
                            <ContinueBtn
                                isDisabled={!isFormValid}
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BusinessDetails;