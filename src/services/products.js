import { getRequest } from './api';

export const fetchProducts = async () => {
  try {
    const response = await getRequest('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const groupProductsByCategory = (products) => {
  if (!Array.isArray(products)) return [];
  
  const categories = {};
  
  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push({
      name: product.name,
      href: `/products/${product.slug || product.id}`
    });
  });
  
  return Object.entries(categories).map(([category, items]) => ({
    category,
    items
  }));
};
