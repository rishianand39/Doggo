export const actionTypes={
    LOADING:"LOADING",
    FAILURE:"FAILURE",
    SUCCESS:"SUCCESS",

}

// ACTION
export const loading=()=>{
    return{
        type:actionTypes.LOADING,
    }
}
export const success=(user)=>{
    return{
        type:actionTypes.SUCCESS,
        payload:user
    }
}
export const failure=()=>{
    return{
        type:actionTypes.FAILURE,
    }
}


