import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
