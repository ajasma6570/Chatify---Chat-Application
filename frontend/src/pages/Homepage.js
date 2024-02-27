import React, { useEffect } from "react";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup.js";
import { useNavigate } from "react-router-dom";

export default function Homepage() {

  const navigate = useNavigate();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if(user) navigate('/chats')
  },[navigate])


  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text textAlign="center" fontSize="4xl" fontFamily="Work sans">
          Chatify
        </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" >
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
