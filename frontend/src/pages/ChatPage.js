import React from 'react'
import { ChatState } from '../Context/ChatProvider.js'
import { Box } from '@chakra-ui/react'
import SideDrawer from '../components/miscellaneous/SideDrawer.js'
import MyChats from '../components/MyChats.js'
import ChatBox from '../components/ChatBox.js'

export default function ChatPage() {

  const {user} = ChatState()
 
  return (
    <div style={{width:"100%"}}>
        {user && <SideDrawer/>}
    
    <Box
    display="flex"
    justifyContent="space-between"
    w="100%"
    h="91.5vh"
    p="10px"
    >
      {user && <MyChats />}
      {user && <ChatBox /> }
    </Box>
    
    </div>
  )
}
