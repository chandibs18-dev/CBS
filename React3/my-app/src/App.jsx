import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductList from "./ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [darkTheme, setDarkTheme] = useState(false);
  const inputRef = useRef(null);

  // Mock product data
  useEffect(() => {
    const mockData = [
      { id: 1, name: "Laptop", price: 999 },
      { id: 2, name: "Smartphone", price: 699 },
      { id: 3, name: "Headphones", price: 199 },
      { id: 4, name: "Smartwatch", price: 249 },
      { id: 5, name: "Monitor", price: 450 },
    ];
    setProducts(mockData);
    inputRef.current.focus();
  }, []);

  // Filter & Sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortOrder === "lowToHigh") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "highToLow") result.sort((a, b) => b.price - a.price);
    return result;
  }, [search, products, sortOrder]);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat transition-all duration-700
        ${
          darkTheme
            ? "bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')]"
            : "bg-[linear-gradient(rgba(255,255,255,0.55),rgba(255,255,255,0.55)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')]"
        }
      `}
    >
      {/* Glassmorphism Card */}
      <div
        className={`w-full max-w-xl rounded-2xl p-6 shadow-xl backdrop-blur-xl transition-colors
          ${
            darkTheme
              ? "bg-black/40 border border-white/10 text-white"
              : "bg-white/40 border border-white text-gray-800"
          }
        `}
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          💻 Tech Dashboard
        </h1>

        {/* Search */}
        <div className="flex gap-2 mb-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`flex-1 px-4 py-2 rounded-lg outline-none transition
              ${
                darkTheme
                  ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400"
                  : "bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500"
              }
            `}
          />
          <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
            Focus
          </button>
        </div>

        {/* Sort + Theme */}
        <div className="flex gap-2 mb-6">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={`flex-1 px-3 py-2 rounded-lg transition
              ${
                darkTheme
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }
            `}
          >
            <option value="none">Sort by Price</option>
            <option value="lowToHigh">Low → High</option>
            <option value="highToLow">High → Low</option>
          </select>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition
              ${
                darkTheme
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }
            `}
          >
            {darkTheme ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Product List */}
        <ProductList items={filteredAndSortedProducts} />
      </div>
    </div>
  );
};

export default App;
