import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading, searchParam } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          <p className="mt-6 text-xl text-gray-600 font-medium">
            Searching for delicious recipes...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        
        {/* Hero Section */}
        {recipeList.length === 0 && !searchParam && (
          <div className="text-center py-20">
            <div className="mb-8 text-8xl">🍽️</div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Discover Amazing Recipes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Search for your favorite dishes and discover new culinary adventures from around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 bg-white rounded-full border">🍕 Pizza</span>
              <span className="px-3 py-1 bg-white rounded-full border">🍝 Pasta</span>
              <span className="px-3 py-1 bg-white rounded-full border">🥗 Salad</span>
              <span className="px-3 py-1 bg-white rounded-full border">🍰 Dessert</span>
              <span className="px-3 py-1 bg-white rounded-full border">🍲 Soup</span>
            </div>
          </div>
        )}

        {/* Search Results */}
        {recipeList && recipeList.length > 0 && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Search Results
              </h2>
              <p className="text-gray-600">
                Found {recipeList.length} delicious recipes for "{searchParam}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {recipeList.map((item, index) => (
                <RecipeItem key={item.id || index} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {recipeList.length === 0 && searchParam && (
          <div className="text-center py-20">
            <div className="mb-8 text-6xl opacity-50">🔍</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              No recipes found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any recipes for "{searchParam}". Try searching for something else!
            </p>
            <div className="text-sm text-gray-500">
              <p>Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-3 py-1 bg-white rounded-full border cursor-pointer hover:bg-orange-50">chicken</span>
                <span className="px-3 py-1 bg-white rounded-full border cursor-pointer hover:bg-orange-50">pasta</span>
                <span className="px-3 py-1 bg-white rounded-full border cursor-pointer hover:bg-orange-50">vegetarian</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}