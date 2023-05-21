import React from "react";
import Recipe from "./Recipe";
import MoreRecipes from "./MoreRecipes";

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
            <MoreRecipes />
        </article>
    );
}

export default Menu;