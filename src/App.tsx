import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";
import Slider from "./components/Slider";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const App =() => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("All");

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, status: "To Do"}]);
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

    return (
      <div>
        <h1>Task Management App</h1>
        <TaskForm addTask={addTask} />
        <Slider onCategoryChange={setFilter} />
        <TaskList tasks={filteredTasks} />
      </div>
    );
};

export default App;


















































// import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


