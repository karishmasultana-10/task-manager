import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }: {tasks: any[]}) => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.length === 0 ? <p>No tasks available</p> : null}
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        
        </div>
    );
};
export default TaskList;