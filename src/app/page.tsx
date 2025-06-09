import StatsCardOverview from "@/components/StatsCardOverview";

export default function Home() {
  return (
    <div className="card w-full max-w-3xl mx-auto shadow-md my-8 p-5">
      <div className="card-body items-center text-center">
        <h1 className="text-center text-info text-2xl font-bold m-5">
          Daily Dose of Knowledge
        </h1>
        <p>Just for fun</p>
        <div className="card-actions">
          <a href="/math" className="btn btn-accent">
            Math Problem
          </a>
          <a href="/english" className="btn btn-warning">
            English Problem
          </a>
        </div>
      </div>{" "}
      <StatsCardOverview subject="math" />
    </div>
  );
}
