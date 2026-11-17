import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home/Hero";
import Footer from "./components/Footer";
import ProductSection from "./pages/Home/ProductSection";
import ProductDetails from "./pages/Home/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlist, setWishlist] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Cart Add / Remove Toggle
  const handleToggleCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.some(
        (item) =>
          item.id === product.id && item.colorLabel === product.colorLabel
      );

      if (exists) {
        return prevCart.filter(
          (item) =>
            !(item.id === product.id && item.colorLabel === product.colorLabel)
        );
      }

      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Buy Now
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

  // Wishlist Add / Remove Toggle
  const handleToggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(
        (item) =>
          item.id === product.id && item.colorLabel === product.colorLabel
      );

      if (exists) {
        return prevWishlist.filter(
          (item) =>
            !(item.id === product.id && item.colorLabel === product.colorLabel)
        );
      }

      return [...prevWishlist, product];
    });
  };

  const handleRemoveFromWishlist = (id, colorLabel) => {
    setWishlist((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.colorLabel === colorLabel)
      )
    );
  };

  // Move to Cart -> Adds to Cart, Removes from Wishlist, Opens Your Cart Drawer
  const handleMoveToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id && item.colorLabel === product.colorLabel
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setWishlist((prev) =>
      prev.filter(
        (item) =>
          !(item.id === product.id && item.colorLabel === product.colorLabel)
      )
    );

    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <main className="min-h-screen bg-gray-50">
        <Hero />
        <ProductSection
          cart={cart}
          wishlist={wishlist}
          onAddToCart={handleToggleCart}
          onBuyNow={handleBuyNow}
          onToggleWishlist={handleToggleWishlist}
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

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={handleMoveToCart}
      />
    </>
  );
}

export default App;