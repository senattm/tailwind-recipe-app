import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit, navigate, currentRoute } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <button
          onClick={() => navigate("home")}
          className="hover:text-gray-700 duration-300"
        >
          FoodRecipe
        </button>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <button
            onClick={() => navigate("home")}
            className={`text-black hover:text-gray-700 duration-300 ${
              currentRoute === "home" ? "font-bold" : ""
            }`}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("favorites")}
            className={`text-black hover:text-gray-700 duration-300 ${
              currentRoute === "favorites" ? "font-bold" : ""
            }`}
          >
            Favorites
          </button>
        </li>
      </ul>
    </nav>
  );
}
