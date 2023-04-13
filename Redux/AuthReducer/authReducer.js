import { FAILURE_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN} from "./authActionTypes";

const initState = {
    isLoading:false,
    isError:false,
    token:"",
    name : "",
    isAuth:false
}

export const AuthReducer = (state=initState,action) =>{
  switch(action.type){
    case REQUEST_LOGIN:{
        return {
            ...state,
            isLoading:true,
            isError:false,
        } 
    }
    case SUCCESS_LOGIN: {
		return {
			...state,
            isLoading : false,
            isError : false,
            isAuth:true,
			token: action.payload.token,
            name : action.payload.name,
		};
	}
    case FAILURE_LOGIN:{
        return {
            ...state,
            isLoading:false,
            isError:true,
        } 
    }

    default: {
        return state;
    }
  }
}