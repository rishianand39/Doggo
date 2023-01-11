import { actionTypes } from "./action"

export const intialState={
    isLoading:false,
    isFailure:false,
    message:"",
    user:JSON.parse(localStorage.getItem("user")) || null
}

export const authReducer=(state=intialState, {type, payload})=>{
    switch(type){
        case actionTypes.LOADING:{
            return{
              ...state,
              message:payload,
              isLoading:true  
            }
        }
        case actionTypes.SUCCESS:{
            (localStorage.setItem("user",JSON.stringify(payload)))
            return{
              ...state,
              isLoading:false,
              isFailure:false,
              message:"",
              user:payload 
            }
        }
        case actionTypes.FAILURE:{
            return{
              ...state,
              isLoading:false,
              message:payload,
              isFailure:true,  
            }
        }
        case actionTypes.REGISTER:{
          return{
            ...state,
            isLoading:false,
            message:payload,
            isFailure:false,  
          }
      }
        case actionTypes.LOGOUT:{
            localStorage.removeItem("user")
            return{
              ...state,
              message:payload,
              user:null,  
            }
        }
        default:{
            return state
        }
    }
}