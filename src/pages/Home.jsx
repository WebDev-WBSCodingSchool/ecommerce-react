import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { CategoriesSkeleton, CategoryLinks, ProductList, ProductListSkeleton } from '@/components';

const Home = () => {
  const { categories, products } = useLoaderData();

  return (
    <div className='py-5'>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Await resolve={categories}>
          <div className='flex flex-nowrap gap-4 overflow-x-scroll'>
            <CategoryLinks />
          </div>
        </Await>
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <Await resolve={products}>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
            <ProductList />
          </div>
        </Await>
      </Suspense>
    </div>
  );
};

export default Home;
