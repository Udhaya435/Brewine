import { useState } from "react";
import {
  Link as LinkIcon,
  Headset,
  Phone,
  Mail,
  MapPin,
  Share2,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/Images/Logo/FOXMOLogo.png";

const footerLinks = [
  "Home",
  "About Us",
  "Our Products",
  "Contact us",
  "Privacy policy",
  "Terms & Conditions",
  "Refund & Cancellation",
];

const popularCategories = [
  "Home Espresso Machines",
  "Coconut Scraper",
  "Citrus Juicer"
];

function Footer() {
  const [country, setCountry] = useState("India");

  // 5-ku mela iruntha automatic-a rendu column-a piriyum
  const firstLinks = footerLinks.slice(0, 5);
  const extraLinks = footerLinks.slice(5);

  return (
    <footer className="w-full bg-white text-[#26364a] border-t border-gray-200">
      {/* Main Container */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8">
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10">
          {/* Column 1: Follow Us & Brand */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 h-8 border-b border-gray-200 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
              <Share2 size={19} className="text-gray-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                FOLLOW US
              </h3>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-5 sm:mb-6 text-gray-700">
              <a
                href="https://api.whatsapp.com/send?phone=917868999000&text=I%20have%20a%20query%20about%20%20%22The%20Brewine%20Coconut%20Scraper%20%26%20Citrus%20Press%22"
                aria-label="WhatsApp"
                className="hover:text-green-600 transition-colors p-1 -ml-1"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://www.facebook.com/Brewine.in/"
                aria-label="Facebook"
                className="hover:text-blue-600 transition-colors p-1"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/brewineindia/"
                aria-label="Instagram"
                className="hover:text-pink-600 transition-colors p-1"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/brewineindia"
                aria-label="Twitter"
                className="hover:text-sky-500 transition-colors p-1"
              >
                <FaTwitter size={17} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkppTzjPdHdMFmXDd3NvVhQ"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors p-1"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/*FOXMO Brand Logo */}
            <div className="flex items-center gap-2.5 mt-3 sm:mt-4">
              <img
                src={logo}
                alt="Brewine Logo"
                className="w-24 sm:w-28 h-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2: Links (5-ku mela vantha pakkathula next column-a show aagum) */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 h-8 border-b border-gray-200 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
              <LinkIcon size={19} className="text-gray-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                LINKS
              </h3>
            </div>

            <div
              className={
                extraLinks.length > 0
                  ? "grid grid-cols-2 gap-x-3 sm:gap-x-4"
                  : ""
              }
            >
              {/* First 5 Links */}
              <ul className="space-y-1.5 sm:space-y-[5px]">
                {firstLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-[12px] text-[#26364a] hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* 5-ku mela ulla Links pakkathula */}
              {extraLinks.length > 0 && (
                <ul className="space-y-1.5 sm:space-y-[5px]">
                  {extraLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs sm:text-[12px] text-[#26364a] hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 h-8 border-b border-gray-200 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
              <Headset size={19} className="text-gray-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                CONTACT US
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-[12px]">
              <a
                href="tel:+917868999000"
                className="flex items-center gap-2.5 sm:gap-3 hover:text-orange-500 transition-colors"
              >
                <Phone size={16} className="text-gray-500 shrink-0" />
                <span>+91 7868 999 000</span>
              </a>

              <a
                href="mailto:service@brewine.in"
                className="flex items-center gap-2.5 sm:gap-3 hover:text-orange-500 transition-colors break-all"
              >
                <Mail size={16} className="text-gray-500 shrink-0" />
                <span>service@brewine.in</span>
              </a>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin size={16} className="text-gray-500 shrink-0 mt-0.5" />
                <div className="leading-[20px] text-[#26364a]">
                  <p>
                    Frankson Appliances, 308/1A, Rajiv Gandhi Saalai,
                    Ganapathy, Coimbatore, Tamil Nadu, India - 641006.
                  </p>
                  <p className="mt-1 font-medium text-gray-700">
                    GST 33ACDPF4340B1ZH
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 h-8 border-b border-gray-200 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
              <MapPin size={19} className="text-gray-400 shrink-0" />
              <h3 className="text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wide">
                LOCATION
              </h3>
            </div>

            <div className="w-full h-[150px] sm:h-[135px] lg:h-[130px] rounded-lg overflow-hidden border border-gray-200">
              <iframe
                title="Frankson Appliances Location"
                src="https://maps.google.com/maps?q=Frankson%20Appliances,%20308/1A,%20Rajiv%20Gandhi%20Saalai,%20Ganapathy,%20Coimbatore,%20Tamil%20Nadu%20641006&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Trust & Delivery Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
          {/* Trust */}
          <div>
            <h3 className="text-xs sm:text-[12px] font-bold text-gray-600 mb-3 sm:mb-4 uppercase">
              TRUST ENSURED WITH
            </h3>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <div className="flex items-center gap-1.5 text-teal-800">
                <ShieldCheck size={26} className="sm:w-7 sm:h-7 shrink-0" />
                <div className="leading-tight">
                  <p className="font-extrabold text-base sm:text-lg">GST</p>
                  <p className="text-[8px] font-bold">VERIFIED SELLER</p>
                </div>
              </div>

              <div className="h-8 sm:h-9 border-l border-gray-300" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1475a9] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs rounded shrink-0">
                  100%
                </div>

                <div className="text-xs sm:text-[12px] font-bold text-gray-500">
                  Genuine Appliances
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
            <span className="text-xs sm:text-[11px] text-blue-950 font-medium shrink-0">
              Delivery:
            </span>

            <div className="relative w-full sm:w-[230px]">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full h-9 appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-9 text-xs sm:text-[11px] font-semibold outline-none cursor-pointer"
              >
                <option value="India">🇮🇳 India (Coimbatore HQ)</option>
                <option value="Tamil Nadu">🇮🇳 Tamil Nadu</option>
                <option value="Kerala">🇮🇳 Kerala</option>
                <option value="Karnataka">🇮🇳 Karnataka</option>
              </select>

              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="border-t border-b border-gray-200 mt-6 py-4 sm:py-5">
          <h3 className="text-xs sm:text-[14px] font-bold text-gray-900 mb-2.5 sm:mb-3">
           FOXMO Popular Categories
          </h3>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-y-3">
            {popularCategories.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-[11px] text-[#34445c] hover:text-orange-500 transition"
                >
                  {item}
                </a>

                {index !== popularCategories.length - 1 && (
                  <span className="text-orange-500 text-[10px]">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Policy Links */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-5 text-center sm:text-left">
          <p className="text-[11px] text-gray-600">
            Copyright © 2026 || FOXMO
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-2.5 gap-y-1.5 sm:gap-3 text-[11px]">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-orange-500">·</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <span className="text-orange-500">·</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Refund & Cancellation
            </a>
            <span className="text-orange-500">·</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;