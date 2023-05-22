// ColorOrganizer - это родительский компонент, компонента ColorList, в котром хранится состояние 

import React, { useState } from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
        <ColorList
            colors={colors}
            onRateColor={(id, rating) => {
                const newColors = colors.map(color =>
                    color.id === id ? { ...color, rating } : color
                );
                setColors(newColors);
            }}
            onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id);
                setColors(newColors);
            }}
        />
    );
}

// export default function App() {
//     const [colors, setColors] = useState(colorData);
//     return (
//         <ColorList
//             colors={colors}
//             onRemoveColor={id => {
//                 const newColors = colors.filter(color => color.id !== id);
//                 setColors(newColors);
//             }}
//         />
//     );
// }

// export default function App() {
//     const [colors] = useState(colorData);
//     return <ColorList colors={colors} />;
// }