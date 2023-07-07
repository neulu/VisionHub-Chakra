import { BrowserRouter, Routes, Route } from "react-router-dom";
import Force3DGraph from "pages/neo4j/Force3DGraph";
import NeoVisGraph from "pages/neo4j/NeoVisGraph";
import NotFound from "pages/common/NotFound";
import LoginForm from "pages/login/LoginForm";
import PrivateRoute from 'routes/PrivateRoute';
import DataBoard from "pages/board/DataBoard";
import NeoVizGraph from "pages/neo4j/NeoVizGraph";
// import ClusterList from "pages/cluster/ClusterList";
import ClusterDetail from "pages/cluster/ClusterDetail";
import ErrorPage from "pages/common/ErrorPage";
import CatalogList from "pages/catalogs/CatalogList";

// vision hub
import ProjectList from "pages/project/ProjectList";
import ModelList from "pages/models/ModelList";
import ExecutionList from "pages/execution/ExecutionList";
import TestList from "pages/test/TestList";
import UserList from "pages/user/UserList";
import ClusterList from "pages/cluster/ClusterList";
import StorageList from "pages/storage/StorageList";

export default function Router() { 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoute authentication={false}/>}>
                        <Route path="/login" element={ <LoginForm /> } />    
                    </Route>
                    <Route element={<PrivateRoute authentication={true}/>}>
                        {/* <Route index element={ <DataBoard /> }/> */}
                        {/* ------------------ */}
                        <Route index element={ <ProjectList /> }/>
                        <Route path="/project" element={ <ProjectList /> } />
                        <Route path="/models" element={ <ModelList /> } />
                        <Route path="/execution" element={ <ExecutionList /> } />
                        <Route path="/test" element={ <TestList /> } />
                        <Route path="/user" element={ <UserList /> } />
                        <Route path="/cluster" element={ <ClusterList /> } />
                        <Route path="/storage" element={ <StorageList /> } />
                        {/* ------------------ */}
                        <Route path="/cluster/:cluster_name" element={ <ClusterDetail /> } />
                        <Route path="/catalogs" element={ <CatalogList />} />
                        <Route path="/neo4j/neoforce" element={ <Force3DGraph />} />
                        <Route path="/neo4j/neovis" element={ <NeoVisGraph />} />
                        <Route path="/neo4j/neoviz" element={ <NeoVizGraph /> } />
                        <Route path="/errorpage" element={<ErrorPage /> } />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}