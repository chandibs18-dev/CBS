// App.jsx
import useUserTracking from "./useUserTracking";
import { useLocation } from "react-router-dom";

function App() {
  useUserTracking(); // ✅ Hook inside functional component
  const location = useLocation(); // ✅ Hook inside functional component

  return (
    <div>
      <h1>Current path: {location.pathname}</h1>
    </div>
  );
}

export default App;
