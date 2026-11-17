import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Truck,
  ShoppingCart,
  ChevronRight,
  Heart,
} from "lucide-react";

import brewineLogo from "../assets/Images/Logo/FOXMOLogo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "product-details" },
  { name: "Specifications", id: "specifications" },
];

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for header shadow & active section highlight (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const scrollPosition = window.scrollY + 140;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  const handleNavigation = (id) => {
    setActiveLink(id);
    setMobileMenu(false);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/70"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-1 h-16 sm:h-[74px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
            className="flex items-center shrink-0 focus:outline-none group"
          >
            <img
              src={brewineLogo}
              alt="Foxmo Logo"
              className="h-7 sm:h-6 lg:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={`relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#c82333]"
                      : "text-gray-700 hover:text-[#c82333]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2.5px] bg-[#c82333] rounded-full transition-all duration-300 origin-center ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            {/* Delivery Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/80 border border-orange-100 text-xs font-medium text-gray-700">
              <Truck size={17} className="text-[#e65b19] shrink-0" />
              <span className="whitespace-nowrap">Free Delivery</span>
            </div>

            <div className="h-5 w-[1px] bg-gray-200" />

            {/* Wishlist */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-gray-700 hover:text-[#c82333] hover:bg-red-50/70 transition-all duration-200 cursor-pointer"
              aria-label="Open Wishlist"
              title="Wishlist"
            >
              <Heart
                size={22}
                className={`transition-transform duration-200 active:scale-90 ${
                  wishlistCount > 0 ? "fill-[#c82333] text-[#c82333]" : ""
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-gray-700 hover:text-[#c82333] hover:bg-red-50/70 transition-all duration-200 cursor-pointer"
              aria-label="Open Cart"
              title="Cart"
            >
              <ShoppingCart
                size={22}
                className="transition-transform duration-200 active:scale-90"
              />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full text-gray-800 hover:bg-gray-100 transition"
              aria-label="Open Wishlist"
            >
              <Heart
                className={`w-[21px] h-[21px] sm:w-6 sm:h-6 ${
                  wishlistCount > 0 ? "fill-[#c82333] text-[#c82333]" : ""
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 rounded-full text-gray-800 hover:bg-gray-100 transition"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-[21px] h-[21px] sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile & Tablet Dropdown Menu */}
        {mobileMenu && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl px-4 sm:px-6 py-4 z-50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavigation(link.id)}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm sm:text-base font-medium transition ${
                      isActive
                        ? "bg-red-50/80 text-[#c82333]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#c82333]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight
                      size={17}
                      className={isActive ? "text-[#c82333]" : "text-gray-400"}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between px-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
                <Truck size={18} className="text-[#e65b19] shrink-0" />
                <span>Free Delivery Across India</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop Overlay when mobile menu is open */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/25 backdrop-blur-[1px] z-40 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;