import "./App.css";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import RecipeFilters from "../components/RecipeFilters";
import { useState } from "react";

interface RecipeData {
  title: string;
  category: string;
  cooking_time: number;
  date: string;
  difficulty: any;
  image_url: string;
  short_description: string;
}

function App() {
  const [recipeArrays, setRecipes] = useState<RecipeData[][]>([]);

  return (
    <div className="App">
      <Header />
      <section className="App-body">
        <h1>Welcome to the Oddbox Recipe Finder!</h1>
        <p>Enter your start date and end date below, and this page will filter your recipes by recipe category.</p>
        <RecipeFilters returnDataCallback={(data: any) => setRecipes(data)} />
        {recipeArrays.map((recipeArray) => {
          return (
            <>
              <h2>Category: {recipeArray[0].category}</h2>
              <section className="Recipe-card-container">
                {recipeArray.map((recipe) => {
                  return (
                    <RecipeCard
                      key="key"
                      title={recipe.title}
                      description={recipe.short_description}
                      image={recipe.image_url}
                      difficulty={recipe.difficulty}
                      created_at={recipe.date}
                    />
                  );
                })}
              </section>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default App;
