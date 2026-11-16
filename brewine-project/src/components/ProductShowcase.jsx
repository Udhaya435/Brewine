import { useState } from "react";
import {
  ShoppingCart,
  Zap,
  Heart,
  Play,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Gauge,
  Fan,
  ShieldCheck,
  Droplets,
  Anchor,
  ChevronDown,
  Maximize2,
  X,
  Truck,
  RotateCcw,
  Award,
} from "lucide-react";

// Replace these with your actual local product image imports:
import heroBg from "../assets/Images/hero/heroig.png";

const productImages = [
  heroBg,
  heroBg, // Replace with 2nd thumbnail image
  heroBg, // Replace with 3rd thumbnail image
  heroBg, // Replace with 4th thumbnail image
  heroBg, // Replace with 5th thumbnail image
];

const colorVariants = [
  { name: "Yellow", hex: "#ffdf00", ring: "ring-amber-400" },
  { name: "Red", hex: "#e62e2d", ring: "ring-red-500" },
  { name: "Sky Blue", hex: "#00d2ff", ring: "ring-cyan-400" },
];

const featuresList = [
  {
    icon: Sparkles,
    title: "DualFunctionality (2-in-1)",
    desc: "Easily switch between coconut scraping and citrus juicing with one versatile kitchen appliance.",
    badge: "2-in-1 Appliance",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    icon: Zap,
    title: "200W High Torque Copper Motor",
    desc: "Ensures efficient and powerful operation, making quick work of tough coconut scraping and citrus juicing tasks.",
    badge: "100% Copper Motor",
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    icon: Gauge,
    title: "Two-Speed Options",
    desc: "Tailor the speed to your specific needs, whether you're scraping coconut or juicing fresh citrus fruits.",
    badge: "Dual Speed",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "304 Stainless Steel Scraping Blade",
    desc: "Specially designed with rounded teeth edges for uniform, efficient, and easy coconut scraping.",
    badge: "Food-Grade SS304",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: Droplets,
    title: "Citrus Press Cone & Splash Cover",
    desc: "Optimized cone for maximum juice extraction paired with a splash cover and pulp/seed collector to keep your kitchen clean.",
    badge: "Zero Mess",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Anchor,
    title: "Super Suction Feet",
    desc: "Offers superior stability on any kitchen surface to prevent slips, vibration, and spills during operation.",
    badge: "Anti-Slip Grip",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    icon: Fan,
    title: "Cooling Fan for Ventilation",
    desc: "Prevents the motor from overheating, ensuring the appliance's longevity and safe continuous operation.",
    badge: "Heat Protection",
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    icon: CheckCircle2,
    title: "Easy Soft-Touch Operation",
    desc: "Attach the spill tray and chosen attachment, select the speed, and press the soft-touch button to kickstart immediately.",
    badge: "One-Touch Start",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
];

const galleryItems = [
  {
    img: heroBg,
    title: "Complete 2-in-1 Kitchen Combo",
    tag: "Product Overview",
  },
  {
    img: heroBg,
    title: "304 Stainless Steel Scraper with Splash Guard",
    tag: "Coconut Scraping",
  },
  {
    img: heroBg,
    title: "Specially Designed Citrus Press Cone",
    tag: "Citrus Juicing",
  },
  {
    img: heroBg,
    title: "Rear Cooling Fan & Soft-Touch 2-Speed Switch",
    tag: "Engineering",
  },
];

const specifications = [
  {
    label: "Product Name",
    value:
      "Brewine 2-in-1 Coconut Scraper & Citrus Juicer with Dual Speed Settings, Cooling Fan for Ventilation, Stainless Steel Scraping Blade, Splash Guard, Super Suction Feet for Stability, Red, 200 Watts",
  },
  { label: "Brand", value: "BREWINE" },
  { label: "Product Code", value: "PP17873099387508" },
  { label: "SKU", value: "BCSCP" },
  { label: "Category", value: "Appliances" },
  { label: "Sub-Category", value: "Kitchen Appliances (2-in-1 Scraper & Juicer)" },
  { label: "Unit", value: "Pieces (1 Complete Set)" },
  { label: "Motor Power", value: "200 Watts High Torque Copper Motor" },
  { label: "Speed Control", value: "Dual Speed Settings (2-Speed Soft-Touch Switch)" },
  { label: "Blade Material", value: "304 Stainless Steel with Rounded Teeth Edges" },
  { label: "Juicer Attachment", value: "Specially Designed Citrus Press Cone with Pulp & Seed Collector" },
  { label: "Safety & Stability", value: "Super Suction Feet & Built-in Cooling Fan for Ventilation" },
  { label: "Warranty", value: "1 Year Manufacturer Warranty" },
];

const faqs = [
  {
    q: "Is theFOXMO 2-in-1 Coconut Scraper and Citrus Juicer easy to operate?",
    a: "Yes! Attach the spill tray and your chosen attachment to theFOXMO 2-in-1 Coconut Scraper and Citrus Juicer, select the speed, and press the soft-touch button to kickstart the appliance for swift and effective scraping or juicing.",
  },
  {
    q: "Is the stainless steel scraper blade sharp to touch?",
    a: "The 304 Stainless Steel blade features rounded teeth edges designed for efficient coconut scraping. However, some customers may find theFOXMO scraper blade a bit sharp—using protective gloves is recommended for safer handling during attachment and cleaning.",
  },
  {
    q: "How does the appliance prevent motor overheating?",
    a: "It comes built-in with a dedicated Cooling Fan for ventilation that actively dissipates heat from the 200W High Torque Copper Motor, ensuring long life and safe operation.",
  },
  {
    q: "Will the machine move or vibrate while scraping coconut?",
    a: "No. The bottom is equipped with Super Suction Feet that firmly grip your kitchen countertop, offering superior stability to prevent slips and spills.",
  },
  {
    q: "How does it keep the kitchen counter clean during use?",
    a: "It includes a dedicated Splash Cover with a Pulp and Seed Collector that prevents coconut flakes or juice splashes from scattering and collects by-products neatly in one place.",
  },
];

function ProductShowcase({ onAddToCart, onBuyNow }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const price = 2899;
  const originalPrice = 3795;
  const discount = 24;

  const buildCartItem = () => ({
    id: `BCSCP-${selectedColor.name}`,
    name: `Brewine 2-in-1 Coconut Scraper & Citrus Juicer (${selectedColor.name})`,
    price,
    originalPrice,
    quantity,
    color: selectedColor.name,
    image: productImages[activeImage],
    sku: "BCSCP",
  });

  return (
    <div className="bg-white text-gray-900">
      {/* =========================================================
          SECTION 1: PRODUCT BUY DETAILS (#product-details)
      ========================================================= */}
      <section
        id="product-details"
        className="scroll-mt-20 py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Vertical Thumbnails + Main Image */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4 lg:sticky lg:top-24">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] shrink-0 py-1 px-1">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === idx
                      ? "border-[#c82333] ring-2 ring-[#c82333]/20 scale-105"
                      : "border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="relative flex-1 bg-gray-50 rounded-2xl border border-gray-200/80 overflow-hidden group aspect-square sm:aspect-[4/4.2] flex items-center justify-center">
              <img
                src={productImages[activeImage]}
                alt="Brewine 2-in-1 Coconut Scraper & Citrus Juicer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute top-4 left-4 bg-[#c82333] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                {discount}% OFF
              </span>

              <button
                onClick={() => setLightboxImg(productImages[activeImage])}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-gray-800 shadow-lg flex items-center justify-center transition cursor-pointer"
                aria-label="Full screen image"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Title, Price, Color, Quantity, CTA, Video, Meta */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-red-50 text-[#c82333] text-xs font-bold uppercase tracking-wider">
               FOXMO
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                ● In Stock • 1 Year Warranty
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[25px] font-extrabold text-gray-900 leading-snug">
             FOXMO 2-in-1 Coconut Scraper & Citrus Juicer with Dual Speed
              Settings, Cooling Fan for Ventilation, Stainless Steel Scraping
              Blade, Splash Guard, Super Suction Feet for Stability,{" "}
              {selectedColor.name}, 200 Watts
            </h2>

            {/* Price Block */}
            <div className="mt-5 flex flex-wrap items-baseline gap-3 pb-5 border-b border-gray-100">
              <span className="text-3xl sm:text-4xl font-black text-[#e62e2d]">
                Rs. {price.toLocaleString("en-IN")}.00
              </span>
              <span className="text-lg text-gray-400 line-through font-medium">
                Rs. {originalPrice.toLocaleString("en-IN")}.00
              </span>
              <span className="px-3 py-1 rounded-md bg-[#d93644] text-white text-sm font-bold">
                {discount}% Off
              </span>
            </div>

            {/* Color Picker */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                Color:{" "}
                <span className="text-gray-900 font-extrabold">
                  {selectedColor.name}
                </span>
              </p>
              <div className="flex items-center gap-3">
                {colorVariants.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-10 h-7 rounded-full border border-black/20 transition-all cursor-pointer ${
                        isSelected
                          ? `ring-2 ring-offset-2 ${color.ring} scale-110`
                          : "opacity-80 hover:opacity-100"
                      }`}
                      title={color.name}
                      aria-label={color.name}
                    />
                  );
                })}
              </div>
            </div>

            {/* Quantity Picker */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Quantity:
              </p>
              <div className="inline-flex items-center rounded-lg border border-gray-300 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-lg rounded-l-lg cursor-pointer"
                >
                  −
                </button>
                <span className="w-12 text-center font-bold text-sm text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-lg rounded-r-lg cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pb-6 border-b border-gray-200">
              <button
                onClick={() => onAddToCart?.(buildCartItem())}
                className="flex-1 min-w-[155px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-bold text-sm shadow-md transition cursor-pointer"
              >
                <ShoppingCart size={18} />
                <span>Add To Cart</span>
              </button>

              <button
                onClick={() => onBuyNow?.(buildCartItem())}
                className="flex-1 min-w-[155px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md transition cursor-pointer"
              >
                <Zap size={18} className="text-amber-400" />
                <span>Buy Now</span>
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-12 h-12 rounded-lg border flex items-center justify-center transition cursor-pointer ${
                  wishlisted
                    ? "bg-red-50 border-red-200 text-[#e62e2d]"
                    : "border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
                aria-label="Add to Wishlist"
              >
                <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Product Demo Video Box (Matches your screenshot) */}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                Video Demonstration
              </p>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="relative w-64 sm:w-72 h-36 rounded-xl overflow-hidden bg-black group border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer"
              >
                <img
                  src={heroBg}
                  alt="Product Video Thumbnail"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-[#c82333] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play size={20} fill="currentColor" className="ml-0.5" />
                  </span>
                  <span className="mt-2 text-[11px] font-semibold text-white/90">
                    Watch How It Works
                  </span>
                </div>
              </button>
            </div>

            {/* Product Metadata (Product Code, Brand, SKU) */}
            <div className="mt-6 pt-4 border-t border-gray-100 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <p>
                <span className="font-bold text-gray-900">Product Code:</span>{" "}
                PP17873099387508
              </p>
              <p>
                <span className="font-bold text-gray-900">Brand:</span>FOXMO
              </p>
              <p>
                <span className="font-bold text-gray-900">SKU:</span> BCSCP
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <Truck size={18} className="text-[#e65b19] shrink-0" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <Award size={18} className="text-[#c82333] shrink-0" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <RotateCcw size={18} className="text-emerald-600 shrink-0" />
                <span>Easy Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: FEATURES (#features)
      ========================================================= */}
      <section
        id="features"
        className="scroll-mt-20 py-16 md:py-20 bg-gray-50 border-y border-gray-200/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c82333] bg-red-50 px-3.5 py-1.5 rounded-full">
              Engineered for Indian Kitchens
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Powerful Features & Benefits
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-gray-600">
              Everything you need for quick, mess-free coconut grating and fresh
              citrus juice extraction in one compact unit.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresList.map((feat, i) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center ${feat.color}`}
                      >
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-gray-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3-Step "Easy to Operate" Banner + Safety Note */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 bg-gradient-to-r from-[#141011] to-[#261b1d] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Quick 3-Step Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  Easy to Operate in Seconds
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-xs font-black text-amber-400">
                    STEP 01
                  </span>
                  <p className="text-sm font-bold mt-1">Attach Tray & Cone</p>
                  <p className="text-xs text-white/75 mt-1">
                    Fix the spill tray and your chosen scraper blade or citrus
                    juicer cone.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-xs font-black text-amber-400">
                    STEP 02
                  </span>
                  <p className="text-sm font-bold mt-1">Select Dual Speed</p>
                  <p className="text-xs text-white/75 mt-1">
                    Choose between Speed 1 or Speed 2 based on scraping or
                    juicing needs.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-xs font-black text-amber-400">
                    STEP 03
                  </span>
                  <p className="text-sm font-bold mt-1">Soft-Touch Start</p>
                  <p className="text-xs text-white/75 mt-1">
                    Press the soft-touch button to kickstart swift and effective
                    operation.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Safety Recommendation Callout */}
            <div className="lg:col-span-4 bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-800 flex items-center justify-center shrink-0">
                  <ShieldAlert size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                    Safety Tip
                  </span>
                  <h4 className="text-base font-extrabold text-gray-900">
                    Blade Handling Care
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Some customers may find theFOXMO 304 stainless steel scraper
                blade a bit sharp during cleaning or attachment;{" "}
                <strong className="text-gray-900">
                  using kitchen gloves is recommended
                </strong>{" "}
                for safer handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: GALLERY (#gallery)
      ========================================================= */}
      <section
        id="gallery"
        className="scroll-mt-20 py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c82333]">
              Visual Showcase
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-black text-gray-900">
              Product Gallery & Attachments
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md">
            Click on any image to inspect the stainless steel blade, citrus
            press cone, and build quality up close.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item.img)}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[4/3.5] cursor-pointer shadow-xs hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 4: SPECIFICATIONS (#specifications)
      ========================================================= */}
      <section
        id="specifications"
        className="scroll-mt-20 py-16 md:py-20 bg-gray-50 border-y border-gray-200/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c82333]">
              Technical Details
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-black text-gray-900">
              Product Specifications
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-12 px-5 sm:px-7 py-4 text-sm gap-2 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <div className="sm:col-span-4 font-bold text-gray-900">
                    {spec.label}
                  </div>
                  <div className="sm:col-span-8 text-gray-700 leading-relaxed">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: FAQ (#faq)
      ========================================================= */}
      <section
        id="faq"
        className="scroll-mt-20 py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#c82333]">
            Got Questions?
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-[#c82333]/40 bg-red-50/20 shadow-xs"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#c82333]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX MODAL FOR FULLSCREEN IMAGE
      ========================================================= */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
          >
            <X size={22} />
          </button>
          <img
            src={lightboxImg}
            alt="Fullscreen Preview"
            className="max-w-full max-h-[88vh] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* =========================================================
          VIDEO MODAL
      ========================================================= */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15"
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-900 text-white">
              <span className="text-sm font-bold">
               FOXMO 2-in-1 Coconut Scraper & Citrus Juicer Demo
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center text-white/80 p-8 text-center">
              {/* Replace src with your MP4 video file or YouTube iframe */}
              <p className="text-sm">
                Add your product video{" "}
                <code className="bg-white/10 px-2 py-0.5 rounded">
                  &lt;video src="..." controls /&gt;
                </code>{" "}
                or YouTube embed here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductShowcase;