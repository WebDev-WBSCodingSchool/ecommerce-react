const ProductListSkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className='card bg-base-100 shadow-xl'>
          <div className='skeleton h-48'></div>
          <div className='card-body'>
            <div className='skeleton w-64 h-8'></div>
            <div className='skeleton w-24 h-4'></div>
            <div className='card-actions justify-end'>
              <button className='btn skeleton w-36'></button>
              <button className='btn skeleton w-36'></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListSkeleton;
