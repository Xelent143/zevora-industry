import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader2, ShoppingBag } from 'lucide-react';
import { fetchProducts } from '../services/api';

const MOCK_PRODUCTS = [
    { id: 101, name: 'Premium Driver Gloves', price: '25.00', images: [{ src: '/images/categories/work_gloves.png' }], categories: [{ name: 'Industrial' }] },
    { id: 102, name: 'Luxury Driving Gloves', price: '45.00', images: [{ src: '/images/categories/fashion_gloves.png' }], categories: [{ name: 'Fashion' }] },
    { id: 103, name: 'Tactical Grip Pro', price: '30.00', images: [{ src: '/images/categories/sports_gloves.png' }], categories: [{ name: 'Tactical' }] },
    { id: 104, name: 'Winter Thermal Guards', price: '35.00', images: [{ src: '/images/categories/work_gloves.png' }], categories: [{ name: 'Industrial' }] },
];

const FeaturedCarousel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const loadFeatured = async () => {
            try {
                // Fetch first 8 products as featured
                const data = await fetchProducts(1, 8, null, true); // page, perPage, category, FEATURED=true
                if (data && data.length > 0) {
                    setProducts(data);
                } else {
                    // Fallback mock data if API returns empty
                    console.warn("API returned no products, using fallback data");
                    setProducts(MOCK_PRODUCTS);
                }
            } catch (err) {
                console.error("Failed to load featured products, using fallback", err);
                setProducts(MOCK_PRODUCTS);
            } finally {
                setLoading(false);
            }
        };
        loadFeatured();

        // Responsive visible cards handler
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(4);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + visibleCards >= products.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, products.length - visibleCards) : prev - 1
        );
    };

    if (loading) {
        return (
            <div className="py-20 flex justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        );
    }

    if (products.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-[#1152d4] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Selected For You</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Featured Collection</h3>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-[#1a1c21] flex items-center justify-center hover:bg-black transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out gap-6"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                        }}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-shrink-0"
                                style={{ width: `calc(${100 / visibleCards}% - ${(24 * (visibleCards - 1)) / visibleCards}px)` }}
                            >
                                <Link to={`/product/${product.id}`} className="group block h-full">
                                    <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                                        {product.images?.[0] ? (
                                            <img
                                                src={product.images[0].src}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                                        )}
                                        {product.on_sale && (
                                            <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                                Sale
                                            </span>
                                        )}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                View Details
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">
                                            {product.categories?.[0]?.name || 'Apparel'}
                                        </p>
                                        <h4 className="font-bold text-lg text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#a67c52] font-bold">
                                                ${product.price || product.regular_price}
                                            </span>
                                            {product.on_sale && (
                                                <span className="text-gray-400 text-sm line-through">
                                                    ${product.regular_price}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCarousel;
