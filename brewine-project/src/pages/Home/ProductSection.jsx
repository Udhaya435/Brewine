import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ShoppingBag,
  ShoppingCart,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";

// Yellow Edition Images
import y01 from "../../assets/Images/Products/Yollow/y01.png";
import y02 from "../../assets/Images/Products/Yollow/y02.jpg";
import y03 from "../../assets/Images/Products/Yollow/y03.png";
import y04 from "../../assets/Images/Products/Yollow/y04.png";
import y05 from "../../assets/Images/Products/Yollow/y05.png";
import y06 from "../../assets/Images/Products/Yollow/y06.png";

// Red Edition Images
import r01 from "../../assets/Images/Products/Red/r01.png";
import r02 from "../../assets/Images/Products/Red/r02.png";
import r03 from "../../assets/Images/Products/Red/r03.png";
import r04 from "../../assets/Images/Products/Red/r04.png";
import r05 from "../../assets/Images/Products/Red/r05.jpeg";

// Gray Edition Images
import g01 from "../../assets/Images/Products/Gray/G01.png";
import g02 from "../../assets/Images/Products/Gray/G02.png";
import g03 from "../../assets/Images/Products/Gray/G03.png";
import g04 from "../../assets/Images/Products/Gray/G04.png";
import g05 from "../../assets/Images/Products/Gray/G04.png";

// Black Edition Images
import b01 from "../../assets/Images/Products/Black/Black01.png";
import b02 from "../../assets/Images/Products/Black/Black02.png";
import b03 from "../../assets/Images/Products/Black/Black03.png";
import b04 from "../../assets/Images/Products/Black/Black04.png";
import b05 from "../../assets/Images/Products/Black/Black05.png";
import b06 from "../../assets/Images/Products/Black/Black06.png";
import b07 from "../../assets/Images/Products/Black/Black07.png";
import b08 from "../../assets/Images/Products/Black/Black08.png";

const products = [
  {
    id: 1,
    name: "Coconut Scraper & Citrus Juicer",
    colorLabel: "Sunshine Yellow",
    colorDot: "bg-[#f5b800]",
    badge: "Bestseller",
    tagline: "Effortless, fast & hygienic coconut grating in seconds",
    images: [y01, y02, y03, y04, y05, y06],
    rating: "4.9",
    reviews: 128,
    price: 2899,
    originalPrice: 3795,
    discount: "24% OFF",
    features: ["Food-Grade SS Blade", "Vacuum Suction Base"],
  },
  {
    id: 2,
    name: "Coconut Scraper & Citrus Juicer",
    colorLabel: "Crimson Red",
    colorDot: "bg-[#e62e2d]",
    badge: "Chef's Choice",
    tagline: "Maximum juice extraction with zero peel bitterness",
    images: [r01, r02, r03, r04, r05],
    rating: "4.8",
    reviews: 94,
    price: 2899,
    originalPrice: 3795,
    discount: "24% OFF",
    features: ["Heavy-Duty Press", "Drip-Free Spout"],
  },
  {
    id: 3,
    name: "Coconut Scraper & Citrus Juicer",
    colorLabel: "Graphite Gray",
    colorDot: "bg-[#4b5563]",
    badge: "2-in-1 Combo",
    tagline: "Complete coconut scraper & citrus juicer combo pack",
    images: [g01, g02, g03, g04, g05],
    rating: "5.0",
    reviews: 215,
    price: 2899,
    originalPrice: 3795,
    discount: "24% OFF",
    features: ["Dual Attachment System", "Space-Saving Design"],
  },
  {
    id: 4, // Fixed duplicate id: 3 to 4
    name: "Coconut Scraper & Citrus Juicer",
    colorLabel: "Black",
    colorDot: "bg-[#111827]",
    badge: "2-in-1 Combo",
    tagline: "Complete coconut scraper & citrus juicer combo pack",
    images: [b01, b02, b03, b04, b05, b06, b07, b08],
    rating: "5.0",
    reviews: 215,
    price: 2899,
    originalPrice: 3795,
    discount: "24% OFF",
    features: ["Dual Attachment System", "Space-Saving Design"],
  },
];

