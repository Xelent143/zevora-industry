import React from 'react';

const TermsOfService = () => {
    return (
        <div className="pt-20 font-sans min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
                <p className="text-slate-500 mb-8">Last Updated: January 1, 2026</p>

                <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        By accessing or using the Zevora website and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. Intellectual Property</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        All content included on this site, such as text, graphics, logos, and images, is the property of Zevora Leather Industry and protected by international copyright laws.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Product Descriptions</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        We attempt to be as accurate as possible. However, we do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        In no event shall Zevora be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Governing Law</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Sialkot, Pakistan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
