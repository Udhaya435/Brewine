import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

const description = [
  {
    title: "Dual Functionality:",
    text: "Easily switch between coconut scraping and citrus juicing with one versatile appliance.",
  },
  {
    title: "Easy to operate ?:",
    text: "Attach the spill tray and your chosen attachment to the FOXMO 2-in-1 Coconut Scraper and Citrus Juicer, select the speed, and press the soft-touch button to kickstart the appliance for swift and effective scraping or juicing.",
  },
  {
    title: "200W High Torque Copper Motor:",
    text: "Ensures efficient and powerful operation, making quick work of coconut scraping and citrus juicing tasks.",
  },
  {
    title: "Two-Speed Options:",
    text: "Tailor the speed to your specific needs, whether you're scraping coconut or juicing citrus fruits.",
  },
  {
    title: "304 Stainless Steel Scraping Blade:",
    text: "Specially designed with rounded teeth edges for efficient and easy coconut scraping.",
  },
  {
    title: "Specially Designed Citrus Press Cone:",
    text: "Optimized for maximum juice extraction, making it easier to prepare fresh juices.",
  },
  {
    title: "Splash Cover with Pulp and Seed Collector:",
    text: "Keeps your kitchen clean by minimizing mess and collecting by-products in one place.",
  },
  {
    title: "Super Suction Feet:",
    text: "Offers superior stability on any kitchen surface to prevent slips and spills.",
  },
  {
    title: "Cooling Fan for Ventilation:",
    text: "Prevents the motor from overheating, ensuring the appliance's longevity and safe operation.",
  },
];

const specifications = [
  {
    label: "Product Name",
    value:
      "Brewine 2-in-1 Coconut Scraper & Citrus Juicer with Dual Speed Settings, Cooling Fan for Ventilation, Stainless Steel Scraping Blade, Splash Guard, Super Suction Feet for Stability, Red, 200 Watts",
  },
  {
    label: "SKU",
    value: "BCSCP",
  },
  {
    label: "Category",
    value: "Appliances",
  },
  {
    label: "Sub-Category",
    value: "-",
  },
  {
    label: "Brand",
    value: "BREWINE",
  },
  {
    label: "Unit",
    value: "Pieces",
  },
];

function ProductDetails() {
  const [activeTab, setActiveTab] = useState("description");
  const [isVisible, setIsVisible] = useState(false);
  const [tabReady, setTabReady] = useState(false);
  const sectionRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Product Demonstration 01",
      url: "https://www.youtube.com/embed/NAdX1jllQpQ",
    },
    {
      id: 2,
      title: "Product Demonstration 02",
      url: "https://www.youtube.com/embed/usP3jvVTyMo",
    },
  ];

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "video", label: "Video" },
  ];

  // Scroll செய்து இந்த section-க்கு வரும்போது open ஆகும்
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTabReady(true);
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

  // Tab மாற்றும்போது smooth re-trigger animation
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setTabReady(false);
    setActiveTab(tabId);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTabReady(true);
      });
    });
  };

  return (
    <section
      id="specifications"
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 lg:py-3 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-1">
        {/* ================= TABS ================= */}
        <div
          className={`
            border-b border-gray-200 overflow-x-auto no-scrollbar
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <div className="flex items-center justify-start sm:justify-center gap-1 sm:gap-8 min-w-max">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative px-4 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "text-[#e62e2d] font-semibold"
                      : "text-gray-600 hover:text-[#e62e2d]"
                  }`}
                >
                  {tab.label}

                  {/* Animated Active Tab Underline */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] bg-[#e62e2d] rounded-t-full
                      transition-all duration-300 ease-out
                      ${isSelected ? "w-full opacity-100" : "w-0 opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="pt-6 sm:pt-10">
          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div
              className={`
                bg-[#fafafa] border border-gray-200/80 rounded-2xl p-4 sm:p-7 lg:p-8
                transition-all duration-500 ease-out
                ${
                  tabReady
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
                {description.map((item, index) => (
                  <li
                    key={index}
                    style={{ transitionDelay: `${index * 60}ms` }}
                    className={`
                      flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl
                      border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]
                      hover:shadow-md hover:border-red-100 hover:-translate-y-0.5
                      text-xs sm:text-[15px] text-gray-700 leading-relaxed
                      transition-all duration-500 ease-out
                      ${
                        !item.title
                          ? "md:col-span-2 bg-amber-50/60 border-amber-200/70 text-amber-950"
                          : ""
                      }
                      ${
                        tabReady
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
                    `}
                  >
                    <span
                      className={`mt-2 w-2 h-2 rounded-full shrink-0 ${
                        !item.title ? "bg-amber-500" : "bg-[#e62e2d]"
                      }`}
                    />

                    <p>
                      {item.title && (
                        <span className="font-bold text-gray-900 block sm:inline mb-0.5 sm:mb-0">
                          {item.title}{" "}
                        </span>
                      )}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SPECIFICATION */}
          {activeTab === "specification" && (
            <div
              className={`
                rounded-2xl border border-gray-200 overflow-hidden shadow-xs
                transition-all duration-500 ease-out
                ${
                  tabReady
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="divide-y divide-gray-200">
                {specifications.map((item, index) => (
                  <div
                    key={index}
                    style={{ transitionDelay: `${index * 70}ms` }}
                    className={`
                      grid grid-cols-1 sm:grid-cols-[220px_1fr] md:grid-cols-[300px_1fr]
                      transition-all duration-500 ease-out
                      ${index % 2 === 0 ? "bg-gray-50/70" : "bg-white"}
                      hover:bg-red-50/20
                      ${
                        tabReady
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }
                    `}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-5 text-xs sm:text-[15px] font-semibold text-gray-900 border-b sm:border-b-0 sm:border-r border-gray-200 bg-gray-100/50 sm:bg-transparent">
                      {item.label}
                    </div>

                    <div className="px-4 sm:px-6 py-3.5 sm:py-5 text-xs sm:text-[15px] text-gray-700 leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIDEO TAB */}
          {activeTab === "video" && (
            <div
              className={`
                transition-all duration-500 ease-out
                ${
                  tabReady
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="text-center mb-7 sm:mb-10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#e62e2d]">
                  Watch & Explore
                </span>

                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Explore our product features and discover how it works.
                </p>
              </div>

              {/* TWO VIDEO GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className={`
                      group bg-white rounded-2xl overflow-hidden border border-gray-200
                      shadow-sm hover:shadow-xl hover:-translate-y-1
                      transition-all duration-500 ease-out
                      ${
                        tabReady
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-8 scale-[0.98]"
                      }
                    `}
                  >
                    {/* Video Player */}
                    <div className="relative w-full aspect-video bg-black">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>

                    {/* Video Details */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-50 group-hover:bg-[#e62e2d] group-hover:text-white flex items-center justify-center text-[#e62e2d] shrink-0 transition-colors duration-300">
                          <Play size={18} fill="currentColor" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                            {video.title}
                          </h4>

                          <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
                            FOXMO Product Video
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;