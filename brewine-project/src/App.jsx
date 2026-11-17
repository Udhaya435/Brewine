import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home/Hero";
import Footer from "./components/Footer";
import ProductSection from "./pages/Home/ProductSection";
import ProductDetails from "./pages/Home/ProductDetails";
import CartDrawer from "./components/CartDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ஒருமுறை கிளிக் செய்தால் Add ஆகும், மறுமுறை கிளிக் செய்தால் Remove ஆகும்
  const handleToggleCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.some(
        (item) =>
          item.id === product.id && item.colorLabel === product.colorLabel
      );

      if (exists) {
        // ஏற்கனவே இருந்தால் Cart-லிருந்து நீக்கிவிடும்
        return prevCart.filter(
          (item) =>
            !(item.id === product.id && item.colorLabel === product.colorLabel)
        );
      }

      // இல்லையென்றால் Cart-ல் சேர்க்கும்
      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Buy Now கிளிக் செய்தால் Cart-ல் இல்லையென்றால் சேர்த்து Drawer-ஐ Open செய்யும்
  const handleBuyNow = (productToBuy) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === productToBuy.id &&
          item.colorLabel === productToBuy.colorLabel
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: productToBuy.quantity || 1,
        };
        return updated;
      }

      return [
        ...prevCart,
        { ...productToBuy, quantity: productToBuy.quantity || 1 },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, colorLabel, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.colorLabel === colorLabel
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id, colorLabel) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === id && item.colorLabel === colorLabel)
      )
    );
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="min-h-screen bg-gray-50">
        <Hero />
        <ProductSection
          cart={cart}
          onAddToCart={handleToggleCart}
          onBuyNow={handleBuyNow}
        />
        <ProductDetails
          cart={cart}
          onAddToCart={handleToggleCart}
          onBuyNow={handleBuyNow}
        />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}

export default App;