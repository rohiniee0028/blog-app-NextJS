import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const Signup = () => {
    const [show, setShow] = useState(false)
    const toast = useToast();
    const Router = useRouter();

    const handleClick = () => setShow(!show);

    let [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
    });

    let handleSignupForm = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    };

    let handleSignupSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("/api/auth/signup", {
                ...form,
            })
                .then((res) => {
                    console.log("response", res);
                    if (res?.data?.message === "Invalid Inputs") {
                        toast({
                            title: "Signup failed",
                            description: "Invalid Inputs, Please enter correct inputs",
                            status: "warning",
                            duration: 2000,
                            isClosable: true,
                            position: "top",
                        });
                    }
                    else if (res?.data?.message === "User registered successfully") {
                        toast({
                            title: "Signup success",
                            description: "User successfully registered",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                            position: "top",
                        });
                        setForm({
                            name: "",
                            email: "",
                            password: "",
                            mobile: "",
                            address: ""
                        });
                        Router.push("/login");
                    }
                    else if (res?.data?.message === "User already registered") {
                        toast({
                            title: "Signup failed",
                            description: "User already Exist",
                            status: "info",
                            duration: 2000,
                            isClosable: true,
                            position: "top",
                        });
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        }
        catch (err) {
            console.log(err);
        }

    };

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
            <br />
            <Box width={{ base: "95%", sm: "95%", md: "60%", lg: "30%", xl: "30%" }} m={"auto"} mt={"50px"} bg={"gray.100"} p={"30px 40px"} rounded={"xl"}>
                <Heading textAlign={"center"}>Signup</Heading>
                <FormControl mt={"20px"}>
                    <FormLabel>Name</FormLabel>
                    <Input type='name' border={"1px solid gray"} name="name" value={form.name} onChange={(e) => handleSignupForm(e)} />
                    <FormLabel>Email</FormLabel>
                    <Input type='email' border={"1px solid gray"} name="email" value={form.email} onChange={(e) => handleSignupForm(e)} />
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            border={'1px solid gray'}
                            name="password"
                            value={form.password}
                            onChange={(e) => handleSignupForm(e)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input type='number' border={"1px solid gray"} name="mobile" value={form.mobile} onChange={(e) => handleSignupForm(e)} />
                    <FormLabel>Address</FormLabel>
                    <Input type='address' border={"1px solid gray"} name="address" value={form.address} onChange={(e) => handleSignupForm(e)} />
                    <Button
                        mt={"20px"}
                        width={"100%"}
                        bg={"#05a0e8"}
                        _hover={{
                            bg: '#05a0e8',
                        }}
                        color={"white"}
                        onClick={(e) => handleSignupSubmit(e)}
                    >
                        Signup
                    </Button>
                    <FormLabel textAlign={"right"} mt={"10px"} fontSize={"15px"} color={"gray.700"}>Already registered ? {" "}<Link href="/login" cursor={"pointer"}>Login</Link></FormLabel>
                </FormControl>
            </Box>
        </>
    );
};

export default Signup;