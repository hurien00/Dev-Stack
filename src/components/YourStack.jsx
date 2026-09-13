const YourStack = ({ selectedStack = [], onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="w-full lg:w-80 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm sticky top-6">
      {/* Title Header */}
      <h3 className="text-xl font-bold text-slate-900 mb-0.5">Your Stack</h3>
      <p className="text-sm text-slate-400 mb-6">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet"}
      </p>

      {/* Empty State vs Selected List */}
      {selectedStack.length === 0 ? (
        <div className="w-full py-10 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-xs text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {/* Selected Tech Cards */}
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-2xl shadow-2xs transition-all"
            >
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50">
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-7 h-7 object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-700">
                      {item.name?.slice(0, 2)}
                    </span>
                  )}
                </div>

                {/* Name & Category */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Remove Single Item Icon */}
              {onRemoveFromStack && (
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer transition-colors"
                  aria-label="Remove item"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}

          {/* Remove All Button */}
          {onRemoveAll && (
            <div className="pt-3">
              <button
                onClick={onRemoveAll}
                className="w-full py-3 rounded-2xl border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors cursor-pointer"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default YourStack;