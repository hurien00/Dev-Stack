const YourStack = ({ selectedStack = [], onRemoveFromStack }) => {
  return (
    <div className="w-full lg:w-72 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm sticky top-6">
      <h3 className="text-base font-bold text-slate-900 mb-1">
        Your Stack
      </h3>

      {selectedStack.length === 0 ? (
        <>
          <p className="text-xs text-slate-400 mb-4">
            No technologies selected yet.
          </p>
          <div className="w-full py-8 border border-dashed border-slate-200 rounded-xl flex items-center justify-center text-xs text-slate-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <div className="mt-4 space-y-2.5">
          <p className="text-xs text-slate-400 mb-2">
            Selected ({selectedStack.length}) items:
          </p>
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-700">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-400">
                  {item.category}
                </span>
              </div>
              
              {onRemoveFromStack && (
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-slate-400 hover:text-red-500 text-xs font-bold transition-colors px-1 cursor-pointer"
                  title="Remove item"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;