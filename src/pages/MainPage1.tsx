import { useState } from 'react'
import { Button, useColorMode, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

export default function MainPage1() {

    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const [isAuthenticated, setIsAuthenticated] = useState<string|null>(sessionStorage.getItem('isAuthenticated'));
    
    return (
        <>
            <Box marginTop={10} marginLeft={5}>
                <Text fontSize="lg" fontWeight="bold">Current Theme Mode: {colorMode}</Text>
                
                    
                <Link to="/neo4j/neoforce">Force3DChart for Neo4j</Link><br />
                <Link to="/neo4j/neovis">NeoVisChart for Neo4j</Link><br />

                <Box marginTop={600}>
                
                </Box>
                {
                    isAuthenticated === null || isAuthenticated === 'false' ? <Button onClick={()=>{
                        navigate("/login");
                    }}>로그인</Button>:
                        <Button size={'sm'} onClick={()=>{
                            setIsAuthenticated("false");
                            sessionStorage.setItem('isAuthenticated', "false");
                            navigate("/login");
                    }}>로그아웃</Button>
                }
            </Box>
        </>
    )

}