function ProductCard({
  product,
  index,
  isVisible,
  isInCart,
  isWishlisted,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
}) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const imageTriggerRef = useRef(null);

  // Prevent background scrolling and support Esc / arrow-key navigation.
  useEffect(() => {
    if (!isPreviewOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
        imageTriggerRef.current?.focus();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedImg((current) =>
          (current - 1 + product.images.length) % product.images.length
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImg((current) => (current + 1) % product.images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, product.images.length]);

  const closePreview = () => {
    setIsPreviewOpen(false);
    imageTriggerRef.current?.focus();
  };

  // Cache neighbouring images, so the arrows can show them without waiting for download.
  useEffect(() => {
    const { images } = product;
    if (images.length < 2) return;

    const nextIndex = (selectedImg + 1) % images.length;
    const prevIndex = (selectedImg - 1 + images.length) % images.length;
    [images[nextIndex], images[prevIndex]].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [product.images, selectedImg]);

  const savings = product.originalPrice - product.price;

  const delayClass =
    index === 0
      ? "delay-100"
      : index === 1
      ? "delay-200"
      : index === 2
      ? "delay-300"
      : "delay-[400ms]";

  // No timeout: update the image index immediately, including on rapid clicks.
  const handlePrevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImg((current) =>
      (current - 1 + product.images.length) % product.images.length
    );
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImg((current) => (current + 1) % product.images.length);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  };

  return (
    <div
      className={`
        group flex h-full min-w-0 flex-col bg-white rounded-2xl sm:rounded-3xl
        border border-gray-200/90
        shadow-[0_6px_24px_rgba(0,0,0,0.04)]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.09)]
        hover:-translate-y-1.5 hover:border-gray-300
        transition-all duration-700 ease-out overflow-hidden
        ${delayClass}
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-[0.97]"
        }
      `}
    >
      {/* Identical fixed-height image stage for every product; the image cannot resize the card. */}
      <div className="relative h-[240px] sm:h-[260px] lg:h-[280px] w-full shrink-0 overflow-hidden border-b border-gray-100 bg-[#f6f7f9] p-4 sm:p-5">
        {/* Top-Left Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 left-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white shadow-sm border border-gray-200/80 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Heart
            size={17}
            className={`transition-colors duration-200 ${
              isWishlisted
                ? "fill-[#e62e2d] text-[#e62e2d]"
                : "text-gray-600 hover:text-[#e62e2d]"
            }`}
          />
        </button>

        {/* Top-Right Discount Badge */}
        <span className="absolute top-3 right-3 z-10 bg-emerald-600 text-white text-[10px] sm:text-[11px] font-extrabold tracking-wide px-2.5 py-1 rounded-full shadow-xs">
          {product.discount}
        </span>

        {product.images.length > 1 && (
          <button
            type="button"
            onClick={handlePrevImage}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md border border-gray-200/80 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* The button and image are both constrained to the stage's inner width and height.
            This prevents large portrait/source images from expanding beyond the card. */}
        <button
          ref={imageTriggerRef}
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          aria-label={`View ${product.colorLabel} product image fullscreen`}
          className="flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-xl cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e62e2d]"
        >
          <img
            src={product.images[selectedImg]}
            alt={`${product.name} - ${product.colorLabel}`}
            decoding="async"
            draggable={false}
            className="block h-full w-full min-h-0 min-w-0 object-contain rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </button>

        {product.images.length > 1 && (
          <button
            type="button"
            onClick={handleNextImage}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md border border-gray-200/80 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {product.images.length > 1 && (
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none">
            {product.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedImg === idx
                    ? "w-4 bg-[#e62e2d]"
                    : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-800 tracking-tight leading-snug">
              {product.name}
            </h3>
            <p className="text-xs font-medium text-gray-500 mt-0.5">
              {product.colorLabel}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            In Stock
          </span>
        </div>

        {/* Bottom Pricing & CTA Section */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex flex-wrap items-end justify-between gap-2 mb-3.5">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] text-gray-400 font-medium">
                  Offer Price
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Save ₹{savings.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-950">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-gray-400 line-through font-medium">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-md px-1 py-0.5 shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setQuantity((prev) => Math.max(1, prev - 1));
                }}
                className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-90 rounded transition cursor-pointer"
              >
                -
              </button>

              <span className="text-xs font-medium text-gray-800 min-w-4 text-center">
                {quantity}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setQuantity((prev) => prev + 1);
                }}
                className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-90 rounded transition cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart?.({ ...product, quantity });
              }}
              className={`py-2.5 px-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                isInCart
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-300 hover:border-gray-900 bg-white hover:bg-gray-50 text-gray-900"
              }`}
            >
              {isInCart ? (
                <>
                  <Check size={15} />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart size={15} />
                  Add to Cart
                </>
              )}
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onBuyNow) {
                  onBuyNow({ ...product, quantity });
                } else {
                  onAddToCart?.({ ...product, quantity });
                }
              }}
              className="py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-[#e62e2d] hover:bg-[#cc2221] text-white shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.97] cursor-pointer"
            >
              <ShoppingBag size={15} />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {isPreviewOpen && typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${product.colorLabel} product image preview`}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePreview();
            }}
          >
            <button
              type="button"
              onClick={closePreview}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <X size={25} />
            </button>

            {product.images.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Previous product image"
                className="absolute left-3 sm:left-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            <img
              src={product.images[selectedImg]}
              alt={`${product.name} - ${product.colorLabel} - image ${selectedImg + 1}`}
              className="max-h-[85vh] max-w-[84vw] sm:max-w-[88vw] object-contain select-none"
              draggable={false}
            />

            {product.images.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Next product image"
                className="absolute right-3 sm:right-6 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
              >
                <ChevronRight size={26} />
              </button>
            )}

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white sm:text-sm">
              {selectedImg + 1} / {product.images.length}
            </span>
          </div>,
          document.body
        )}
    </div>
  );
}

function ProductSection({
  cart = [],
  wishlist = [],
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="product-details"
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`
            text-center max-w-2xl mx-auto mb-8 sm:mb-12
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-7"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span
              className={`h-[2px] bg-[#e62e2d] transition-all duration-700 delay-200 ${
                isVisible ? "w-7 sm:w-10" : "w-0"
              }`}
            />

            <span className="text-[#e62e2d] text-xs sm:text-sm font-bold uppercase tracking-[2.5px] sm:tracking-[3px]">
              Our Products
            </span>

            <span
              className={`h-[2px] bg-[#e62e2d] transition-all duration-700 delay-200 ${
                isVisible ? "w-7 sm:w-10" : "w-0"
              }`}
            />
          </div>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-0.5 leading-relaxed">
            Engineered for effortless daily prep with heavy-duty vacuum suction and food-grade stainless steel precision.
          </p>
        </div>

        {/* Product Grid - Changed to 4 columns on xl screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, index) => {
            const isInCart = cart.some(
              (item) =>
                item.id === product.id &&
                item.colorLabel === product.colorLabel
            );

            const isWishlisted = wishlist.some(
              (item) =>
                item.id === product.id &&
                item.colorLabel === product.colorLabel
            );

            return (
              <ProductCard
                key={product.id}
                index={index}
                isVisible={isVisible}
                isInCart={isInCart}
                isWishlisted={isWishlisted}
                product={product}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
                onToggleWishlist={onToggleWishlist}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;