import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className='container mx-auto'>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
