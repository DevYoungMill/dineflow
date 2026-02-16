import Footer from '../components/Footer';
import MenuHero from '../components/MenuHero';
import Menus from '../features/menu/Menus';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Navbar />
      <MenuHero
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Menus selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}

export default Menu;
