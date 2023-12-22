import React, { useState } from 'react'
import { connect } from 'react-redux';
import { deleteToDo } from '../redux/actions/toDo';
import DisplayCount from '../component/DisplayCount'
const DisplayToDo = ({toDos,deleteTodO}) => {
    
    return (
        <div>
            <div className='card'>
                <h3>All to do are Here !!!!</h3>
                <DisplayCount></DisplayCount>
                {
                    toDos.map((item, index) => (
                        <div key={index} style={{ padding: "10px" }}>
                            <div className='card'>
                                <h5>Title: {item.title}</h5>
                                <div className='card-body' >
                                    <p>{item.description}</p>
                                    <button type="button" onClick={(args)=>deleteTodO(item.id)} className="btn btn-danger">Delete</button>
                                </div>
                                

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
         console.log(state.todoReducers)
         return {toDos:state.todoReducers};
}

const mapDispatchToProps =(dispatch)=>({
    deleteTodO:(id)=>dispatch(deleteToDo(id))
})
export default (connect(mapStateToProps,mapDispatchToProps))(DisplayToDo)