import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './components/Recipe'
import SearchForm from './components/SearchForm'

function App() {
  //State
  const [query, setQuery] = useState('turkey')
  const [input, setInput] = useState('')
  const [results, setResults] = useState()

  //useEffect: Have an action happen on inital render of the component
  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      // console.log(response.data.hits)
      // setResults is asynchronous: Takes however long it needs depending on how large the data is!
      setResults(response.data.hits)
    })
  }, [query])

  //Functions: Great idea to have functions at the highest level so they can be passed down as props
  //functions that reside within a component that manages state, we can now interact with that state data
  //For example, our search function below needs access to the setQuery useState method!
  function search(event) {
    event.preventDefault()
    // console.log(event.target.search.value)
    //Async!
    setQuery(event.target.search.value)
  }

  function removeRecipe(recipeToRemove) {
    // console.log(recipeToRemove)
    const removed = results.filter(eachResult => eachResult.recipe.label !== recipeToRemove)
    //Async!
    setResults(removed)
  }

  //Map
  const allRecipes = results?.map((eachResult, idx) => <Recipe key={idx} recipe={eachResult.recipe} removeRecipe={removeRecipe}/>)
  return (
    <div className="App">
     <h1>Welcome To RecipEasy!</h1>
     <SearchForm input={input} setInput={setInput} search={search}/>
     <hr></hr>
     <div className='flexbox'>
      {allRecipes}
     </div>
    </div>
  );
}

export default App;
