import React from "react";

const categories = ["All", "To Do", "In Progress", "Done", "Timeout"];

const Slider =({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
    return (
        <div>
            {categories.map((category) => (
                <button key={category} onClick={() => onCategoryChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};
export default Slider;