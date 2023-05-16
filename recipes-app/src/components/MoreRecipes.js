import React from "react";

function MoreRecipes() {
    return (
        <div className="moreRecipes">
            <h3 className="mb-4 text-4xl font-medium tracking-tight text-gray-900">More Recipes</h3>
            <section className="flex flex-row overflow-hidden rounded-3xl p-6 mb-4 shadow-lg shadow-gray-900/5 bg-white">
                <div className="me-[15px]">
                    <div className="font-semibold text-gray-900 mb-4">Mini pizza</div>
                    <div><img src="recipes1.png" alt="" className="w-80 rounded-3xl" /></div>
                </div>
                <div className="me-[15px]">
                    <div className="font-semibold text-gray-900 mb-4">Mac with chicken fillet</div>
                    <div><img src="recipes2.png" alt="" className="w-80 rounded-3xl" /></div>
                </div>
                <div className="">
                    <div className="font-semibold text-gray-900 mb-4">Chicken with fruits</div>
                    <div><img src="recipes3.png" alt="" className="w-80 rounded-3xl" /></div>
                </div>
            </section>
        </div>
    );
}

export default MoreRecipes;