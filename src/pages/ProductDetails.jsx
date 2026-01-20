import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../services/api';
import { Loader2, ArrowLeft, Heart, ShoppingBag, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await fetchProduct(id);
                setProduct(data);
                // Reset selected image on product change
                setSelectedImage(0);
            } catch (err) {
                setError('Failed to load product details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, [id]);

    const handleAddToQuote = () => {
        if (product) {
            navigate('/wholesale-inquiry', { state: { productOfInterest: product.name } });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500 font-bold">{error || 'Product not found'}</p>
                <Link to="/catalog" className="text-blue-600 hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Catalog
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 font-sans min-h-screen bg-white">
            <SEO
                title={product.name}
                description={product.short_description?.replace(/<[^>]*>/g, '') || `High-quality ${product.name} by Zevora Industry.`}
                image={product.images?.[0]?.src}
                canonical={`https://zevoraindustry.com/product/${id}`}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Link to="/catalog" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Catalog
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
                            {product.images?.[selectedImage] ? (
                                <img
                                    src={product.images[selectedImage].src}
                                    alt={product.images[selectedImage].alt || product.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
                            )}
                        </div>
                        {/* Thumbnails */}
                        {product.images && product.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {product.images.map((img, index) => (
                                    <button
                                        key={img.id || index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-transparent hover:border-gray-200'
                                            }`}
                                    >
                                        <img src={img.src} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="mb-8">
                            {product.categories?.[0] && (
                                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2 block">
                                    {product.categories[0].name}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 text-2xl">
                                <span className="font-bold text-slate-900">
                                    ${product.price}
                                </span>
                                {product.regular_price && product.regular_price !== product.price && (
                                    <span className="text-gray-400 line-through text-lg">
                                        ${product.regular_price}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Short Description */}
                        <div
                            className="prose prose-lg text-gray-600 mb-8"
                            dangerouslySetInnerHTML={{ __html: product.short_description }}
                        />

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={handleAddToQuote}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                            >
                                <ShoppingBag className="w-5 h-5" /> Add to Quote
                            </button>
                            <a
                                href={`https://wa.me/923177350946?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" /> WhatsApp
                            </a>
                            <button className="px-5 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-900 transition-colors" aria-label="Add to wishlist">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Detailed Description */}
                        <div className="border-t border-gray-100 pt-8 mt-8">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Description</h3>
                            <div
                                className="prose text-gray-600 max-w-none"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
