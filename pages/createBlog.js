import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { createUserBlog } from "../Redux/BlogReducer/blogAction";

const createBlog = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const Router = useRouter();

    const [blog, setBlog] = useState({
        author: "",
        title: "",
        image: "",
        description: ""
    })

    //---------------------setting user inputs----------------------------------//

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }


    // ----------------------------dispatching createUserBlog function--------------------------//

    const handleCreateBlog = (e) => {
        dispatch(createUserBlog(e, blog, toast, Router));
        setBlog({
            author: "",
            title: "",
            image: "",
            description: ""
        })
    }


    return (
        <>
            <Head>
                <title>Blog App</title>
                <meta name="description" content="Create Your own blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <br />
            <Heading mt={"100px"} textAlign={"center"}>Create Your Own Blog</Heading>
            <Box width={{ base: "95%", sm: "95%", md: "60%", lg: "30%", xl: "30%" }} m={"auto"} mt={"20px"} boxShadow={'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'} p={"30px 40px"} rounded={"xl"}>
                <FormControl>
                    <FormLabel>Author</FormLabel>
                    <Input placeholder="Enter author" type="text" name="author" value={blog.author} onChange={(e) => handleChange(e)} />
                    <FormLabel>Title</FormLabel>
                    <Input placeholder="Enter title" type="text" name="title" value={blog.title} onChange={(e) => handleChange(e)} />
                    <FormLabel>Image</FormLabel>
                    <Input placeholder="Enter image url" type="text" name="image" value={blog.image} onChange={(e) => handleChange(e)} />
                    <FormLabel>Description</FormLabel>
                    <Textarea placeholder="Enter description" type="text" name="description" value={blog.description} onChange={(e) => handleChange(e)} />
                    <Button
                        onClick={(e) => handleCreateBlog(e)}
                        width={"100%"}
                        mt={"20px"}
                        bg={"#05a0e8"}
                        color={"white"}
                        _hover={{ bg: "#05a0e8" }}
                    >
                        Create
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}

export default createBlog;