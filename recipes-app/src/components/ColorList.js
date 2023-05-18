import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [] }) {
    if (!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div className="colorList">
            <h3 className="mb-4 text-4xl font-medium tracking-tight text-gray-900">ColorList component</h3>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}