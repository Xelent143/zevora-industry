import React from 'react';
import { Box, Droplets, Scissors, Hand } from 'lucide-react';

const QualityControls = () => {
    const features = [
        {
            icon: Box,
            title: 'Raw Sourcing',
            description: 'We select only the top 5% of skins from sustainable farms across the globe.',
            bgColor: 'bg-[#eff6ff]',
            iconColor: 'text-[#1152d4]'
        },
        {
            icon: Droplets,
            title: 'Eco-Tanning',
            description: 'Using proprietary chrome-free processes for softer, more durable finishes.',
            bgColor: 'bg-[#fefce8]',
            iconColor: 'text-[#a67c52]'
        },
        {
            icon: Scissors,
            title: 'Precision Cut',
            description: 'Laser-guided cutting ensures perfect symmetry and minimal waste.',
            bgColor: 'bg-[#eff6ff]',
            iconColor: 'text-[#1152d4]'
        },
        {
            icon: Hand,
            title: 'Artisanal Craft',
            description: 'Hand-cut patterns and reinforced stitching by master craftsmen.',
            bgColor: 'bg-[#fefce8]',
            iconColor: 'text-[#a67c52]'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-[#1152d4] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Manufacturing Excellence</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] text-[#0f172a] mb-6">Uncompromising Quality Controls</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Our vertical integration ensures every hide is tracked from the source to the final package, maintaining a standard of excellence that is unmatched in the industry.</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <div className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center`}>
                                <feature.icon className="w-7 h-7 stroke-[1.5]" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#0f172a] mb-3">{feature.title}</h4>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualityControls;
