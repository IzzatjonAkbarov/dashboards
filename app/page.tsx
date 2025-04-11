import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="text-xl font-bold text-black">Dashboard</div>
        <nav className="space-x-4">
          <Link href="/register">
            <span className="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700 transition">
              Register
            </span>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Home;
