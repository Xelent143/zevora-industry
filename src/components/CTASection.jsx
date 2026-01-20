const CTASection = () => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
                    {/* Decorative Circle */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gray-700/30 hidden md:block"></div>

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                            Partner with the Leaders in Leather Craft.
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Looking for a custom manufacturing partner or high-volume wholesale? Get in touch with our team for a tailored proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                Request Technical Quote
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
