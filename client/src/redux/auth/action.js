export const actionTypes={
    LOADING:"LOADING",
    FAILURE:"FAILURE",
    SUCCESS:"SUCCESS",
    REGISTER:"REGISTER",
    LOGOUT:"LOGOUT"

}

// ACTION
export const loading=(data)=>{
    return{
        type:actionTypes.LOADING,
        payload:data
    }
}
export const success=(user)=>{
    return{
        type:actionTypes.SUCCESS,
        payload:user
    }
}
export const failure=(data)=>{
    return{
        type:actionTypes.FAILURE,
        payload:data
    }
}
export const register=()=>{
    return{
        type:actionTypes.REGISTER,
    }
}
export const logout=(data)=>{
    return{
        type:actionTypes.LOGOUT,
    }
}

