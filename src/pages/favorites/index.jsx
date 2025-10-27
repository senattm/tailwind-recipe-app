import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList, navigate } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="mb-6 text-6xl">❤️</div>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Your Favorite Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All your saved recipes in one place. Cook what you love!
          </p>
        </div>

        {/* Favorites Content */}
        {favoritesList && favoritesList.length > 0 ? (
          <div>
            {/* Stats */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center bg-white rounded-2xl px-6 py-3 shadow-lg border border-orange-100">
                <span className="text-2xl mr-2">📊</span>
                <span className="text-gray-700 font-medium">
                  {favoritesList.length} recipe{favoritesList.length !== 1 ? 's' : ''} saved
                </span>
              </div>
            </div>
            
            {/* Recipes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {favoritesList.map((item, index) => (
                <RecipeItem key={item.id || index} item={item} />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="text-8xl mb-4 opacity-30">💔</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                No favorites yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start exploring recipes and add your favorites by clicking the heart button on any recipe!
              </p>
              
              {/* Call to Action */}
              <button
                onClick={() => navigate("home")}
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">🔍</span>
                <span>Discover Recipes</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Tips */}
            <div className="max-w-md mx-auto">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">💡 Pro Tips</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <span>❤️</span>
                  <span>Click the heart to save recipes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🔍</span>
                  <span>Search for your favorite ingredients</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>Access your favorites anytime</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}