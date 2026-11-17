import { useState } from "react";
import {
  Menu,
  X,
  Truck,
  UserCircle,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

import brewineLogo from "../assets/Images/Logo/FOXMOLogo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "product-details" },
  { name: "Specifications", id: "specifications" },
];

function Navbar({ cartCount = 0, onOpenCart }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavigation = (id) => {
    setActiveLink(id);
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-1 h-16 sm:h-[74px] flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("home");
          }}
          className="flex items-center shrink-0"
        >
          <img
            src={brewineLogo}
            alt="Brewine Logo"
            className="h-7 sm:h-6 lg:h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`relative py-2 text-[14px] font-medium transition-colors duration-200 ${
                activeLink === link.id
                  ? "text-[#c82333]"
                  : "text-gray-700 hover:text-[#c82333]"
              }`}
            >
              {link.name}

              {activeLink === link.id && (
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#c82333] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          {/* Delivery */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Truck size={21} className="text-[#e65b19] shrink-0" />
            <span className="whitespace-nowrap">Free Delivery</span>
          </div>

          {/* Account */}
          <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#c82333] transition">
            <UserCircle size={21} className="shrink-0" />
            
          </button>

          {/* Cart */}
          <button
            onClick={onOpenCart}
            className="relative text-gray-800 hover:text-[#c82333] transition p-1"
            aria-label="Open Cart"
          >
            <ShoppingCart size={25} />

            <span className="absolute -top-1.5 -right-2 min-w-[19px] h-[19px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mobile & Tablet Actions */}
        <div className="flex items-center gap-3 sm:gap-5 lg:hidden">
          <button
            className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#c82333] transition"
            aria-label="Account"
          >
            <UserCircle size={22} />
            <span>Account</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative text-gray-800 p-1"
            aria-label="Open Cart"
          >
            <ShoppingCart className="w-[22px] h-[22px] sm:w-6 sm:h-6" />

            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#c82333] text-white text-[10px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-gray-800 p-1"
            aria-label="Toggle menu"
          >
            {mobileMenu ? (
              <X className="w-6 h-6 sm:w-[26px] sm:h-[26px]" />
            ) : (
              <Menu className="w-6 h-6 sm:w-[26px] sm:h-[26px]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg px-4 sm:px-6 py-4 sm:py-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`flex items-center justify-between py-3 sm:py-3.5 border-b border-gray-100 text-sm sm:text-base font-medium transition ${
                  activeLink === link.id
                    ? "text-[#c82333]"
                    : "text-gray-700 hover:text-[#c82333]"
                }`}
              >
                {link.name}
                <ChevronRight size={17} />
              </button>
            ))}

            {/* Account option inside mobile drawer for <640px screens */}
            <button className="sm:hidden flex items-center justify-between py-3 border-b border-gray-100 text-sm font-medium text-gray-700 hover:text-[#c82333] transition">
              <span className="flex items-center gap-2">
                <UserCircle size={19} />
                Account
              </span>
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Truck size={19} className="text-[#e65b19] shrink-0" />
            <span>Free Delivery Across India</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;