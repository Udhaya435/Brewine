import Navbar from "./components/Navbar";
import Hero from "./pages/Home/Hero";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProductSection from "./pages/Home/ProductSection";
import ProductDetails from "./pages/Home/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <Hero />
        <ProductSection />
        <ProductDetails/>
      </main>

      {/* <CTASection /> */}
      <Footer />
    </>
  );
}

export default App;