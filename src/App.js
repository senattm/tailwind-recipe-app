import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import GlobalState, { GlobalContext } from "./context";
import { useContext } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 text-gray-700">
      <Navbar />
      <main>{renderPage()}</main>
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
