import React from "react";
import Recipe from "./Recipe";
import StarRating from "./StarRating";

function Menu({ recipes }) {
    return (
        <article>
            <header>
                <h1 className="m-4 text-4xl font-medium tracking-tight text-gray-900">Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
            {/* <div className="starRating flex pt-2">
                <StarRating />
            </div> */}
        </article>
    );
}

export default Menu;