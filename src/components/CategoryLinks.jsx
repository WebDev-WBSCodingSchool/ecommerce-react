import { Link, useAsyncValue } from 'react-router-dom';
import { Alert } from '.';

const CategoryLinks = () => {
  const categories = useAsyncValue();

  if (!categories.length) return <Alert message='No categories found' type='warning' />;
  return categories.map(category => (
    <Link key={category} to={`/category/${category}`} className='btn btn-outline btn-primary'>
      {category}
    </Link>
  ));
};

export default CategoryLinks;
