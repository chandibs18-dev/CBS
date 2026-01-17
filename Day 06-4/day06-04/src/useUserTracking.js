// useUserTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useUserTracking() {
  const location = useLocation();

  useEffect(() => {
    console.log("User visited:", location.pathname);
    // You can send this to an API instead of console.log
  }, [location]);
}
