import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskList, setTaskList] = useState(TASKS)
  
  function handleDelete(text){
    const updatedTasks = taskList.filter((task) => task.text !== text)
    setTaskList(updatedTasks)
  }

  function handleCategoryFilter(category){
    setSelectedCategory(category);
  }

  function handleSubmit(newTask){
    setTaskList((prevTasks) => [...prevTasks, newTask])
  }
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = { CATEGORIES } onCategoryFilter={handleCategoryFilter} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={ CATEGORIES } onTaskFormSubmit={handleSubmit}/>
      <TaskList selectedCategory={selectedCategory} onDelete={handleDelete} tasks={taskList}/>
    </div>
  );
}

export default App;
