import React from "react";

const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            {children}
        </div>
    );
}

const ItemsLeft = ({ total = 0 }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} items left
        </p>
    );
}

const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    );
}

const FilterButton = ({ action, active, filter }) => {
    return (
        <button className={`hover:text-whiter cursor-pointer transition-all duration-300 ease-in-out ${
            active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400'
        }`}>
            {filter}
        </button>
    );
}

export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton };
