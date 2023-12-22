import React, { useState } from 'react'
import { addToDo } from '../redux/actions/toDo';
import { connect } from 'react-redux';//provide functionality to connect redux with react
import { v4 } from 'uuid';
const AddToDo = ({addToDo}) => {
    const[toDO,setToDo] = useState({
        title:"",
        description:"",
        id:""
    });

    const handleSubmit = (args)=>{
        args.preventDefault();
        
        addToDo({...toDO,id:v4()}); //action addToDo from props
        console.log(toDO);
        setToDo({title:'',description:''});
    }
  return (
    <div style={{margin:"20px"}}>
          <div className='card' style={{padding:"10px"}}>
            <h1>Add To do Here!!</h1>
            <form onSubmit={handleSubmit}>
            <center>
                <div className='card-body'>
                    <label><strong>To DO title</strong><br/>
                    <input type='text' name='title' 
                    value={toDO.title}
                    onChange={(args)=>{setToDo({...toDO,title:args.target.value})}}
                    placeholder='enter to do title'/>
                    </label>
                    
                </div>
                <div className='card-body'>
                    <label><strong>To DO Descirption</strong><br/>
                    <textarea type='text' name='description'
                    style={{width:"300px",height:"80px",borderRadius:"10px"}}
                    placeholder='enter the discription'
                    value={toDO.description}
                    onChange={(args)=>{setToDo({...toDO,description:args.target.value})}} />
                    </label>
                    
                </div>
                <div >
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </center>
            </form>
          </div>
    </div>
  )
}
//before coming as prop
// map the action method with reducer
const mapStateToProps =(state)=>({})

const mapDispatchToProps = (dispatch)=>({
  addToDo:(toDo)=>(dispatch(addToDo(toDo))) 
  //addToDO is prop which map props addTdo with actions addToDo method
})

export default (connect(mapStateToProps,mapDispatchToProps))(AddToDo)