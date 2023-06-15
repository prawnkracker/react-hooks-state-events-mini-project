import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState('')
  const [taskCategory, setTaskCategory] = useState('Code')
  
  function handleTextChange(event){
    setTaskText(event.target.value)
   }
   
   function handleCategoryChange(event){
     setTaskCategory(event.target.value)
   }

   function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      text: taskText,
      category: taskCategory
    }
    onTaskFormSubmit(newTask)
    setTaskText('')
    setTaskCategory('Code')
   }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={taskText}  
        onChange={handleTextChange}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={taskCategory}>
          {categories.map((category) => {
            if (category !== 'All'){ return <option key={category}>{category}</option>}
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
