import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Details() {
  const {
    routeParams,
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
    navigate,
  } = useContext(GlobalContext);

  const id = routeParams?.id;

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    if (id) {
      getRecipeDetails();
    }
  }, [id, setRecipeDetailsData]);

  const isInFavorites =
    favoritesList &&
    favoritesList.length > 0 &&
    favoritesList.findIndex(
      (item) => item.id === recipeDetailsData?.recipe?.id
    ) !== -1;

  if (!recipeDetailsData?.recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          <p className="mt-6 text-xl text-gray-600 font-medium">
            Loading recipe details...
          </p>
        </div>
      </div>
    );
  }

  const recipe = recipeDetailsData.recipe;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate("home")}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Recipes</span>
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px]">
              <img
                src={recipe.image_url}
                alt={recipe.title || "Recipe image"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  🍽️ Recipe Details
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              {/* Publisher */}
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                  {recipe.publisher}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {recipe.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => handleAddToFavorite(recipe)}
                  className={`inline-flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${
                    isInFavorites
                      ? "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500/25 shadow-lg"
                      : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white focus:ring-orange-500/25 shadow-lg"
                  }`}
                >
                  <span className="mr-2">{isInFavorites ? "💔" : "❤️"}</span>
                  <span>
                    {isInFavorites
                      ? "Remove from Favorites"
                      : "Add to Favorites"}
                  </span>
                </button>

                <button
                  onClick={() => window.open(recipe.source_url, "_blank")}
                  className="inline-flex items-center px-6 py-3 rounded-2xl font-semibold bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/25"
                >
                  <span className="mr-2">🌐</span>
                  <span>Original Recipe</span>
                </button>
              </div>

              {/* Recipe Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm text-gray-600">Servings</div>
                  <div className="text-xl font-bold text-gray-800">
                    {recipe.servings}
                  </div>
                </div>
                <div className="bg-red-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="text-sm text-gray-600">Cook Time</div>
                  <div className="text-xl font-bold text-gray-800">
                    {recipe.cooking_time} min
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">🥄</span>
                  Ingredients
                </h2>

                <div className="space-y-3">
                  {recipe.ingredients?.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 rounded-xl p-4 hover:bg-orange-50 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-800">
                          {ingredient.quantity && (
                            <span className="text-orange-600 mr-2">
                              {ingredient.quantity} {ingredient.unit}
                            </span>
                          )}
                        </span>
                        <span className="text-gray-700">
                          {ingredient.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
