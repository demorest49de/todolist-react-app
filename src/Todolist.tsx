import React from "react";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TasksType>
}

export const Todolist: React.FC<TodolistType> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(v => {
                    return (
                        <li key={v.id}><input type="checkbox"
                                              defaultChecked={v.isDone}
                        /> <span>{v.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}