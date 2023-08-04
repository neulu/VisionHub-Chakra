import React, { useState, useRef } from "react";
import {
  Flex,
  Icon,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  Image,
  Avatar,
  FormControl,
  FormLabel,
  FormHelperText,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { useNavigate } from 'react-router';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { createIcon } from "@chakra-ui/react";

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
    navigate("/project")
  }


  // home icon
  const HomeAppLogo = createIcon({
    displayName: "HomeAppLogo",
    viewBox: "0 0 19 19",
    d: "M1.343 18.129c-.373 0-.69-.131-.951-.392A1.295 1.295 0 010 16.786v-2.07l4.029-3.47v6.883H1.343zm4.028 0V14.1h8.058v4.029H5.37zm9.4 0V9.484l-4.336-3.72 3.077-2.659 4.812 4.113c.15.13.266.285.35.464.084.179.126.369.126.571v8.533c0 .373-.13.69-.392.95a1.295 1.295 0 01-.95.393H14.77zM0 12.925V8.253a1.39 1.39 0 01.476-1.035L8.533.336c.13-.112.268-.196.414-.252a1.24 1.24 0 01.9 0c.15.056.29.13.42.224l2.21 1.902L0 12.925z",
  });

  return (
    <Flex flexDirection={"column"} w={"100%"} h={"100vh"} alignItems={"center"} bg={'#e4e4e4'}>
      <Flex w={"100%"} h={"50px"} alignItems={"center"} bg={'#22252b'}>
        <Icon as={HomeAppLogo} fontSize={'19px'} color={'#fff'} ml={'23px'}  />
      </Flex>

      <Flex h={"calc(100vh - 50px)"} justifyContent={"center"}  alignItems={"center"}>
        <Box w={'380px'} bg={'#fff'} borderRadius={'6px'} boxShadow='lg' p={'55px 40px 50px'}>
          <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mb={'54px'} >
            <Icon as={HomeAppLogo} fontSize={'30px'} color={'#3d6dfe'} mb={'15px'}  />
            <Image src='/assets/images/vh-login.svg' alt='Vision Hub' />
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl pos={'relative'} display={'flex'} alignItems={"center"} flexWrap={'wrap'} justifyContent={'flex-start'} p={'6px 0'}>
              <Input {...register("username", { required: true, minLength : 6 } )} type={"text"} name={"username"} autoComplete={"off"} onBlur={()=>clearErrors('username')} variant={'typeLogin'} w={'full'} placeholder={"Username or email"} />
              {errors.username && errors.username.type === "required" && (<Text pos={'absolute'} bottom={'-7px'} left={'0'} fontSize={'11px'} color={'red.500'} >* Please enter a username</Text>) }
              {errors.username && errors.username.type === "minLength" && (<Text pos={'absolute'} bottom={'-7px'} left={'0'} fontSize={'11px'} color={'red.500'} >* Please enter a username of at least 6 characters</Text>) }
            </FormControl>
            <FormControl pos={'relative'} display={'flex'} alignItems={"center"} flexWrap={'wrap'} justifyContent={'flex-start'} p={'6px 0'}>
              <Input { ...register("password", { required: true, minLength : 6 } )} type={showPassword ? "text" : "password"} name={"password"} autoComplete={"off"}   w={'full'}variant={'typeLogin'} placeholder={"Password"} />
              {errors.password && errors.password.type === "required" && (<Text pos={'absolute'} bottom={'-7px'} left={'0'} fontSize={'11px'} color={'red.500'} >* Please enter a password</Text>) }
              {errors.password && errors.password.type === "minLength" && (<Text pos={'absolute'} bottom={'-7px'} left={'0'} fontSize={'11px'} color={'red.500'} >* Please enter a password of at least 6 characters</Text>) }
            </FormControl>

              <Button type={"submit"} w={"full"} h={'48px'} fontSize={'15px'} mt={'19px'}>
                Sign in
              </Button>
          </form>
        </Box>

      </Flex>
      
      
    </Flex>
  );
};