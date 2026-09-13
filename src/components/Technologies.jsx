import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from public/data.json
  useEffect(() => {
   
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching technologies data:", err);
        setLoading(false);
      });
  }, []);

  // Handler for adding items to stack
  const handleAddToStack = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`);
    } else {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  // Handler for removing single item from stack
  const handleRemoveFromStack = (techId) => {
    const itemToRemove = selectedStack.find((item) => item.id === techId);
    setSelectedStack(selectedStack.filter((item) => item.id !== techId));
    if (itemToRemove) {
      toast.error(`${itemToRemove.name} removed from stack!`);
    }
  };

  // Handler for removing all items
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <section className="w-full bg-[#FAFAFA] min-h-screen py-10 px-4 sm:px-6 lg:px-12">
      {/* Toast Notification Container */}
      <ToastContainer position="bottom-right" autoClose={2000} />

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

        {/* Loading Spinner / State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-[#E63956] rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium text-sm">Loading Technologies...</p>
          </div>
        ) : (
          /* Main Content Layout */
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: Technology Cards */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);
                return (
                  <div
                    key={tech.id}
                    className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div>
                      {/* Top Bar: Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50">
                          {tech.icon ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-700">
                              {tech.name?.slice(0, 2)}
                            </div>
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
                      {/* Meta details */}
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

                      {/* Add Button */}
                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                          isAdded
                            ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                            : "bg-[#0B0F19] hover:bg-slate-800 text-white"
                        }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: YourStack Sidebar */}
            <YourStack
              selectedStack={selectedStack}
              onRemoveFromStack={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;