import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import {BellIcon, ChevronDownIcon} from "@chakra-ui/icons"
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider.js'

export default function SideDrawer() {

   const [search, setSearch] = useState("")
   const [searchResult, setSearchResult] = useState([])
   const [loading, setLoading] = useState(false)
   const [loadingChat, setLoadingChat] = useState()

   const {user} = ChatState()

  return (
    <>
        <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        w='100%'
        p="5px 10px 5px 10px"
        borderWidth='5px'
        >
            <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                <Button variant='ghost'>
                <i className="fas fa-search"></i>      
                <Text display={{base:"none" ,md:"flex"}} px="4">
                Search user </Text>        
                </Button>

            </Tooltip>

            <Text fontSize="2xl" fontFamily="Work sans">
                Chatify
            </Text>

            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="2xl" m={1}/>
                    </MenuButton>
                    {/* <MenuList></MenuList> */}
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                        <Avatar size='sm' cursor='pointer' name={user.name} src={user.pic}/>
                    </MenuButton>

                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </Box>
    </>
  )
}
