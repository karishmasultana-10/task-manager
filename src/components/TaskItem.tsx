import React from "react";

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

const TaskItem = ({task }: {task: Task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>
    );
};
export default TaskItem;