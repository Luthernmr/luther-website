import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Pour rendre le contenu des routes enfants

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Le contenu des routes enfants sera rendu ici */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;