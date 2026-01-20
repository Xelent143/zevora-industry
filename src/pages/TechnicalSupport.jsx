import React, { useState } from 'react';
import { Mail, MessageSquare, FileText, Download, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import { submitInquiry } from '../services/api';

const TechnicalSupport = () => {
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        sku: '',
        issueDescription: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // Reusing the inquiry endpoint for now, mapped to projectDetails
            await submitInquiry({
                firstName: formData.fullName.split(' ')[0] || formData.fullName,
                lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
                email: formData.email,
                projectDetails: `[Technical Support] SKU: ${formData.sku}. Issue: ${formData.issueDescription}`,
                // basic defaults for required fields if strict validation exists
                phone: 'N/A',
                quantity: 'N/A'
            });
            setStatus('success');
            setFormData({ fullName: '', email: '', sku: '', issueDescription: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const handleResourceClick = (e, resourceName) => {
        e.preventDefault();
        alert(`${resourceName} is coming soon. Please contact us for immediate access.`);
    };

    return (
        <div className="pt-20 font-sans min-h-screen bg-slate-50">
            <SEO
                title="Technical Support"
                description="Get expert help with glove sizing, care instructions, and safety standards documentation."
                canonical="https://zevoraindustry.com/technical-support"
            />
            {/* Header */}
            <div className="bg-slate-900 py-16 px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Support Center</h1>
                <p className="text-slate-400 max-w-xl mx-auto">Expert documentation, care guides, and direct access to our technical engineering team.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Sidebar / Quick Links */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Download className="w-5 h-5 text-blue-600" />
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" onClick={(e) => handleResourceClick(e, "ANSI/ISEA 105 Guide")} className="block text-sm text-slate-600 hover:text-blue-600 hover:underline">
                                        ANSI/ISEA 105 Guide (Coming Soon)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => handleResourceClick(e, "EN 388:2016 Standards")} className="block text-sm text-slate-600 hover:text-blue-600 hover:underline">
                                        EN 388:2016 Standards Explained
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => handleResourceClick(e, "Leather Care Instructions")} className="block text-sm text-slate-600 hover:text-blue-600 hover:underline">
                                        Leather Care Instructions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={(e) => handleResourceClick(e, "Glove Sizing Chart")} className="block text-sm text-slate-600 hover:text-blue-600 hover:underline">
                                        Glove Sizing Chart
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-2">Need Immediate Help?</h3>
                            <p className="text-sm text-blue-800 mb-4">Our engineers are available Mon-Fri, 9am - 5pm EST.</p>
                            <a href="tel:+923177350946" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900">
                                Call +92 317 7350946
                            </a>
                        </div>
                    </div>

                    {/* Main Content / Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto size-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <MessageSquare className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Ticket Submitted</h3>
                                    <p className="text-slate-600 mb-6">Our support team will review your issue and respond shortly.</p>
                                    <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline">Submit another ticket</button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <MessageSquare className="w-6 h-6 text-blue-600" />
                                        Submit a Ticket
                                    </h2>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Effected Product / SKU</label>
                                            <input
                                                type="text"
                                                name="sku"
                                                value={formData.sku}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                placeholder="e.g. Impact Pro 500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Issue Description</label>
                                            <textarea
                                                name="issueDescription"
                                                value={formData.issueDescription}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                placeholder="Describe the technical issue or question..."
                                            ></textarea>
                                        </div>

                                        {status === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                                                Failed to submit ticket. Please try again.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-70"
                                        >
                                            {status === 'submitting' ? 'Submitting...' : 'Submit Ticket'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSupport;
