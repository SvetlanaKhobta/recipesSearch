
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './myRecipesComponent';


function App() {
  const MY_ID = "4ad450ef";
  const MY_KEY = "28107a0737b28671b71d54172f88b8ab";

  const[mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");


  useEffect(() => {
  const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted} &app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits)
  setMyRecipes(data.hits) 
  }
  getRecipe()
  }, [wordSubmitted])



  const myRecipeSearch = (e) => {
  
   setMySearch(e.target.value)
   setWordSubmitted(mySearch);
   
  }

  const finalSearch = (e) => {
    e.preventDefault()
  }
  
  return (
    
<div className="App">

<div className="container">

<video autoPlay muted loop>

 <source src={video} type="video/mp4" />

</video>

<h1>Find a Recipe</h1>
</div>

<div className='container'>
     <form onSubmit={finalSearch}>
         <input  className='search' placeholder='search' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>
{myRecipes.map( (element, index ) => (
  <MyRecipesComponent key = {index}
  label = {element.recipe.label}  
  image = {element.recipe.image} 
  calories = {element.recipe.calories} 
  ingredients = {element.recipe.ingredientLines}/>
))}

</div>
    
  );
}

export default App;
