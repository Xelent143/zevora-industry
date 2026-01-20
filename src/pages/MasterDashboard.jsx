import React, { useState, useEffect } from 'react';
import { fetchProducts, updateProduct } from '../services/api';
import { Loader2, Search, Check, AlertCircle } from 'lucide-react';

const MasterDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [updatingId, setUpdatingId] = useState(null);

    // Simple hardcoded PIN for basic protection
    const AUTH_PIN = "1234";

    const handleLogin = (e) => {
        e.preventDefault();
        if (pin === AUTH_PIN) {
            setIsAuthenticated(true);
            loadProducts();
        } else {
            alert("Invalid PIN");
        }
    };

    const loadProducts = async () => {
        setLoading(true);
        try {
            // Fetch a larger list to manage
            const data = await fetchProducts(1, 50);
            setProducts(data);
        } catch (error) {
            console.error("Failed to load products", error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleFeatured = async (product) => {
        if (updatingId) return; // Prevent multiple clicks

        setUpdatingId(product.id);
        const newStatus = !product.featured;

        try {
            // Optimistic UI update
            setProducts(prev => prev.map(p =>
                p.id === product.id ? { ...p, featured: newStatus } : p
            ));

            // API Call
            await updateProduct(product.id, { featured: newStatus });
        } catch (error) {
            console.error("Failed to update product", error);
            // Revert on error
            setProducts(prev => prev.map(p =>
                p.id === product.id ? { ...p, featured: !newStatus } : p
            ));
            alert("Failed to update status. Check console.");
        } finally {
            setUpdatingId(null);
        }
    };

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Master Access</h2>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="Enter PIN"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 px-6 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Featured Products Manager</h1>

                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4 text-center">Price</th>
                                    <th className="px-6 py-4 text-center">Featured Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredProducts.map(product => (
                                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                    {product.images?.[0] ? (
                                                        <img src={product.images[0].src} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No Img</div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 line-clamp-1">{product.name}</p>
                                                    <p className="text-xs text-gray-500">ID: {product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center font-medium text-gray-600">
                                            ${product.price}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => handleToggleFeatured(product)}
                                                disabled={updatingId === product.id}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${product.featured ? 'bg-blue-600' : 'bg-gray-200'
                                                    }`}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${product.featured ? 'translate-x-6' : 'translate-x-1'
                                                        }`}
                                                />
                                                {updatingId === product.id && (
                                                    <Loader2 className="absolute -right-6 w-4 h-4 animate-spin text-blue-600" />
                                                )}
                                            </button>
                                            <span className="ml-3 text-sm font-medium text-gray-600 w-16 inline-block text-left">
                                                {product.featured ? 'Active' : 'Hidden'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredProducts.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                                No products found matching your search.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MasterDashboard;
