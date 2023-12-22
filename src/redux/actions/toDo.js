 import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

 //addToDO  action
 export const addToDo = (toDO) =>({
    type:ADD_TODO,
    payload:toDO
 })

 export const deleteToDo = (id)=>({
    type:DELETE_TODO,
    payload:id
 })

 export const updateToDo = (toDO,id)=>({
    type:UPDATE_TODO,
    payload:{toDO:toDO,toDOId:id}
 })