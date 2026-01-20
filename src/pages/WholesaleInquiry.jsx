import React, { useState, useEffect } from 'react';
import { submitInquiry } from '../services/api';
import { Truck, PackageCheck, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';

const WholesaleInquiry = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        quantity: '500 - 1,000 pairs',
        projectDetails: ''
    });

    // Check for product passed from Product Details page
    useEffect(() => {
        if (location.state?.productOfInterest) {
            setFormData(prev => ({
                ...prev,
                projectDetails: `I am interested in a quote for: ${location.state.productOfInterest}. `
            }));
        }
    }, [location.state]);

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitInquiry(formData);
            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                companyName: '',
                quantity: '500 - 1,000 pairs',
                projectDetails: ''
            });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-20 font-sans min-h-screen">
            <SEO
                title="Wholesale & Bulk Manufacturing"
                description="Partner with Zevora for high-volume glove production. Global logistics, low MOQs, and private labeling services."
                canonical="https://zevora.com/wholesale-inquiry"
            />
            <div className="bg-slate-900 py-20 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Wholesale & Bulk Manufacturing</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Partner with Zevora for high-volume, precision-engineered glove production. We supply major distributors and private labels worldwide.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Benefits Column */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Partner With Us?</h2>

                        <div className="space-y-10">
                            <div className="flex gap-4">
                                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Global Logistics</h3>
                                    <p className="text-slate-600">Door-to-door delivery handling for shipments to over 45 countries, including customs clearance documentation.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <PackageCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Low MOQs & Scalability</h3>
                                    <p className="text-slate-600">Start with as few as 500 units per SKU, with the capacity to scale to 50,000 units monthly as your demand grows.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Private Labeling</h3>
                                    <p className="text-slate-600">Full OEM/ODM services. We can add your logo, custom packaging, and specific design modifications to any of our catalog items.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in fade-in duration-500">
                                <div className="size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <PackageCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
                                <p className="text-slate-600 mb-6">Thank you for reaching out. Our team will get back to you with a quote within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-blue-600 font-semibold hover:text-blue-800"
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="Jane"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="jane@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Acme Industries"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Estimated Quantity</label>
                                        <select
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                        >
                                            <option>500 - 1,000 pairs</option>
                                            <option>1,000 - 5,000 pairs</option>
                                            <option>5,000 - 10,000 pairs</option>
                                            <option>10,000+ pairs</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Project Details</label>
                                        <textarea
                                            name="projectDetails"
                                            rows="4"
                                            value={formData.projectDetails}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Tell us about your needs..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                                            Something went wrong. Please try again or contact us directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                                    </button>

                                    <p className="text-xs text-center text-slate-500 mt-4">By submitting this form, you agree to our Privacy Policy.</p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WholesaleInquiry;
