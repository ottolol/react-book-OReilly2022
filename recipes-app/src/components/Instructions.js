import React from "react";

export default function Instructions({ title, steps }) {
    return (
        <section className="instructions flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none text-white">
            <h2 className="font-semibold">{title}</h2>
            {steps.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </section>
    );
}