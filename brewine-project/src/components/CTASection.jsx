
import { useState } from "react";
import { ChevronRight, Mail, Tag, Percent } from "lucide-react";

function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">

      <div className="relative max-w-[1500px] mx-auto min-h-[112px] md:min-h-[113px] rounded-[24px] overflow-hidden bg-[#f0f4fc] flex items-center justify-center px-5 md:px-10">

        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -left-10 -top-20 w-64 h-48 bg-purple-100/50 rotate-[28deg] rounded-[40px]" />

          <div className="absolute right-0 -bottom-24 w-72 h-52 bg-blue-100/40 rotate-[-25deg] rounded-[40px]" />

          <div className="absolute top-2 left-[3%] w-3.5 h-3.5 border-[3px] border-white rounded-full" />

          <div className="absolute top-12 left-[13%] w-3.5 h-3.5 border-2 border-white rounded-full" />

          <div className="absolute top-3 left-[19%] text-white text-xl">
            △
          </div>

          <div className="absolute top-3 right-[22%] text-white text-xl">
            △
          </div>

          <div className="absolute bottom-4 right-[18%] w-3 h-3 border-2 border-white rounded-full" />

          <div className="absolute top-3 right-[5%] w-3.5 h-3.5 border-[3px] border-white rounded-full" />

          <div className="absolute bottom-2 right-[5%] text-white text-xl">
            △
          </div>

          {/* Decorative Icons */}
          <div className="absolute left-[5%] bottom-5 rotate-[-15deg] text-orange-500">
            <Percent size={29} strokeWidth={2.5} />
          </div>

          <div className="absolute left-[19%] bottom-3 rotate-[12deg] text-orange-500">
            <Mail size={32} strokeWidth={1.8} />
          </div>

          <div className="absolute right-[23%] top-10 rotate-[-12deg] text-orange-500">
            <Mail size={32} strokeWidth={1.8} />
          </div>

          <div className="absolute right-[12%] bottom-6 rotate-[35deg] text-orange-500">
            <Tag size={30} strokeWidth={2} />
          </div>

        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">

          {/* Heading */}
          <h2 className="text-[24px] md:text-[26px] font-extrabold text-[#111827] whitespace-nowrap">
            Stay Connected
          </h2>

          {/* Subscribe Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-[415px] h-[57px] bg-white border border-gray-200 rounded-full flex items-center p-1.5 shadow-sm"
          >

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Get coupons, offers, and more"
              className="flex-1 min-w-0 h-full pl-3 md:pl-4 text-[11px] md:text-[12px] text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="h-[42px] px-5 md:px-6 rounded-full bg-[#ffad00] hover:bg-[#f39c00] text-black text-[11px] font-bold flex items-center gap-3 shrink-0 transition-all duration-300"
            >
              Subscribe
              <ChevronRight size={17} strokeWidth={2.5} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default CTASection;
