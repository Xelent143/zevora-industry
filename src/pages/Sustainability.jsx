import React from 'react';
import { Leaf, Droplets, Sun, Recycle, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Sustainability = () => {
    return (
        <div className="pt-20 font-sans">
            <SEO
                title="Sustainability Initiatives"
                description="Committed to ethical sourcing and eco-friendly manufacturing. LWG Gold Rated tannery partners."
                canonical="https://zevoraindustry.com/sustainability"
            />
            {/* Hero */}
            <section className="bg-green-900 py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-green-800/20 rounded-l-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-bold tracking-widest uppercase rounded w-fit mb-6">Eco-Conscious Manufacturing</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Planet First. <br />Business Second.</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
                        We believe that the highest quality leather shouldn't cost the earth. That's why we've pioneered a closed-loop tanning process that sets the industry standard.
                    </p>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                        <Droplets className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-black text-slate-900 mb-1">95%</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Water Recycled</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                        <Leaf className="w-10 h-10 text-green-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-black text-slate-900 mb-1">0%</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Toxic Dyes</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                        <Sun className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-black text-slate-900 mb-1">60%</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Solar Powered</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                        <Recycle className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
                        <h3 className="text-3xl font-black text-slate-900 mb-1">100%</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Biodegradable Leather</p>
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className="py-20 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Commitments</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">LWG Gold Rated Partners</h3>
                                <p className="text-slate-600 leading-relaxed">We exclusively source from tanneries audited by the Leather Working Group (LWG) and awarded Gold status for their environmental compliance and waste management practices.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Chrome-Free Tanning</h3>
                                <p className="text-slate-600 leading-relaxed">Our 'Eco-Soft' line utilizes vegetable tannins and biodegradable syntodans, eliminating heavy metals from the process entirely.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Waste-to-Energy</h3>
                                <p className="text-slate-600 leading-relaxed">Leather offcuts are no longer waste. We have partnered with local facilities to convert leather scraps into biofuel, powering our heating systems during winter months.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
