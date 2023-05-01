export default function Recipe({ recipe, removeRecipe }) {
    return (
        <div className="Recipe">
            <h2>{recipe.label}</h2>
            <img src={recipe.image} />
            <p>Calories: {recipe.calories}</p>
            <p>Total time: {recipe.totalTime}</p>
            <button onClick={() => removeRecipe(recipe.label)}>Not interested</button>
        </div>
    )
}