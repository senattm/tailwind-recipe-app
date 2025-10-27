import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function RecipeItem({ item }) {
  const { navigate } = useContext(GlobalContext);
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={item?.image_url} 
          alt={item?.title || "Recipe image"} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
            🍽️ Recipe
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Publisher */}
        <div className="flex items-center mb-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
            {item?.publisher}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-xl text-gray-800 mb-4 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {item?.title}
        </h3>
        
        {/* Action Button */}
        <button
          onClick={() => navigate("details", { id: item?.id })}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/25 shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>View Recipe</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
