import { useRouteError } from 'react-router-dom';
import { Alert } from '.';

const RouteErrorElement = () => {
  const error = useRouteError();
  return (
    <div className='mt-5'>
      <Alert message={error.message} type='error' />
    </div>
  );
};

export default RouteErrorElement;
