import { actionTypes } from "./action"

export const intialState={
    isLoading:false,
    isFailure:false,
    user:null
}

export const authReducer=(state=intialState, {type, payload})=>{
    switch(type){
        case actionTypes.LOADING:{
            return{
              ...state,
              isLoading:true  
            }
        }
        case actionTypes.SUCCESS:{
            return{
              ...state,
              isLoading:false,
              isFailure:false,
              user:payload 
            }
        }
        case actionTypes.FAILURE:{
            return{
              ...state,
              isLoading:false,
              isFailure:true,  
            }
        }
        default:{
            return state
        }
    }
}