// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import App from "./App";
import Form from "./components/Form";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Redux Provider makes the store available to all components */}
    <Provider store={store}>
      {/* BrowserRouter enables routing */}
      <BrowserRouter>
        <Routes>
          {/* Root route rendering App */}
          <Route path="/" element={<App />}>
            {/* Nested route for /form */}
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
