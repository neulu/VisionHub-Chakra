import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import Force3DGraph from "pages/neo4j/Force3DGraph";
import NeoVisGraph from "pages/neo4j/NeoVisGraph";
import NotFound from "pages/common/NotFound";
import LoginForm from "pages/login/LoginForm";
import PrivateRoute from 'routes/PrivateRoute';


export default function Router() { 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoute authentication={false}/>}>
                        <Route path="/login" element={ <LoginForm /> } />    
                    </Route>
                    <Route element={<PrivateRoute authentication={true}/>}>
                        <Route index element={ <MainPage/> }/>
                        <Route path="/neo4j/neoforce" element={ <Force3DGraph />} />
                        <Route path="/neo4j/neovis" element={ <NeoVisGraph />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}