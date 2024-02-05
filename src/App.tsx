import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let initTasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]


    let [tasks, setTasks] = useState<Array<TasksType>>(initTasks)
    let [filter, setFilter] = useState<FilterValuesType>("all")


    let tasksForRender: Array<TasksType>;

    // debugger
    switch (filter) {
        case "active":
            tasksForRender = tasks.filter(task => !task.isDone);
            break;
        case "completed":
            tasksForRender = tasks.filter(task => task.isDone);
            break;
        default:
            tasksForRender = tasks;
            break;
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function changeIsChecked(id: number, isChecked: boolean) {
        const newArray = tasks.map(task => task.id === id ? {...task, isDone: isChecked} : task)
        setTasks(newArray)
    }

    // console.log( {...tasks[0]});
    // console.log([...tasks]);
    // console.log( {...tasks[0], isDone: false, title: 'blabla'});

    function removeTask(id: number) {
        tasks = tasks.filter(task => task.id !== id)
        setTasks(tasks)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeIsChecked={changeIsChecked}
            />
        </div>
    );
}

export default App;

