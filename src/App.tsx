import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Redux", isDone: false}
]

function App() {
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

function removeTask(id: number) {
    // tasks = tasks.filter(task => {
    //     if (task.id === id) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    let result = tasks.filter(task => task.id !== id)
    console.log(' tasks: ', result);
}

export default App;

