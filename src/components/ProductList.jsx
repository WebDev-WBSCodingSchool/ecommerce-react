import { useAsyncValue, useOutletContext } from 'react-router-dom';
import { Alert, ProductCard } from '@/components';

const ProductList = () => {
  const { cart, setCart } = useOutletContext();
  const products = useAsyncValue();

  if (!products.length) return <Alert message='No products were found' type='warning' />;
  return products.map(p => <ProductCard key={p.id} cart={cart} product={p} setCart={setCart} />);
};

export default ProductList;
