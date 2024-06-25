const ProductCardSkeleton = () => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='skeleton h-56'></div>
      <div className='card-body'>
        <div className='skeleton w-64 h-8'></div>
        <div className='skeleton w-24 h-4'></div>
        <div className='card-actions justify-end'>
          <button className='btn skeleton w-36'></button>
          <button className='btn skeleton w-36'></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
