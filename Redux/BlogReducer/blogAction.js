import axios from "axios";
import { GET_SUCCESS_BLOG, POST_SUCCESS_BLOG } from "./blogActionTypes";

//-------------------------create blog-----------------------------------------//

export const createUserBlog = (e, blog, toast, Router) => (dispatch) => {
    e.preventDefault();
    try {
        axios.post('api/blogs/blog', {
            ...blog
        }).then((res) => {
            if (res.data.message === "Invalid Inputs") {
                toast({
                    title: "Invalid input field",
                    description: "Please enter valid input",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                });
            } else if (res.data.message === "Blog created successfully") {
                dispatch({ type: POST_SUCCESS_BLOG })
                toast({
                    title: "Created",
                    description: "Blog created successfully",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                });
                Router.push("/blogs")
                console.log("RESPONSE-created-blog", res.data)
            }
        }).catch((err) => {
            toast({
                title: "Error",
                description: "Something went wrong",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
            });
            console.log(err)
        })
    }
    catch (err) {
        console.log(err);
    }

}

//----------------------------------get all blogs-------------------------------------//

export const getAllBlogs = () => (dispatch) => {
        try {
            axios.get('api/blogs/blog')
                .then((res) => {
                    console.log(res.data);
                    dispatch({ type: GET_SUCCESS_BLOG, payload: res.data })
                })
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err);
        }
}

//----------------------get searched blogs-----------------------------------//

export const getSearchBlogs = (text,toast) => (dispatch) =>{
    try{
        axios.get('/api/blogs/blog')
        .then((res)=>{
            let data = res.data.filter((el)=>{
                return el.title.toLowerCase().includes(text.toLowerCase())
            })
            dispatch({type:GET_SUCCESS_BLOG,payload:data});
            if(data.length===0){
                toast({
                    title: "No Data found",
                    description: "Sorry, searched data is not in our list",
                    status: "info",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                });
            }
            
        })
    }
    catch(err){
        console.log(err);
    }
}