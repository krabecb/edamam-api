import './Recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'

export default function Recipe({ recipe, removeRecipe }) {
    return (
        <div className="Recipe">
            <Card inverse>
                <CardImg
                    alt={recipe.label}
                    src={recipe.image}
                    style={{filter: "brightness(75%)", borderRadius: "7px 7px 0 0"}}
                />
                <CardImgOverlay>
                    <CardTitle tag="h4">{recipe.label}</CardTitle>
                    <CardText>
                        Calories: {recipe.calories}
                    </CardText>
                    <CardText>
                        Total time: {recipe.totalTime}
                    </CardText>
                </CardImgOverlay>
                <Button color="secondary" onClick={() => removeRecipe(recipe.label)}>Not interested</Button>
            </Card>
        </div>
    )
}