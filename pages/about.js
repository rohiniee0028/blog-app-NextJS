import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Head from "next/head";
import Navbar from "../Components/Navbar";

const About = () => {

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
            <Heading textAlign={"center"}>...About Us...</Heading>

            <Box width={"70%"} m={"auto"} mt={"50px"} boxShadow={""}>
                <Text textAlign={"start"} lineHeight={"2"}>

                    Bookxpert Private Limited is a private limited company based in Guntur, India and it was incorporated officially on 20/02/2020. The corporate identification number (CIN) of this company as per the official records is U74999AP2020PTC114231 and the company registration number is 114231. Its email address is bookxpertpvtltd@gmail.com and its registered office address is F NO-101 SAI SRINIVASAM APART ASHOK NAGAR 3RD LINE, REVENUE WARD 7 GUNTUR ,Guntur,Andhra Pradesh,India,522007.

                    <br />
                    <br />

                    Bookxpert Private Limited is a with the industrial and NIC / SIC code of 74999 as per the official records. The company was registered in the year 2020 and its authorized share capital is INR 1,000,000 and paid up capital is INR 100,000. The company's business is based in the city of Guntur. The company is duly registered at Registrar of Companies, Vijayawada (RoC-Vijayawada) and is classified as the Non-govt company.

                    <br />
                    <br />

                    The major activities of this company as per the listed official records are #Other business activities #.
                    The business is led by a group of professionals from different fields and backgrounds who have the functional and technological experience. We're here to help MSMEs overcome their accounting and enforcement issues under different laws of the country.

                    <br />
                    <br />

                    As per our Research, we found out that Large Number of MSMEs are incurring Huge Losses and are struggling daily to fulfill their accounting and enforcements needs due to Constraints with respect to their Location, Lack of Fully Trained People to execute their Accounting Works, Cost Overruns to Fulfill all enforcement needs, and Poor Quality of Services provided by existing lot. To solve these Problems, our team is committed to develop creative and cost-effective real-time customized solutions catering to your needs.

                    <br />
                    <br />

                    MBA from a world-famous B-School for Entrepreneurship, Chartered accountants with two and a half decades of experience in practice, Information Technology Specialist with ten years of experience in growth and solution design, Cost Accountant and foreign faculty for SAP ERP, make up the Board of Directors.
                </Text>
            </Box>
            <br />
            <br />
            <Footer />
        </>
    );
};

export default About;