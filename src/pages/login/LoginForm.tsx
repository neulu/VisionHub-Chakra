import React, { useState, useRef } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { useNavigate } from 'react-router';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginForm() {
  
  type FormData = {
    username: string
    password: string
  }

  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const { register, handleSubmit, watch, clearErrors, formState: { errors } } = useForm<FormData>();

  const usernameRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate();

  const onSubmit : SubmitHandler<FormData> = (data : FormData) => {
    sessionStorage.setItem('isAuthenticated', 'true');
    navigate("/clusters")
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="blue.700" />
        <Heading color="blue.600">DataMesh</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
                  <Input {...register("username", { required: true, minLength : 6 } )} type="text" name="username" autoComplete="off" placeholder="Username" onBlur={()=>clearErrors('username')} />
                </InputGroup>     
                {errors.username && errors.username.type === "required" && (<Text fontSize='xs'>Please enter a username</Text>) }
                {errors.username && errors.username.type === "minLength" && (<Text fontSize='xs'>Please enter a username of at least 6 characters</Text>) }  
              </FormControl>            
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />} />
                  <Input { ...register("password", { required: true, minLength : 6 } )} type={showPassword ? "text" : "password"} name="password" autoComplete="off" placeholder="Password" onBlur={()=>clearErrors('password')} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}> {showPassword ? "Hide" : "Show"}</Button>
                  </InputRightElement>              
                </InputGroup>
                {errors.password && errors.password.type === "required" && (<Text fontSize='xs'>Please enter a password</Text>) }
                {errors.password && errors.password.type === "minLength" && (<Text fontSize='xs'>Please enter a password of at least 6 characters</Text>) }
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button type="submit" borderRadius={5} variant="solid" colorScheme="blue" width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Create new account?{" "}
        <Link color="blue.600" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};