import { FAILURE_BLOG, REQUEST_BLOG, POST_SUCCESS_BLOG, GET_SUCCESS_BLOG} from "./blogActionTypes";

const initState = {
    isLoading:false,
    isError:false,
    blogs : []
}

export const BlogReducer = (state=initState,action) =>{
  switch(action.type){
    case REQUEST_BLOG:{
        return {
            ...state,
            isLoading:true,
            isError:false,
        } 
    }
    case POST_SUCCESS_BLOG: {
		return {
			...state,
            isLoading : false,
            isError : false,
		};
	}
    case GET_SUCCESS_BLOG: {
		return {
			...state,
            isLoading : false,
            isError : false,
            blogs : action.payload
		};
	}
    case FAILURE_BLOG:{
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