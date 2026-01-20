import CTASection from '../components/CTASection';
import { Globe, Search, Droplets, Scissors, Ruler, ShieldCheck, Hammer, Leaf, Factory, Users, Recycle } from 'lucide-react';
import SEO from '../components/SEO';

const Manufacturing = () => {
    return (
        <div className="pt-20 font-sans min-h-screen">
            <SEO
                title="Manufacturing Excellence"
                description="Our 12-point quality check and ethical sourcing ensure the world's finest gloves. ISO 14001, LWG Gold Rated."
                canonical="https://zevoraindustry.com/manufacturing"
            />
            <main className="flex flex-col items-center">
                <div className="w-full max-w-[1200px] px-4 md:px-10">
                    {/* Hero Section */}
                    <div className="text-center py-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Manufacturing</h1>
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform hover:scale-105">
                                View Capabilities
                            </button>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white border border-gray-200 text-gray-900 text-base font-bold hover:bg-gray-50">
                                Watch Our Process
                            </button>
                        </div>
                    </div>

                    {/* Section Header: Sourcing */}
                    <div className="flex flex-col items-center text-center pt-12 pb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0d121b] dark:text-white mb-4">Our Ethical Sourcing Journey</h2>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>

                    {/* Timeline Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
                        <div className="grid grid-cols-[48px_1fr] gap-x-4">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div className="w-[2px] bg-primary/20 grow min-h-[60px]"></div>
                            </div>
                            <div className="flex flex-col pb-8">
                                <h4 className="text-lg font-bold dark:text-white">Responsible Sourcing</h4>
                                <p className="text-[#4c669a] dark:text-gray-400 mt-1">We partner exclusively with LWG Gold-Rated tanneries worldwide ensuring 100% ethical treatment of raw materials.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                    <Search className="w-5 h-5" />
                                </div>
                                <div className="w-[2px] bg-primary/20 grow min-h-[60px]"></div>
                            </div>
                            <div className="flex flex-col pb-8">
                                <h4 className="text-lg font-bold dark:text-white">Raw Material Inspection</h4>
                                <p className="text-[#4c669a] dark:text-gray-400 mt-1">Every hide undergoes a 12-point quality check including thickness consistency and grain integrity.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                    <Droplets className="w-5 h-5" />
                                </div>
                                <div className="w-[2px] bg-primary/20 grow min-h-[60px]"></div>
                            </div>
                            <div className="flex flex-col pb-8">
                                <h4 className="text-lg font-bold dark:text-white">Closed-Loop Tanning</h4>
                                <p className="text-[#4c669a] dark:text-gray-400 mt-1">Our tanning process recycles 95% of water used and employs non-toxic, eco-friendly dyes.</p>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                    <Scissors className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold dark:text-white">Precision Cutting</h4>
                                <p className="text-[#4c669a] dark:text-gray-400 mt-1">CAD-optimized layouts reduce material waste by 30% compared to traditional hand-cutting methods.</p>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                alt="Close up of leather material inspection"
                                className="w-full h-full object-cover"
                                src="/images/manufacturing/quality_check.jpg"
                            />
                        </div>
                    </section>

                    {/* Stitching Mastery Section */}
                    <div className="pt-20 pb-12">
                        <div className="bg-white dark:bg-background-dark/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold dark:text-white mb-4">Mastery in Every Stitch</h3>
                                <p className="text-[#4c669a] max-w-2xl mx-auto">Combining traditional hand-finishing with automated high-tension stitching for maximum durability.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="group flex flex-col items-center p-6 bg-background-light dark:bg-gray-800 rounded-xl hover:bg-primary/5 transition-all">
                                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                                        <Ruler className="w-10 h-10" />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wide">Piqué Stitching</span>
                                </div>
                                <div className="group flex flex-col items-center p-6 bg-background-light dark:bg-gray-800 rounded-xl hover:bg-primary/5 transition-all">
                                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-10 h-10" />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wide">Brosser Edge</span>
                                </div>
                                <div className="group flex flex-col items-center p-6 bg-background-light dark:bg-gray-800 rounded-xl hover:bg-primary/5 transition-all">
                                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                                        <Hammer className="w-10 h-10" />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wide">Reinforced Palm</span>
                                </div>
                                <div className="group flex flex-col items-center p-6 bg-background-light dark:bg-gray-800 rounded-xl hover:bg-primary/5 transition-all">
                                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                                        <Users className="w-10 h-10" />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wide">Hand Finished</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sustainability Dashboard */}
                    <section className="py-20">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold">Committed to a Greener Future</h3>
                                <p className="text-lg text-[#4c669a] leading-relaxed">Our manufacturing excellence is defined not just by what we make, but how we make it. We are committed to achieving net-zero emissions by 2030 across all production facilities.</p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                                        <p className="text-2xl font-black text-primary">95%</p>
                                        <p className="text-sm font-medium opacity-70">Water Recycled</p>
                                    </div>
                                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                                        <p className="text-2xl font-black text-primary">0%</p>
                                        <p className="text-sm font-medium opacity-70">Landfill Waste</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
                                    <Leaf className="w-12 h-12 text-green-500 mb-3" />
                                    <h5 className="font-bold text-charcoal dark:text-white">LWG Gold</h5>
                                    <p className="text-xs text-gray-500">Certified Sustainability</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
                                    <Factory className="w-12 h-12 text-blue-500 mb-3" />
                                    <h5 className="font-bold text-charcoal dark:text-white">ISO 14001</h5>
                                    <p className="text-xs text-gray-500">Environmental Mgt</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
                                    <Users className="w-12 h-12 text-amber-500 mb-3" />
                                    <h5 className="font-bold text-charcoal dark:text-white">Fair Trade</h5>
                                    <p className="text-xs text-gray-500">Ethical Labor</p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
                                    <Recycle className="w-12 h-12 text-purple-500 mb-3" />
                                    <h5 className="font-bold text-charcoal dark:text-white">Plastic Free</h5>
                                    <p className="text-xs text-gray-500">100% Recyclable</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <CTASection />
                </div>
            </main>
        </div>
    );
};

export default Manufacturing;
