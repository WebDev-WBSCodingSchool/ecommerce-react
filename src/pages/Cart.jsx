import { Link, useOutletContext } from 'react-router-dom';
import { addToCart, removeFromCart } from '@/utils/cartUtils';

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Line total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td width='40%'>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-36 w-36'>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{item.title} </div>
                    <div className='text-sm opacity-50'> Unit price: {item.price} &euro;</div>
                  </div>
                </div>
              </td>
              <td width='40%'>
                {item.description}
                <br />
                <Link to={`/category/${item.category}`} className='badge badge-ghost badge-sm'>
                  {item.category}
                </Link>
              </td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => setCart(prev => removeFromCart(prev, item))}
                >
                  -
                </button>
                <span> {item.quantity}</span>
                <button
                  className='btn btn-primary'
                  onClick={() => setCart(prev => addToCart(prev, item))}
                >
                  +
                </button>
              </td>
              <th>
                <button className='btn btn-ghost btn-xs'>
                  {(item.quantity * item.price).toFixed(2)} &euro;
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>
              Total: {cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}{' '}
              &euro;
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
