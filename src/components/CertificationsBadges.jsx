import React from 'react';
import { Award, Leaf, Shield, Globe } from 'lucide-react';

const CertificationsBadges = () => {
    const certifications = [
        { icon: Award, text: 'ISO 9001:2015' },
        { icon: Leaf, text: 'LWG CERTIFIED' },
        { icon: Shield, text: 'CE EN388 STANDARD' },
        { icon: Globe, text: 'SEDEX COMPLIANT' }
    ];

    return (
        <section className="py-20 border-y border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-400 group hover:text-gray-600 transition-colors">
                            <cert.icon className="w-8 h-8 stroke-[1.5]" />
                            <span className="font-bold text-sm md:text-base uppercase tracking-wider">{cert.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsBadges;
