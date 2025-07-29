import Main from './components/main'
import Header from './components/header'
import './App.css'
import { useState } from "react"
import GeminiRecipe from './components/geminirecipe'
import IngredientsList from './components/ingredientslist'



export default function App() {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)
  const ingredient_list = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ))

  return (
    <>

      <div className="main-container">

        <Header />
        <Main addingredient={setIngredients} />
        <div>
          {ingredients.length > 0 &&

              <IngredientsList recipe={recipeShown} state={setRecipeShown} ingredient_list ={ingredient_list}/>
          }
          {recipeShown && <GeminiRecipe userInput = {ingredients} Show = {recipeShown} />
          }




        </div>
      </div>
    </>
  )
}