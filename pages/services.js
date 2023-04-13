import { Box, Heading, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

const Services = () => {

    const services = [
        {
            title: "No Security Risk",
            body: "Book Experts ensures that there will not be any risk to your financial data as the data is automatically saved and protected"
        },
        {
            title: "Account Management",
            body: "Your Account Manager takes care of your Books updating & validation on daily basis and provides you the required info to you and your people within minutes"
        },
        {
            title: "Statuory Compliance",
            body: "Your chosen Experts will be provided the required data in full and in required format for statutory and other compliances in advance for filings/submissions."
        },
        {
            title: "Audit & Filling of Returns",
            body: "Your CA will be provided with all the required data like books, Statements, schedules, reconciliations, info required for reporting etc., well in advance and in reusable shape"
        },
        {
            title: "Data Management",
            body: "In MSMEs capturing and organizing of data is a big task, we will handle the same with our advanced technologies and techniques by a least or no disturbance to the Business owners"
        },
        {
            title: "Awsome Support",
            body: "You are always connected to a single person for all your queries and required data"
        },
        {
            title: "Always Available",
            body: "Your necessities can be fulfilled on any day and any time through our online platform or through our special mobile app in your hand"
        },
        {
            title: "Tax Planning",
            body: "Since the recording and verifications is done on day to day basis you are able to plan your taxes and commitments"
        },
        {
            title: "Bank Compliances",
            body: "Cost and availability of funds will be directly proportional to quality and timeliness of our statements. With proper data and timeliness you can demand more funds at less cost now."
        }

    ]

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
            <br />
            <Heading textAlign={"center"}>...Our Services...</Heading>
            <Box m={"auto"} mt={"50px"} width={"80%"} >
                <SimpleGrid columns={[1, 2, 3, 3]} spacing='40px'>
                    {
                        services.map((el, index) => (
                            <Box key={index + 1}>
                                <Heading size={"md"} color={"gray.500"} _hover={{ color: "#05a0e8" }}>{el.title}</Heading>
                                <Text mt={"20px"} wordBreak={"break-word"}>{el.body}</Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>
            <br />
            <br />
            <Footer />
        </>
    );
};

export default Services;