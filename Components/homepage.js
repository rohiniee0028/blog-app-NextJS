import { Button, Input, Image, Box, Heading, Text } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBlog } from "react-icons/fa";



export const HomePage = () => {

    return (
        <>
            <Box>
                <Box>
                    <Image src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png" alt="img-1" width={"100%"} height={"600px"} />
                </Box>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date= "Nov 2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://theplanetd.com/images/How-to-start-a-travel-blog.jpg" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"}
                            className="vertical-timeline-element-title">
                            Travel Blogs
                        </Text>
                        <Text>
                            A travel blog is a great way to share your personal experiences with others and inspire them to explore new places and cultures. People love reading about other travel experiences. Thus, you can provide valuable information and inspiration to others.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBlog />}
                    // contentStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}

                    >
                        <Image src="https://www.proideators.com/wp-content/uploads/2022/07/How-To-Make-Your-Career-As-A-Food-Blogger-In-India-ProiDeators.jpg" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Food Blogs
                        </Text>
                        <Text>
                        Food blogging is a feature of food journalism interlinking a gourmet interest in food, blog writing, and food photography. Food blogs are generally written by food enthusiasts often referred to as a “foodies” and can be used commercially by the blogger to earn a profit.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Dec 2022"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://blog.feedspot.com/wp-content/uploads/2016/09/Music-Blogs.jpg" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Music Blogs
                        </Text>
                        <Text>
                        A music blog is just a blog dedicated to music topics. You can get new music blogs that share up and coming releases, music review blogs that review new releases and educational music blogs. Most music blogs share music streaming options, music videos, album artwork, and publish interviews with artists.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jan 2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://www.krmangalambahadurgarh.com/wp-content/uploads/2023/02/Importance-of-Sports-2-1-1024x576-1160x665.webp" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Sports Blogs
                        </Text>
                        <Text>
                        Sports bloggers are responsible for keeping fans up-to-date with the latest developments and feature news stories about their favorite sports teams. Most sports bloggers choose a specific niche to write about a specific team or sport throughout that season.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Feb 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://img.freepik.com/free-vector/gradient-geometric-sport-youtube-thumbnail_23-2148941345.jpg" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Fitness Blogs
                        </Text>
                        <Text>
                        A fitness blog is an online tool that lets you share your best advice, information, and expertise, and other people.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="March 2023"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://bloggingguide.com/wp-content/uploads/2023/02/Best-Fashion-Blog-Examples.png" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Fashion Blogs
                        </Text>
                        <Text>
                        A fashion blog can cover many topics, such as specific items of clothing and accessories, beauty tips, trends in various apparel markets (haute couture, prêt-à-porter, etc.), celebrity fashion choices, and street fashion trends.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2023"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                        <Image src="https://images.crowdspring.com/blog/wp-content/uploads/2019/01/27130348/analysis-computer-device-1496192.jpg" alt="img-1" />
                        <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                            Buisness Blogs
                        </Text>
                        <Text>
                        It is a marketing tactic designed not only to inform readers, but to increase visibility of your organization and, ultimately, to push readers towards buying your products or services. A business blog post can vary in length but is usually short form or long form and between 1,000 and 2,500 words in length.
                        </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Sept 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBlog />}
                    >
                    <Image src="https://www.myhrtoolkit.com/hubfs/religious-discrimination-work.jpg" alt="img-1" />
                    <Text textAlign={"center"} mb={"10px"} className="vertical-timeline-element-title">
                        Religious Blogs
                    </Text>
                    <Text>
                    Religion News Blog also covers news, but with a unique approach. This website maintains a lively social media presence, often sharing fast facts about religious figures and history. At the same time, the blog delves deeper into various news pieces relating to sects, cults, and religions.
                    </Text>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Box>
        </>
    )
}