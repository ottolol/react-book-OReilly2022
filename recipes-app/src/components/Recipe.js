import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")} className="flex flex-col overflow-hidden rounded-3xl p-6 mb-4 shadow-lg shadow-gray-900/5 bg-white">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <div className="starRating flex">
                <StarRating
                    style={{ backgroundColor: "lightblue" }}
                    onDoubleClick={e => alert("double click")}
                />
            </div>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}

export default Recipe;