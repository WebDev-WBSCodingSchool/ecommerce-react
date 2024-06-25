import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Cart, Home } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
