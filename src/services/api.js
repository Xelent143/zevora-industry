import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_WC_URL + '/wp-json/wc/v3',
    params: {
        consumer_key: import.meta.env.VITE_WC_CONSUMER_KEY,
        consumer_secret: import.meta.env.VITE_WC_CONSUMER_SECRET
    }
});

export const fetchProducts = async (page = 1, perPage = 10, category = null, featured = null) => {
    try {
        const params = {
            page,
            per_page: perPage,
            status: 'publish',
        };

        if (category && category !== 'All') {
            params.category = category;
        }

        if (featured !== null) {
            params.featured = featured;
        }

        const response = await api.get('/products', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const updateProduct = async (id, data) => {
    try {
        const response = await api.put(`/products/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating product ${id}:`, error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await api.get('/products/categories', {
            params: {
                per_page: 20,
                hide_empty: true
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchProduct = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
    }
};

export const submitInquiry = async (data) => {
    try {
        // We use a clean axios call here because the base URL is different from the WooCommerce API
        // and we don't need the consumer key/secret for this public endpoint
        const baseURL = import.meta.env.VITE_WC_URL;
        const response = await axios.post(`${baseURL}/wp-json/elite-leather/v1/inquiry`, data);
        return response.data;
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        throw error;
    }
};

export default api;
