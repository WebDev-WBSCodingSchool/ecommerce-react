import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='h-48 p-3'>
        <img src={product.image} alt='Shoes' className='object-contain h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title truncate'>{product.title}</h2>
        <p>{product.price} &euro; </p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Add to cart</button>
          <Link to={`/category/${product.category}`} className='btn btn-outline btn-primary'>
            More from {product.category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
