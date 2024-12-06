import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
