const QuestionCardSkeleton = () => {
  return (
    <div className="card w-full max-w-3xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Header with badges */}
        <div className="flex justify-between items-center mb-4">
          <div className="skeleton h-8 w-24"></div>
          <div className="skeleton h-8 w-24"></div>
        </div>

        {/* Question title */}
        <div className="skeleton h-10 w-full mb-4"></div>

        {/* Optional paragraph */}
        <div className="skeleton h-6 w-3/4 mb-6"></div>

        {/* Optional image */}
        <div className="flex justify-center mb-6">
          <div className="skeleton h-48 w-full max-w-md"></div>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border border-base-300 rounded-lg"
            >
              <div className="skeleton h-5 w-5 rounded-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
          ))}
        </div>

        {/* Submit button */}
        <div className="skeleton h-12 w-full mt-4"></div>
      </div>
    </div>
  );
};

export default QuestionCardSkeleton;
