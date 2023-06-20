import { BrowserRouter, Routes, Route } from "react-router-dom";
import Force3DGraph from "pages/neo4j/Force3DGraph";
import NeoVisGraph from "pages/neo4j/NeoVisGraph";
import NotFound from "pages/common/NotFound";
import LoginForm from "pages/login/LoginForm";
import PrivateRoute from 'routes/PrivateRoute';
import DataBoard from "pages/board/DataBoard";
import NeoVizGraph from "pages/neo4j/NeoVizGraph";

export default function Router() { 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoute authentication={false}/>}>
                        <Route path="/login" element={ <LoginForm /> } />    
                    </Route>
                    <Route element={<PrivateRoute authentication={true}/>}>
                        <Route index element={ <DataBoard /> }/>
                        <Route path="/neo4j/neoforce" element={ <Force3DGraph />} />
                        <Route path="/neo4j/neovis" element={ <NeoVisGraph />} />
                        <Route path="/neo4j/neoviz" element={ <NeoVizGraph /> } />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}