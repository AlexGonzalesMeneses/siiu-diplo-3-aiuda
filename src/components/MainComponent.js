import CatalogComponent from './CatalogComponent';
import { useState } from 'react';
import { ITEMS } from './../shared/items';
import ItemDetail from './ItemdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <Header />
      <CatalogComponent
        items={ITEMS}
        onClick={(item) => {
          handleItemSelect(item);
        }}
      />
      <ItemDetail item={selectedItem} />
      <Footer />
    </div>
  );
}

export default Main;
