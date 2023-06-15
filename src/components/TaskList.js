import React from "react";
import Task from "./Task";

function TaskList( { selectedCategory, onDelete, tasks } ) {
  
  let filteredTasks = selectedCategory === "All" || selectedCategory === undefined ? tasks : tasks.filter((task) => selectedCategory === task.category);

  return (
    <div className="tasks"> 
       {filteredTasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            onDelete={onDelete}
          />
      ))}
    </div>
  )
}

export default TaskList;
