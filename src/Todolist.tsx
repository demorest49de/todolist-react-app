import React from "react";
import {FilterValuesType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
    changeIsChecked: (id: number, isChecked: boolean) => void
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
                        <li style={{padding: "10px"}}
                            key={v.id}><input type="checkbox"
                                              defaultChecked={v.isDone}
                                              onClick={() => {
                                                  props.changeIsChecked(v.id, !v.isDone)
                                              }}
                        /> <span>{v.title}</span>
                            <button onClick={() => {
                                props.removeTask(v.id)
                            }}>&nbsp;&nbsp;X
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div style={{display: "flex", gap: "50px"}}>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}