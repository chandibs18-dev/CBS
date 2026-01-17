import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Home from "./pages/Home";
import HomeProfile from "./pages/HomeProfile";
import HomeSettings from "./pages/HomeSettings";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import "./index.css"; // Tailwind
import store from "./store/store"; // Redux store

// Router setup (declare first!)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root layout
    children: [
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
      {
        path: "home",
        element: <Home />, // Glass card dashboard
        children: [
          {
            index: true,
            element: (
              <div className="text-white text-2xl font-medium">
                🏠 Home Dashboard
              </div>
            ),
          },
          { path: "profile", element: <HomeProfile /> },
          { path: "settings", element: <HomeSettings /> },
          { path: "form", element: <Form /> },
        ],
      },
    ],
  },
]);

// Render the app **once**
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
