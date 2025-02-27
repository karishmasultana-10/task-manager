import React, { useState } from "react";
 interface Task{
    id: number;
    title: string;
    description: string;
    status: string;
 }

 const TaskForm = ({ addTask }: { addTask: (task: Task) => void })=> {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title || !description) return;

        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            status,
        };
        addTask(newTask);
        setTitle("");
        setDescription("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Add Task</button>

        </form>
    )
 }
 export default TaskForm;