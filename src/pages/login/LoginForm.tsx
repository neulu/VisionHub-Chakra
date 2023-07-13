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
  FormLabel,
  FormHelperText,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { useNavigate } from 'react-router';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
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
    navigate("/project")
  }

  return (
    <Flex flexDirection={"column"} w={"100wh"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>

      <Heading mb={'30px'}>Vision Hub</Heading>
      <Box w={{ base: "90%", md: "700px" }} border={'solid 1px #000'} p={{ base: "20px 30px", md: "35px 100px 50px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl pos={'relative'} display={'flex'} alignItems={"center"} flexWrap={'wrap'} justifyContent={'flex-end'} p={'10px 0'}>
            <FormLabel w={'180px'} fontSize={'24px'} fontWeight={'500'} m={'0'}>아이디</FormLabel>
            <Input {...register("username", { required: true, minLength : 6 } )} type={"text"} name={"username"} autoComplete={"off"} onBlur={()=>clearErrors('username')} w={'calc(100% - 180px)'} placeholder={"아이디를 입력해주세요."} />
            {errors.username && errors.username.type === "required" && (<Text pos={'absolute'} bottom={'-15px'} left={'180px'} fontSize={'sm'} color={'red.500'} >* Please enter a username</Text>) }
            {errors.username && errors.username.type === "minLength" && (<Text pos={'absolute'} bottom={'-15px'} left={'180px'} fontSize={'sm'} color={'red.500'} >* Please enter a username of at least 6 characters</Text>) }
          </FormControl>
          <FormControl pos={'relative'} display={'flex'} alignItems={"center"} flexWrap={'wrap'} justifyContent={'flex-end'} p={'10px 0'}>
            <FormLabel w={'180px'} fontSize={'24px'} fontWeight={'500'} m={'0'}>비밀번호</FormLabel>
            <InputGroup w={'calc(100% - 180px)'}>
              <Input { ...register("password", { required: true, minLength : 6 } )} type={showPassword ? "text" : "password"} name={"password"} autoComplete={"off"} placeholder={"비밀번호를 입력해주세요."} />
              <InputRightElement mr={'3px'}>
                {/* 비밀번호 hidden icon={<RiEyeOffFill />} / 비밀번호 view icon={<RiEyeFill />} */}
                <IconButton aria-label='password-hidden' icon={<RiEyeOffFill />} variant={'none'} color={'blackAlpha.400'} fontSize={'24px'} onClick={handleShowClick} />
              </InputRightElement>
            </InputGroup>
            {errors.password && errors.password.type === "required" && (<Text pos={'absolute'} bottom={'-15px'} left={'180px'} fontSize={'sm'} color={'red.500'} >* Please enter a password</Text>) }
            {errors.password && errors.password.type === "minLength" && (<Text pos={'absolute'} bottom={'-15px'} left={'180px'} fontSize={'sm'} color={'red.500'} >* Please enter a password of at least 6 characters</Text>) }
          </FormControl>

            <Button type={"submit"} w={"full"} mt={'30px'}>
              로그인
            </Button>
        </form>
      </Box>

    </Flex>
  );
};