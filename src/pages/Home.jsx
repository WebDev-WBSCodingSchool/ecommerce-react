import { useEffect, useState } from 'react';
import { Alert, CategoryLinks, ProductCard, ProductCardSkeleton } from '@/components';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderProductList = () => {
    if (loading)
      return Array.from({ length: 20 }).map((_, i) => <ProductCardSkeleton key={i} product={{}} />);
    if (!products.length) return <Alert message='No products were found' type='warning' />;
    return products.map(p => <ProductCard key={p.id} product={p} />);
  };

  return (
    <div className='py-5'>
      <div className='flex flex-nowrap gap-4 overflow-x-scroll'>
        <CategoryLinks />
      </div>
      <div className='grid grid-cols-4 gap-5'>{renderProductList()}</div>
    </div>
  );
};

export default Home;
