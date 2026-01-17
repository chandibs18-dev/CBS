import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
        {/* Glass card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-10 max-w-4xl w-full text-white shadow-lg relative z-10">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            🏠 Welcome Home
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-6">
            Explore your dashboard, profile, and settings
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 mb-6">
            <Link
              to=""
              className="px-5 py-2 rounded-full bg-white/20 hover:bg-white hover:text-gray-900 transition"
            >
              Dashboard
            </Link>
            <Link
              to="profile"
              className="px-5 py-2 rounded-full bg-white/20 hover:bg-white hover:text-gray-900 transition"
            >
              Profile
            </Link>
            <Link
              to="settings"
              className="px-5 py-2 rounded-full bg-white/20 hover:bg-white hover:text-gray-900 transition"
            >
              Settings
            </Link>
            <Link
              to="form"
              className="px-5 py-2 rounded-full bg-white/20 hover:bg-white hover:text-gray-900 transition"
            >
              Form
            </Link>
          </nav>

          {/* Nested content area */}
          <div className="bg-black/30 p-6 rounded-lg min-h-[200px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
