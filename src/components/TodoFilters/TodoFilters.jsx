import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = ({
    total,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos, 
    handClearComplete,
}) => {
    return(
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All'/>
                <FilterButton action={() => showActiveTodos()} active={activeFilter}filter='Active'/>
                <FilterButton action={() => showCompletedTodos} active={activeFilter} filter='Completed'/>
            </FilterButtonContainer>

                <button onClick={() => handClearComplete()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                    Clear Completed
                </button>

        </FiltersContainer>
    )

}
export{ TodoFilters}