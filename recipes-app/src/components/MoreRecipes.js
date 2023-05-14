import React from "react";

function MoreRecipes () {
    return (
        <div className="moreRecipes">
            <section className="flex flex-col overflow-hidden rounded-3xl p-6 mb-4 shadow-lg shadow-gray-900/5 bg-white">
                <h3 className="mb-4 text-4xl font-medium tracking-tight text-gray-900">More Recipes</h3>
                <div className="font-semibold text-gray-900 mb-4">Mini pizza</div>
                <div><img src="recipes1.png" alt="" className="w-96 rounded-3xl" /></div>
            </section>
        </div>
    );
}

export default MoreRecipes;