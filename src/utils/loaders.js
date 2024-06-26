import { defer } from 'react-router-dom';

export const getHomePageData = async () => {
  try {
    const categoriesPromise = await fetch('https://fakestoreapi.com/products/categories');
    const productsPromise = await fetch('https://fakestoreapi.com/products');
    if (!categoriesPromise.ok) throw new Error('Failed to fetch products');
    if (!productsPromise.ok) throw new Error('Failed to fetch categories');
    const categories = categoriesPromise.json();
    const products = productsPromise.json();
    return defer({ categories, products });
  } catch (error) {
    if (error.message === 'Failed to fetch') {
      throw new Error('Something went wrong. Please try again later.');
    }
    throw error;
  }
};
