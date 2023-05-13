import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ list }) {
    return (
        <ul className="ingredients mb-4">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    );
}