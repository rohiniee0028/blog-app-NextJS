import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { loginUser } from "../Redux/AuthReducer/authAction";
import NavOut from "../Components/NavOut";

const Login = () => {
    let dispatch = useDispatch();
    const toast = useToast();
    const Router = useRouter();

    let [form, setForm] = useState({
        email: "",
        password: "",
    });

    let handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    };

    let handleLoginSubmit = (e) => {
        dispatch(loginUser(e, form, toast,Router));
    }

    return (
        <>
            <Head>
                <title>Blog App</title>
                <meta name="description" content="Create Your own blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavOut />
            <br />
            <br />

            <Box width={{ base: "95%", sm: "95%", md: "60%", lg: "25%", xl: "25%" }} m={"auto"} mt={"120px"} bg={"gray.100"} p={"30px 40px"} rounded={"xl"}>
                <Heading textAlign={"center"}>Login</Heading>
                <FormControl mt={"20px"}>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' border={"1px solid gray"} name="email" value={form.email} onChange={(e) => handleChange(e)} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' border={"1px solid gray"} name="password" value={form.password} onChange={(e) => handleChange(e)} />
                    <Button
                        mt={"20px"}
                        width={"100%"}
                        bg={"#05a0e8"}
                        color={"white"}
                        _hover={{
                            bg: '#05a0e8',
                        }}
                        onClick={(e) => handleLoginSubmit(e)}
                    >
                        Login
                    </Button>
                    <Link href="/signup"><FormLabel textAlign={"right"} mt={"10px"} cursor={"pointer"} fontSize={"15px"} color={"gray.700"}>Signup</FormLabel></Link>
                </FormControl>
            </Box>

        </>
    );
};

export default Login;