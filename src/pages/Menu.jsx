import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import Menus from '../features/menu/Menus';
import Navbar from '../components/Navbar';

function Menu() {
  return (
    <>
      <Navbar />
      <MenuHero />
      <Menus />
      <Footer />
    </>
  );
}

export default Menu;
