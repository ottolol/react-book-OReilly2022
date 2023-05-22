import React from "react";
// import StarRating from "../recipes-app/src/components/StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
    id,
    title,
    color,
    rating,
    onRemove = f => f,
    onRate = f => f
}) {
    return (
        <section className="rounded-3xl p-6 mb-4 shadow-lg shadow-gray-900/5">
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <div className="starRating flex">
                {/* <StarRating
                    selectedStars={rating}
                    onRate={rating => onRate(id, rating)}
                /> */}
            </div>
        </section>
    );
}

// export default function Color({ id, title, color, rating, onRemove = f => f }) {
//     return (
//         <section>
//             <h1>{title}</h1>
//             <button onClick={() => onRemove(id)}>
//                 <FaTrash />
//             </button>
//             <div style={{ height: 50, backgroundColor: color }} />
//             <div className="flex"><StarRating selectedStars={rating} /></div>
//         </section>
//     );
// }

// export default function Color({ title, color, rating }) {
//     return (
//         <section>
//             <h1>{title}</h1>
//             <div style={{ height: 50, backgroundColor: color }} />
//             <StarRating selectedStars={rating} />
//         </section>
//     );
// }