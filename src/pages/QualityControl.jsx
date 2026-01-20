import React from 'react';
import QualityControls from '../components/QualityControls';
import { ClipboardCheck, Microscope, Shield, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const QualityControl = () => {
    return (
        <div className="pt-20 font-sans min-h-screen bg-slate-50">
            <SEO
                title="Quality Control Standards"
                description="Our rigorous 12-point inspection process ensures zero defects. ISO 9001:2015 certified manufacturing."
                canonical="https://zevoraindustry.com/quality-control"
            />

            <div className="bg-slate-900 text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <ShieldCheck className="w-16 h-16 text-green-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Uncompromising Quality</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    At Zevora, quality isn't just a department—it's the foundation of our reputation.
                </p>
            </div>

            {/* Reusing the existing component */}
            <QualityControls />

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-slate-900 rounded-2xl p-8 min-h-[400px] flex items-center justify-center text-white">
                            <div className="text-center">
                                <Microscope className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                                <p className="text-slate-400 font-medium">In-House Testing Lab</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">The Testing Laboratory</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We maintain a state-of-the-art in-house testing facility to ensure every batch of leather meets international safety and durability standards.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Abrasion Resistance (EN 388)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Blade Cut Resistance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Tear & Puncture Strength</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Chemical Permeation Testing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityControl;
