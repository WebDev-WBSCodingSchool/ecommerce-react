import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Cart, Category, Home } from '@/pages';
import { RouteErrorElement } from '@/components';
import { getHomePageData } from '@/utils/loaders';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        index
        element={<Home />}
        loader={getHomePageData}
        errorElement={<RouteErrorElement />}
      />
      <Route path='category/:name' element={<Category />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
