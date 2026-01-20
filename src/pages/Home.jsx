import { ArrowRight, MoveRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import CertificationsBadges from '../components/CertificationsBadges';
import QualityControls from '../components/QualityControls';
import SEO from '../components/SEO';
import FeaturedCarousel from '../components/FeaturedCarousel';

const Home = () => {
    return (
        <div className="font-sans">
            <SEO
                title="Zevora - Premium Glove Manufacturer"
                description="Zevora Industry - The global standard for industrial and luxury glove manufacturing. Serving brands since 1984."
                canonical="https://zevoraindustry.com/"
            />

            {/* Hero Section */}
            <div className="relative h-screen">
                {/* Background Image - Updated to local user provided image */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/banner.jpg")' }}></div>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                        ZEVORA <br /> INDUSTRY
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-10 animate-fade-in-up delay-100">
                        Defining the standards of leather glove manufacturing. <br /> Quality, durability, and craftsmanship in every stitch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                        <Link to="/wholesale-inquiry" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                            Request Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/catalog" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                            View Catalog
                        </Link>
                    </div>
                </div>
            </div>

            {/* Heritage Section */}
            <section className="pt-24 pb-12 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[#1152d4] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Our Heritage</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 leading-[1.15]">
                                A Legacy of Hand-Crafted<br />Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
                                Rooted in traditional tanning techniques, Zevora has grown from a boutique workshop into a global leader in high-performance hand protection. Every pair of gloves tells a story of patience, precision, and the finest natural materials.
                            </p>

                            <div className="flex gap-12 mb-10">
                                <div>
                                    <p className="text-4xl font-bold text-[#a67c52] mb-1">40+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-[#a67c52] mb-1">12M</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500">Pairs Produced</p>
                                </div>
                            </div>

                            <Link to="/about-heritage" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                                Learn about our journey
                                <ArrowRight className="w-5 h-5 transition-all" />
                            </Link>
                        </div>
                        {/* Split Bento Grid Layout */}
                        <div className="grid grid-cols-2 gap-4 h-[600px]">
                            {/* Left Column: Large Vertical Image */}
                            <div className="h-full w-full rounded-[2.5rem] bg-cover bg-center shadow-2xl relative overflow-hidden group"
                                style={{ backgroundImage: 'url("/images/heritage/craftsman.png")' }}>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
                            </div>

                            {/* Right Column: Top Card + Bottom Pair */}
                            <div className="flex flex-col gap-4 h-full">
                                {/* Top Right: Secondary Vertical/Square */}
                                <div className="flex-grow rounded-[2.5rem] bg-cover bg-center shadow-xl relative overflow-hidden group"
                                    style={{ backgroundImage: 'url("/images/heritage/leather_tools.png")' }}>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]"></div>
                                </div>

                                {/* Bottom Right: Dual Pills */}
                                <div className="grid grid-cols-2 gap-4 h-[180px]">
                                    {/* Pill 1 */}
                                    <div className="rounded-[2rem] bg-cover bg-center shadow-lg relative overflow-hidden group"
                                        style={{ backgroundImage: 'url("/images/heritage/leather_texture.png")' }}>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
                                    </div>
                                    {/* Pill 2 */}
                                    <div className="rounded-[2rem] bg-cover bg-center shadow-lg relative overflow-hidden group"
                                        style={{ backgroundImage: 'url("/images/heritage/sewing_detail.png")' }}>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Products Carousel */}
            < FeaturedCarousel />

            {/* Product Categories */}
            < section className="pt-16 pb-24 bg-gray-50/80" >
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-[#1152d4] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Product Categories</h2>
                            <h3 className="text-4xl md:text-5xl font-bold font-display leading-[1.1] text-[#0f172a]">Engineered for<br />Performance,<br />Tailored for Style</h3>
                        </div>
                        <Link to="/catalog" className="bg-[#1a1c21] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-black transition-all h-fit mb-1">View Full Catalog</Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Category Card 1 */}
                        <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-charcoal shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/categories/work_gloves.png")', backgroundPosition: 'center' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <p className="text-[#a67c52] font-bold text-[10px] uppercase tracking-[0.1em] mb-2">Industrial</p>
                                <h4 className="text-white text-2xl font-bold mb-4">Safety & Protection</h4>
                                <Link className="inline-flex items-center gap-1 text-white text-[10px] font-bold border-b border-white/20 pb-0.5 hover:border-white transition-all" to="/catalog?category=Industrial">
                                    Explore Safety <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                        {/* Category Card 2 */}
                        <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-charcoal shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/categories/fashion_gloves.png")', backgroundPosition: 'center' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <p className="text-[#a67c52] font-bold text-[10px] uppercase tracking-[0.1em] mb-2">Lifestyle</p>
                                <h4 className="text-white text-2xl font-bold mb-4">Fashion & Luxury</h4>
                                <Link className="inline-flex items-center gap-1 text-white text-[10px] font-bold border-b border-white/20 pb-0.5 hover:border-white transition-all" to="/catalog?category=Fashion">
                                    Explore Fashion <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                        {/* Category Card 3 */}
                        <div className="group relative h-[420px] overflow-hidden rounded-2xl bg-charcoal shadow-lg">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/categories/sports_gloves.png")', backgroundPosition: 'center' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-0 p-8 w-full">
                                <p className="text-[#a67c52] font-bold text-[10px] uppercase tracking-[0.1em] mb-2">Active</p>
                                <h4 className="text-white text-2xl font-bold mb-4">Sports Performance</h4>
                                <Link className="inline-flex items-center gap-1 text-white text-[10px] font-bold border-b border-white/20 pb-0.5 hover:border-white transition-all" to="/catalog?category=Sports">
                                    Explore Sports <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Quality Assurance Strip */}
            < CertificationsBadges />

            {/* Features / Process */}
            < QualityControls />

            {/* CTA Section */}
            < CTASection />
        </div >
    );
};

export default Home;
