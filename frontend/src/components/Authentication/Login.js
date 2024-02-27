import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState();
    const [password , setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [hideShow,setHideShow] = useState(true)

    const toast = useToast() 
    const navigate = useNavigate();

    const handleClick = async() => {
       setLoading(true)
       if(!email || !password){
        toast({
            title: 'Please Fill all the Feilds',
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position:"top"
          })
          setLoading(false)
          return;
       }

       try {
        const config ={
            headers : {
                "Content-type":"application/json",
            } 
        }

        const {data} = await axios.post('/api/user/login',{email, password},config)
     
        toast({
            title: 'Login Successful',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position:"top"
          })
        
          localStorage.setItem("userInfo", JSON.stringify(data));
          setLoading(false);
          navigate('/chats');
       } catch (error) {
        toast({
            title:error.response.data.message, 
            status: 'error',
            duration: 5000,
            isClosable: true,
            position:"top"
          })
          setLoading(false)
       }

    }
  return (
    <VStack spacing='5px'>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter your email' value={email} readOnly={!hideShow} onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input type={show ? "text" : "password"} value={password} readOnly={!hideShow} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
           {hideShow && 
            <InputRightElement width='4.5rem'>
            <Button h="1.75rem" size="sm" onClick={(e)=>setShow(!show)}>
            {show ? "Hide" : "Show"}
            </Button>
            </InputRightElement>
           } 
           
            
            </InputGroup>
        </FormControl>

        <Button
        colorScheme='blue'
        width='100%'
        style={{marginTop:15}}
        onClick={handleClick}
        isLoading={loading}
        >
            Login
        </Button>

        <Button
        variant='solid'
        colorScheme='red'
        width='100%'
        style={{marginTop:15}}
        onClick={()=>{
            setEmail("guest@example.com");
            setPassword("123456");
            setHideShow(false)
        }}
        isLoading={loading}
        >
            Get Guest User Credentials
        </Button>

    </VStack>
  )
}
