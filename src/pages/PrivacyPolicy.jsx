import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20 font-sans min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                <p className="text-slate-500 mb-8">Last Updated: January 1, 2026</p>

                <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        At Zevora, we collect information that you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This may include your name, email address, shipping address, and payment information.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        We use the information we collect to operate, maintain, and improve our services. This includes processing transactions, sending order confirmations, and providing customer support. We may also use your information to communicate with you about promotions or new products.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">3. Data Security</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">4. Third-Party Services</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">5. Contact Us</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at leatherindustryzevora@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
