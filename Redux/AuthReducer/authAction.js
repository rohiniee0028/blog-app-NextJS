import axios from "axios";
import { SUCCESS_LOGIN, USER_LOGOUT } from "./authActionTypes";

export const loginUser = (e,form,toast,Router)=>(dispatch)=>{
    e.preventDefault();
    try{
        axios.post('api/auth/login',{
            ...form
        }).then((res)=>{
            if(res.data.message === "incorrect password"){
                toast({
                    title: "Login failed",
                    description: "Password is Incoorect",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                });
            }else if(res.data.message === "success"){
                dispatch({type:SUCCESS_LOGIN, payload : {
                    name : res.data.name,
                    token : res.data.token
                }})
                let token = res.data.token
                localStorage.setItem('token',JSON.stringify(token))
                toast({
                    title: "Login Success",
                    description: "User LoggedIn Successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
                console.log("User-loggedin",res.data)
                Router.push("/blogs")        
            }
        }).catch((err)=>{
            toast({
                title: "Login failed",
                description: "Something went wrong",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
            });
            console.log(err)
        })
    }
    catch(err){
        console.log(err);
    }
    
}

export const logoutUser = () => async(dispatch)=>{
    try{
        await dispatch({type : USER_LOGOUT})
    }
    catch(err){
        console.log(err);
    }
  
}