import { useState, useEffect } from 'react';
import { Heart, Loader2, Menu, X } from 'lucide-react';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../services/api';

const Catalog = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [error, setError] = useState(null);
    const [likedProducts, setLikedProducts] = useState({});

    // Filter State
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Update selectedCategory if URL param changes
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [searchParams]);

    // Initial Load
    useEffect(() => {
        const loadInitialData = async () => {
            setLoading(true);
            try {
                // If we have an initial category from URL, use it
                const [catsData, prodsData] = await Promise.all([
                    fetchCategories(),
                    fetchProducts(1, 12, selectedCategory === 'All' ? null : selectedCategory)
                ]);
                setCategories(catsData);
                setProducts(prodsData);
            } catch (err) {
                console.error("Failed to fetch data", err);
                setError("Failed to load shop data.");
            } finally {
                setLoading(false);
            }
        };
        loadInitialData();
    }, []); // Run once on mount

    // Fetch products when category changes (but skip initial execution to avoid double fetch if possible, 
    // though the dependency array logic here is a bit tricky with the initial load above. 
    // Simplified: remove the fetch from initial load IF we trust this one to run? 
    // Actually, let's just make this one responsible for updates.
    useEffect(() => {
        if (loading) return; // Skip if initial load is still happening

        const loadCategoryProducts = async () => {
            setLoadingProducts(true);
            try {
                // Pass category ID if not 'All'
                const catArg = selectedCategory === 'All' ? null : selectedCategory;
                const prodsData = await fetchProducts(1, 12, catArg);
                setProducts(prodsData);
            } catch (err) {
                console.error("Failed to fetch products", err);
            } finally {
                setLoadingProducts(false);
            }
        };

        loadCategoryProducts();
    }, [selectedCategory]);

    const toggleLike = (id) => {
        setLikedProducts(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    if (loading) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-sans">
            <SEO
                title="Shop Premium Leather"
                description="Explore our new season collection. Filter by category to find your perfect fit."
                canonical="https://zevoraindustry.com/catalog"
            />

            <main className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8">

                {/* Hero Section */}
                <section className="relative w-full rounded-2xl overflow-hidden bg-black aspect-[21/9] md:aspect-[32/9] mb-8">
                    <div className="absolute inset-0 bg-[url('/images/hero/banner.jpg')] bg-cover bg-center opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-2xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            Shop Collection
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base">
                            Premium leather goods, handcrafted for durability.
                        </p>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold shadow-sm"
                        >
                            <Menu className="w-4 h-4" /> Filters
                        </button>
                    </div>

                    {/* Sidebar Filters */}
                    <aside className={`fixed inset-0 z-40 bg-white p-6 transition-transform duration-300 lg:static lg:bg-transparent lg:p-0 lg:w-64 lg:block overflow-y-auto ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                        <div className="flex items-center justify-between mb-6 lg:hidden">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <button onClick={() => setMobileFiltersOpen(false)}><X className="w-6 h-6" /></button>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase text-gray-900 tracking-wider mb-4">Categories</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        onClick={() => { setSelectedCategory('All'); setMobileFiltersOpen(false); }}
                                        className={`text-sm hover:text-[#dc2626] transition-colors ${selectedCategory === 'All' ? 'font-bold text-[#dc2626]' : 'text-gray-600'}`}
                                    >
                                        All Products
                                    </button>
                                </li>
                                {categories.map(cat => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => { setSelectedCategory(cat.id); setMobileFiltersOpen(false); }}
                                            className={`text-sm hover:text-[#dc2626] text-left transition-colors ${selectedCategory === cat.id ? 'font-bold text-[#dc2626]' : 'text-gray-600'}`}
                                        >
                                            {cat.name} <span className="text-gray-400 text-xs">({cat.count})</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Mobile Overlay */}
                    {mobileFiltersOpen && (
                        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileFiltersOpen(false)}></div>
                    )}

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">
                                {selectedCategory === 'All'
                                    ? 'All Products'
                                    : categories.find(c => c.id === selectedCategory)?.name || 'Products'
                                }
                            </h2>
                            <span className="text-sm text-gray-500">{products.length} Results</span>
                        </div>

                        {loadingProducts ? (
                            <div className="flex justify-center py-20">
                                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                            </div>
                        ) : products.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
                                <p className="text-gray-500">No products found in this category.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                                        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                                            <div className="absolute top-3 right-3 z-10">
                                                <button
                                                    onClick={(e) => { e.preventDefault(); toggleLike(product.id); }}
                                                    className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all"
                                                >
                                                    <Heart className={`w-4 h-4 ${likedProducts[product.id] ? 'fill-red-500 text-red-500' : 'text-gray-900'}`} />
                                                </button>
                                            </div>
                                            <Link to={`/product/${product.id}`} className="block h-full">
                                                {product.images && product.images.length > 0 ? (
                                                    <img
                                                        src={product.images[0].src}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                                                        No Image
                                                    </div>
                                                )}
                                                {product.on_sale && (
                                                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                                                        SALE
                                                    </div>
                                                )}
                                            </Link>
                                        </div>
                                        <div className="p-4 flex flex-col gap-1 flex-1">
                                            <div className="flex items-center gap-1 mb-1">
                                                <span className="text-amber-400 text-xs">★</span>
                                                <span className="text-xs font-bold text-gray-500">{product.average_rating} ({product.rating_count})</span>
                                            </div>
                                            <Link to={`/product/${product.id}`}>
                                                <h3
                                                    className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 hover:text-[#dc2626] transition-colors"
                                                    dangerouslySetInnerHTML={{ __html: product.name }}
                                                />
                                            </Link>
                                            <div className="mt-auto pt-2">
                                                {product.on_sale && product.sale_price ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-gray-400 line-through">${product.regular_price}</span>
                                                        <span className="text-sm font-bold text-[#a67c52]">${product.sale_price}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-sm font-bold text-[#a67c52]">${product.regular_price || product.price}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Simple Pagination Placeholder */}
                        {products.length > 0 && (
                            <div className="flex justify-center mt-12">
                                <button className="px-6 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <CTASection />
        </div>
    );
};

export default Catalog;
