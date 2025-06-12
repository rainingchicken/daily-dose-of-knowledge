const StatsCardSkeleton = () => {
  return (
    <div className="card w-full max-w-3xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Best and worst Category */}
        <div className="skeleton h-20 w-full mb-6"></div>

        {/* Table */}
        <div className="flex justify-center mb-6">
          <div className="skeleton h-48 w-full max-w-md"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsCardSkeleton;
