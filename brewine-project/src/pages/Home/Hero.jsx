import { useState, useEffect } from "react";
import {

  ArrowRight,
  Nut,
  Citrus,
  Fan,
  ShieldCheck,
} from "lucide-react";
import heroBg from "../../assets/Images/hero/heroig.jpg";

const productFeatures = [
  {
    icon: Nut,
    name: "Coconut Scraper",
    desc: "Effortless grating",
    id: "features",
  },
  {
    icon: Citrus,
    name: "Citrus Juicer",
    desc: "Fresh extraction",
    id: "features",
  },
  {
    icon: Fan,
    name: "Cooling Fan",
    desc: "Overheat protection",
    id: "features",
  },
  {
    icon: ShieldCheck,
    name: "Steel Blade",
    desc: "Food-grade SS304",
    id: "features",
  },
];

function Hero() {
  const [selectedTab, setSelectedTab] = useState("Coconut Scraper");
  const [start, setStart] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const visibleCount = 4;

  // Component mount ஆனவுடன் animation trigger ஆகும்
  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleExplore = () => {
    document
      .getElementById("product-details")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const visibleFeatures = productFeatures.slice(
    start,
    start + visibleCount
  );

  return (
    <section
      id="home"
      className="
        relative isolate w-full
        min-h-[680px]
        sm:min-h-[700px]
        md:min-h-[calc(100svh-74px)]
        lg:min-h-[calc(100svh-74px)]
        overflow-hidden bg-[#161214]
        flex flex-col justify-between
      "
    >
      {/* 1. Background Image - Smooth Zoom Out */}
      <div
        className={`
          absolute inset-0 -z-10
          bg-cover bg-no-repeat
          bg-[center_55%]
          sm:bg-center
          md:bg-right
          transition-all duration-1000 ease-out
          ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-40"}
        `}
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(15, 12, 11, 0.85) 0%,
              rgba(15, 12, 11, 0.62) 20%,
              rgba(15, 12, 11, 0.22) 50%
            ),
            url(${heroBg})
          `,
        }}
      />

      {/* Main Content */}
      <div
        className="
          relative z-10 flex-1 w-full max-w-[1500px]
          mx-auto flex flex-col justify-center
          items-center md:items-start
          text-center md:text-left text-white
          px-4 sm:px-6 lg:px-1
          py-10 sm:py-12 md:py-8
        "
      >
        {/* 2. Headline (Delay: 100ms) */}
        <div
          className={`
            flex flex-wrap items-center
            justify-center md:justify-start
            gap-2 sm:gap-3.5 lg:gap-4
            font-black uppercase tracking-tight leading-[1.02]
            mt-1
            transition-all duration-700 ease-out delay-100
            ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7"
            }
          `}
        >
          <div
            className="
              flex flex-col items-center md:items-start
              text-2xl sm:text-4xl md:text-[42px] lg:text-5xl
            "
          >
            <span className="text-white">COCONUT</span>
            <span className="text-[#ff3b3a]">SCRAPER</span>
          </div>

          <span
            className="
              text-white/80 text-xl sm:text-3xl md:text-4xl
              font-light px-0.5 sm:px-1
            "
          >
            +
          </span>

          <div
            className="
              flex flex-col items-center md:items-start
              text-2xl sm:text-4xl md:text-[42px] lg:text-5xl
            "
          >
            <span className="text-white">CITRUS</span>
            <span className="text-[#ffad00]">JUICER</span>
          </div>
        </div>

        {/* 3. Subtitle + SVG Underline Draw (Delay: 250ms) */}
        <div
          className={`
            mt-3 sm:mt-4 flex flex-col items-center md:items-start
            transition-all duration-700 ease-out delay-[250ms]
            ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7"
            }
          `}
        >
          <p
            className="
              text-lg sm:text-2xl md:text-[28px] lg:text-[32px]
              italic font-serif font-medium
              text-white/95 leading-tight
            "
          >
            Powerful Kitchen Innovation
          </p>

          <svg
            viewBox="0 0 220 14"
            className="w-40 sm:w-52 md:w-60 h-2.5 sm:h-3 mt-1 sm:mt-1.5"
            fill="none"
          >
            <path
              d="M4 10C65 2 155 2 216 10"
              stroke="#e62e2d"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="250"
              className={`
                transition-all duration-1000 ease-out delay-500
                ${isLoaded ? "[stroke-dashoffset:0]" : "[stroke-dashoffset:250]"}
              `}
            />
          </svg>
        </div>

        {/* 4. Key Specifications (Delay: 400ms) */}
        <div
          className={`
            mt-4 sm:mt-5 flex flex-wrap
            items-center justify-center md:justify-start
            gap-1.5 sm:gap-2.5
            text-[11px] sm:text-sm
            font-medium text-white/90
            transition-all duration-700 ease-out delay-[400ms]
            ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7"
            }
          `}
        >
          {[
            "2-in-1 Functionality",
            "200 Watts Motor",
            "Dual Speed",
          ].map((spec) => (
            <span
              key={spec}
              className="
                bg-black/40 backdrop-blur-sm
                px-2.5 sm:px-3 py-1 rounded-md
                border border-white/15
              "
            >
              {spec}
            </span>
          ))}
        </div>

        {/* 5. CTA Button (Delay: 550ms) */}
        <div
          className={`
            transition-all duration-700 ease-out delay-[550ms]
            ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-7"
            }
          `}
        >
          <button
            onClick={handleExplore}
            className="
              mt-5 sm:mt-7 group inline-flex
              items-center gap-2 sm:gap-2.5
              px-6 sm:px-8 py-3 sm:py-3.5
              rounded-lg bg-[#e62e2d]
              hover:bg-[#cc2221] hover:scale-[1.03] active:scale-[0.98]
              text-white text-xs sm:text-sm font-extrabold
              tracking-wider uppercase
              shadow-[0_10px_25px_rgba(230,46,45,0.45)]
              transition-all duration-200 cursor-pointer
            "
          >
            <span>Explore Product</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* 6. Bottom Feature Dock (Delay: 700ms) */}
      <div
        className={`
          relative z-20
          w-[96%] sm:w-[92%] lg:w-[90%]
          max-w-4xl mx-auto
          mb-3 sm:mb-6
          transition-all duration-700 ease-out delay-700
          ${isLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }
        `}
      >
        <div
          className="
            bg-white/95 backdrop-blur-md
            rounded-xl sm:rounded-2xl
            shadow-[0_18px_45px_rgba(0,0,0,0.28)]
            border border-white/60
            px-2 sm:px-5 lg:px-6
            py-2.5 sm:py-3
            flex items-center justify-between
            gap-1.5 sm:gap-4
          "
        >
          {/* Dock Label */}
          <div className="hidden md:flex flex-col shrink-0 pr-3 border-r border-gray-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#e62e2d]">
              Highlights
            </span>
            <span className="text-sm font-extrabold text-gray-900">
              Key Features
            </span>
          </div>



          {/* Feature Tabs */}

          <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 gap-1.5 sm:gap-2.5 lg:gap-3">
            {visibleFeatures.map((item) => {
              const isActive = selectedTab === item.name;
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setSelectedTab(item.name);
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`
          flex items-center gap-1.5 sm:gap-2.5
          px-2 sm:px-3 py-1.5 sm:py-2
          rounded-lg sm:rounded-xl
          text-left transition-all duration-200
          cursor-pointer min-w-0
          ${isActive
                      ? "bg-amber-50/90 ring-1 ring-[#ffad00] shadow-sm scale-[1.02]"
                      : "hover:bg-gray-100/80"
                    }
        `}
                >
                  {/* Lucide Icon */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg
          flex items-center justify-center shrink-0
          ${isActive ? "bg-white text-[#e62e2d]" : "bg-gray-100 text-gray-600"}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900 truncate">
                      {item.name}
                    </p>

                    <p className="hidden lg:block text-[10px] text-gray-500 truncate">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>



        </div>
      </div>
    </section>
  );
}

export default Hero;