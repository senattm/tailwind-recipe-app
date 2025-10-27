import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading, searchParam } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Searching...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-red-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-16 relative">
        {recipeList.length === 0 && !searchParam && (
          <div className="text-center py-20">
            <div className="mb-12 flex justify-center items-center space-x-6">
              <div
                className="text-6xl animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                🍳
              </div>
              <div className="text-8xl animate-pulse">🥘</div>
              <div
                className="text-6xl animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                🍽️
              </div>
            </div>

            <h1 className="text-4xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6 leading-tight">
              Discover Amazing
              <br />
              <span className="text-5xl lg:text-6xl">Recipes</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Embark on a culinary journey and discover
              <span className="font-semibold text-purple-600">
                {" "}
                delicious recipes
              </span>{" "}
              from around the world.
              <span className="italic"> Cook, share, and enjoy!</span>
            </p>

            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-purple-200/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <span className="mr-2">✨</span>
                Ready to Cook?
              </h3>
              <p className="text-gray-600 mb-6">
                Start by searching for your favorite ingredients or dish names
                in the search bar above!
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="group">
                  <div className="text-3xl mb-2 group-hover:animate-spin">
                    🔍
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Search</p>
                </div>
                <div className="group">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">
                    ❤️
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Save</p>
                </div>
                <div className="group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    👨‍🍳
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Cook</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {recipeList && recipeList.length > 0 && (
          <div>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-purple-200/30 mb-4">
                <span className="text-2xl mr-3">🎉</span>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Search Results
                </h2>
              </div>
              <p className="text-lg text-gray-700">
                Found{" "}
                <span className="font-bold text-purple-600">
                  {recipeList.length}
                </span>{" "}
                Recipes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {recipeList.map((item, index) => (
                <div
                  key={item.id || index}
                  className="animate-in fade-in-50 slide-in-from-bottom-4 duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RecipeItem item={item} />
                </div>
              ))}
            </div>
          </div>
        )}

        {recipeList.length === 0 && searchParam && (
          <div className="text-center py-20">
            <div className="mb-8 relative">
              <div className="text-8xl opacity-30 animate-pulse">😢</div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                🔍
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Oops! No recipes found
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto">
              We couldn't find any recipes for
              <span className="font-semibold text-pink-600">
                {" "}
                "{searchParam}"
              </span>
              . Let's try something else!
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-purple-200/30 shadow-xl">
              <p className="text-lg font-semibold text-gray-700 mb-4">
                💡 Popular searches:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "chicken",
                  "pasta",
                  "vegetarian",
                  "dessert",
                  "soup",
                  "salad",
                ].map((term) => (
                  <button
                    key={term}
                    className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
