import { connect } from "react-redux";

function DisplayCount({toDos}){
    return (
        <div>
            <h6>Number of To DOs :{toDos.length}</h6>
        </div>
    )
}

const mapStateToProps=(state)=>({toDos:state.todoReducers})
const mapDispatchToProps = (dispatch)=>({})
export default (connect(mapStateToProps,mapDispatchToProps)) (DisplayCount);

