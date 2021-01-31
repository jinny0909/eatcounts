import React, {useState, useEffect} from "react"; 
import Recipe from './Recipe'
import axios from "axios"
import './App.css';

const App = () => {

  /* For edamam API */
  const API_ID = "01ce84a2";
  const API_KEY = "4425f5693109289d5b139712e39a4634";

  const [search, setSearch] = useState("");
  const [nutrition, setNutrition] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getRecipe()
  }, [searchTerm]);

  const getRecipe = async() => {
    const data = await axios(`https://api.edamam.com/search?q=${searchTerm}&app_id=01ce84a2&app_key=4425f5693109289d5b139712e39a4634`);
    const hits = data.data.hits;
    setNutrition(hits);
    console.log({nutrition});
  }
  
  const getSearch = event => {
    event.preventDefault();
    setSearchTerm(search);
  }

  const changeTerm = event => {
    setSearch(event.target.value);
  }

  return (
    <div className= "App">
      {/* <div className = "Title">
      APP-NAME
      </div> */}
      <form className = "food-search-form" onSubmit = {getSearch}>
        <input 
        className = "food-search-input" 
        type = "text" 
        value = {search}
        onChange = {changeTerm} />
        <button className = "food-search-button" type = "submit">
        Search
        </button>
      </form> 
      <div class = "recipes"> 
      {nutrition.map(recipe =>(
        <Recipe 
        label = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        dietLabels = {recipe.recipe.dietLabels[0]}
        /*healthLabels = {recipe.recipe.healthLabels}
        totalNutrients = {recipe.recipe.totalNutrients}*/
        img = {recipe.recipe.image}/>
      ))}
      </div>
    </div>
  );
};

export default App;