import { useEffect, useState } from "react";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  // Fetch data from public/data.json
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Error loading data.json:", err));
  }, []);

  const handleAddToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (techId) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
  };

  return (
    <section className="w-full bg-[#FAFAFA] min-h-screen py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#FF5E2B] via-[#E63956] to-[#9333EA] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Outer Flex Container for Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Side: Your Responsive Card Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div>
                  {/* Header: Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-bold text-sm">
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        tech.name?.slice(0, 2)
                      )}
                    </div>

                    {tech.badge && (
                      <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-cyan-50 text-cyan-500 border border-cyan-100">
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {tech.description}
                  </p>
                </div>

                <div>
                  {/* Meta details: Category, Difficulty, Rating */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-2 border-t border-slate-50">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                      {tech.category}
                    </span>
                    <span>{tech.difficulty}</span>
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                      <span className="text-amber-400">★</span>
                      <span>{tech.rating}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button 
                    onClick={() => handleAddToStack(tech)}
                    className="bg-black w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer hover:bg-slate-800"
                  >
                    Add To Stack
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: YourStack Sidebar Container */}
          <div className="w-full lg:w-80 shrink-0">
            <YourStack
              selectedStack={selectedStack}
              onRemoveFromStack={handleRemoveFromStack}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;