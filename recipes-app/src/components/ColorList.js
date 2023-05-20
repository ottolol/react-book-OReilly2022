// ColorList - это родительский компонент, компонента Color

import React from "react";
import Color from "./Color";

export default function ColorList({
    colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div className="color-list">
            {
                colors.map(color => (
                    <Color
                        key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                ))
            }
        </div>
    );
}


// export default function ColorList({ colors = [], onRemoveColor = f => f }) {
//     if (!colors.length) return <div className="mb-4 text-4xl font-medium tracking-tight text-gray-900">No Colors Listed. (Add a Color)</div>;
//     return (
//         <div className="colorList">
//             <h3 className="mb-4 text-4xl font-medium tracking-tight text-gray-900">ColorList component</h3>
//             {
//                 colors.map(color => (
//                     <Color key={color.id} {...color} onRemove={onRemoveColor} />
//                 ))
//             }
//         </div>
//     )
// }

// export default function ColorList({ colors = [] }) {
//     if (!colors.length) return <div>No Colors Listed.</div>;
//     return (
//         <div className="colorList">
//             <h3 className="mb-4 text-4xl font-medium tracking-tight text-gray-900">ColorList component</h3>
//             {
//                 colors.map(color => <Color key={color.id} {...color} />)
//             }
//         </div>
//     );
// }