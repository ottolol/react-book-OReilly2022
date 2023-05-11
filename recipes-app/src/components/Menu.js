import React from "react";
import Recipe from "./Recipe";
import StarRating from "./StarRating";

function Menu({ recipes }) {
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
            <div className="starRating">
                <StarRating />
            </div>
        </article>
    );
}

export default Menu;