import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Cart from './components/Cart';

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
