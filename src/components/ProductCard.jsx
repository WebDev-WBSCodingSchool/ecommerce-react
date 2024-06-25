import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '@/utils/cartUtils';

const ProductCard = ({ cart, product, setCart }) => {
  const productInCart = cart.find(p => p.id === product.id);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='h-48 p-3'>
        <img src={product.image} alt='Shoes' className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title truncate'>{product.title}</h2>
        <p>{product.price} &euro; </p>
        <div className='card-actions justify-end items-center'>
          <Link
            to={`/category/${product.category}`}
            className='no-underline hover:underline text-xs'
          >
            More from {product.category}
          </Link>
          {productInCart ? (
            <>
              <button
                className='btn btn-primary'
                onClick={() => setCart(prev => removeFromCart(prev, product))}
              >
                -
              </button>
              <span> {productInCart.quantity}</span>
              <button
                className='btn btn-primary'
                onClick={() => setCart(prev => addToCart(prev, product))}
              >
                +
              </button>
            </>
          ) : (
            <button
              className='btn btn-primary'
              onClick={() => setCart(prev => addToCart(prev, product))}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
