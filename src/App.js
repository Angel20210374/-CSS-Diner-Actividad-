import { useEffect, useState } from "react";
import { Title } from "./components/Title/Title";
import {TodoInput} from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

const [todos,setTodos] =useState([
      {
        id: 1,
        title: 'Whach the next Marvel Movie',
        completed: false,
      },
      {
        id: 2,
        title: 'Record the next Video',
        completed: false,
      },
      {
        id:3,
        title: 'Wash the dishes',
        completed: false,
      },
      {
        id:4,
        title: 'Study 2 hours',
        completed: false,
      }

])

const [activeFilter, setActiveFilter] = useState('all')
const [filteredTodos, setFilteredTodos] = useState(todos)

const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos [todos.length - 1].id : 1;

    const newTodo ={
      id: lastId + 1,
      title,
      completed: false
    }

    const TodoList = [...todos]
    TodoList.push(newTodo);
    setTodos(TodoList);
}

const handleSetComplete = (id) => {
  const updateList = todos.map(todo =>{
    if (todo.id === id) {
      return {...todo, completed: !todo.completed}
    }
    return todo

  })

  setTodos(updateList);
}

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  }
   

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed);
    setActiveFilter(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showAactiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if(activeFilter === 'all') {
      setFilteredTodos(todos)
    } else  if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos (activeTodos)
    } else if (activeFilter === 'completed'){
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  },[activeFilter,todos])

  return (
    <div className="bg-gray-900 min-h-screen h-full  text-gray-100 flex itmes-center justify-center py-20 px-5" >
      <div className="container flex-col max-w-xl">
        <Title/>
        <TodoInput addTodo={addTodo} />
        <TodoList 
         todos={filteredTodos} 
         activeFilter={activeFilter}
         handleSetComplete={handleSetComplete}
         handleDelete={handleDelete}
         showAllTodos = {showAllTodos}
         showAactiveTodos={showAactiveTodos}
         showCompletedTodos={showCompletedTodos}
         handleClearComplete={handleClearComplete}
         />
      </div>
    </div>
  );
}
export default App;