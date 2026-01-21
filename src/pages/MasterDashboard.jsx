import React, { useState, useEffect } from 'react';
import { fetchProducts, updateProduct, createProduct, deleteProduct, fetchCategories } from '../services/api';
import { Loader2, Search, Check, AlertCircle, Plus, Pencil, Trash2, X } from 'lucide-react';

const MasterDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // New: Categories state
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [updatingId, setUpdatingId] = useState(null);

    // New: Modal and Form State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        regular_price: '',
        description: '',
        categories: [], // Helper to array of IDs
        images: []      // Helper to array of {src}
    });
    const [imageInput, setImageInput] = useState(''); // Helper for image URL input

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
            const [productsData, categoriesData] = await Promise.all([
                fetchProducts(1, 50),
                fetchCategories()
            ]);
            setProducts(productsData);
            setCategories(categoriesData);
        } catch (error) {
            console.error("Failed to load data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddNew = () => {
        setEditingProduct(null);
        setFormData({ name: '', regular_price: '', description: '', categories: [], images: [] });
        setImageInput('');
        setIsModalOpen(true);
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            regular_price: product.regular_price,
            description: product.description.replace(/<[^>]*>?/gm, ''), // Strip HTML for editing
            categories: product.categories.map(c => c.id),
            images: product.images || []
        });
        setImageInput(product.images?.[0]?.src || '');
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;

        setLoading(true);
        try {
            await deleteProduct(id);
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            alert("Failed to delete product");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        const dataToSave = {
            name: formData.name,
            regular_price: formData.regular_price,
            description: formData.description,
            categories: formData.categories.map(id => ({ id })),
            images: imageInput ? [{ src: imageInput }] : []
        };

        try {
            if (editingProduct) {
                const updated = await updateProduct(editingProduct.id, dataToSave);
                setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
            } else {
                const created = await createProduct(dataToSave);
                setProducts(prev => [created, ...prev]);
            }
            setIsModalOpen(false);
        } catch (error) {
            alert("Failed to save product");
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
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                    />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20 relative">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 px-6 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Product Manager</h1>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-900 bg-white"
                            />
                        </div>
                        <button
                            onClick={handleAddNew}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">New Product</span>
                        </button>
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
                                    <th className="px-6 py-4 text-center">Featured</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
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
                                            ${product.regular_price || product.price}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => handleToggleFeatured(product)}
                                                disabled={updatingId === product.id}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${product.featured ? 'bg-blue-600' : 'bg-gray-200'
                                                    }`}
                                            >
                                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${product.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(product)}
                                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
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

            {/* Product Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingProduct ? 'Edit Product' : 'Add New Product'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 p-1"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Product Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Regular Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        required
                                        value={formData.regular_price}
                                        onChange={e => setFormData({ ...formData, regular_price: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    rows="4"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-900 bg-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        value={formData.categories[0]?.id || ''}
                                        onChange={e => setFormData({ ...formData, categories: [{ id: parseInt(e.target.value) }] })}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Image URL</label>
                                    <input
                                        type="url"
                                        value={imageInput}
                                        onChange={e => setImageInput(e.target.value)}
                                        placeholder="https://..."
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                                    />
                                </div>
                            </div>

                            {imageInput && (
                                <div className="w-full h-48 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                                    <img src={imageInput} alt="Preview" className="h-full object-contain" />
                                </div>
                            )}

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                                >
                                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {editingProduct ? 'Save Changes' : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasterDashboard;
