import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import GlobalState, { GlobalContext } from "./context";
import { useContext } from "react";

// Component to handle routing logic
function AppContent() {
  const { currentRoute } = useContext(GlobalContext);

  const renderPage = () => {
    switch (currentRoute) {
      case "home":
        return <Home />;
      case "favorites":
        return <Favorites />;
      case "details":
        return <Details />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      {renderPage()}
    </div>
  );
}

function App() {
  return (
    <GlobalState>
      <AppContent />
    </GlobalState>
  );
}

export default App;
