import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation bar */}
      <nav className="bg-gray-800 p-4 flex justify-center gap-6 shadow-md">
        
        <Link to="/form" className="hover:text-blue-400 font-semibold">Form</Link>
      </nav>

      {/* Nested routes render here */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
