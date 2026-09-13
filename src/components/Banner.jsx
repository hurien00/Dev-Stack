import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Two-tone Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5E2B] via-[#E63956] to-[#9333EA] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-5xl text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, <br/>
            compare them side by side, and put together the stack that fits your <br/> 
            next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#FF6B2B] via-[#E73956] to-[#E93B82] hover:opacity-90 transition-all shadow-md cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-xl font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg lg:max-w-none">
          <img
            src={bannerImg}
            alt="Development Stack Illustration"
            className="w-full max-w-md lg:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;