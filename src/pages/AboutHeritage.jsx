import React from 'react';
import { History, Anchor, Award, Users } from 'lucide-react';
import SEO from '../components/SEO';

const AboutHeritage = () => {
    return (
        <div className="pt-20 font-sans min-h-screen">
            <SEO
                title="Our Heritage & Craft"
                description="Since 1984, Zevora has been synonymous with quality. Discover our journey from a small workshop to a global leader."
                canonical="https://zevoraindustry.com/about-heritage"
            />

            {/* Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
                {/* Use a solid color or pattern if specific image not available, or keep existing structure if valid */}
                <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
                        The Legacy of <br /><span className="text-[#a67c52]">Zevora</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto italic">
                        "Craftsmanship is not just a skill, it's a commitment to excellence."
                    </p>
                </div>
            </div>
            {/* Our Story */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Craftsmanship Passed Down Generations</h2>
                        <div className="w-20 h-1 bg-blue-600"></div>
                        <p className="text-slate-600 leading-relaxed">
                            Founded in the heart of the historic Leather District, Stitch began as a small family workshop dedicated to a single principle: perfection is not a goal, it's a standard.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            What started with three master cuts and a single sewing machine has grown into a global manufacturing powerhouse. Yet, despite our scale, we have never lost the artisan's touch. Every glove that leaves our facility carries the heritage of traditional methods blended with modern precision.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-slate-200">
                        {/* Placeholder for an image - using text/icon heavily instead */}
                        <div className="text-center">
                            <Anchor className="w-20 h-20 text-blue-200 mx-auto mb-4" />
                            <p className="text-slate-400 font-medium">Archival Workshop Photo (1984)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition hover:-translate-y-1 hover:shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <History className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Time-Honored Methods</h3>
                            <p className="text-slate-600">We still use the original 19th-century table cutting techniques for our premium leather lines to ensure maximum stretch and fit.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition hover:-translate-y-1 hover:shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromised Quality</h3>
                            <p className="text-slate-600">Our heritage is built on durability. We don't just manufacture gloves; we engineer reliability for safety-critical components.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 transition hover:-translate-y-1 hover:shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Family Owned</h3>
                            <p className="text-slate-600">Still independent, still family-run. This allows us to make decisions based on product integrity rather than quarterly profits.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHeritage;
