import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit, navigate, currentRoute } =
    useContext(GlobalContext);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("home")}
              className="group flex items-center space-x-2 text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1.5 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                🥘
              </div>
              <span className="hidden sm:block">FoodRecipe</span>
            </button>
          </div>

          <div className="flex-1 max-w-lg mx-4 lg:mx-8">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  value={searchParam}
                  onChange={(event) => setSearchParam(event.target.value)}
                  placeholder="Search delicious recipes..."
                  className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-50"
                />
              </div>
              {searchParam && (
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Search
                </button>
              )}
            </form>
          </div>

          <nav className="flex items-center space-x-1">
            <button
              onClick={() => navigate("home")}
              className={`px-4 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ${
                currentRoute === "home"
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate("favorites")}
              className={`px-4 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 relative ${
                currentRoute === "favorites"
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              <span className="flex items-center space-x-1">
                <span>❤️</span>
                <span className="hidden sm:inline">Favorites</span>
              </span>
            </button>
          </nav>
        </div>

        <div className="lg:hidden pb-4">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                value={searchParam}
                onChange={(event) => setSearchParam(event.target.value)}
                placeholder="Search recipes..."
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              {searchParam && (
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-1.5 rounded-xl text-sm font-medium hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
                >
                  Search
                </button>
              )}
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
