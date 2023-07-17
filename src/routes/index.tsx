import { BrowserRouter, Routes, Route } from "react-router-dom";
import Force3DGraph from "pages/neo4j/Force3DGraph";
import NeoVisGraph from "pages/neo4j/NeoVisGraph";
import NotFound from "pages/common/NotFound";

import PrivateRoute from 'routes/PrivateRoute';
import DataBoard from "pages/board/DataBoard";
import NeoVizGraph from "pages/neo4j/NeoVizGraph";
// import ClusterList from "pages/cluster/ClusterList";
import ClusterDetail from "pages/cluster/ClusterDetail";
import ErrorPage from "pages/common/ErrorPage";
import CatalogList from "pages/catalogs/CatalogList";

// vision hub GNB
// login
import LoginForm from "pages/login/LoginForm";
// 알람 / 내 정보관리
import AlarmList from "pages/common/AlarmList";
import AccountMng from "pages/common/AccountMng";
// 프로젝트
import ProjectList from "pages/project/ProjectList";
import ProjectView from "pages/project/ProjectView";
import ProjectModify from "pages/project/ProjectModify";
import ProjectWrite from "pages/project/ProjectWrite";
// 모델
import ModelList from "pages/models/ModelList";
import ModelView from "pages/models/ModelView";
import ModelWrite from "pages/models/ModelWrite";
import ModelLearning from "pages/models/ModelLearning";
// 실행
import ExecutionList from "pages/execution/ExecutionList";
import ExecutionView from "pages/execution/ExecutionView";
import ExecutionViewTest from "pages/execution/ExecutionViewTest";
import ExecutionWrite from "pages/execution/ExecutionWrite";
// 테스트
import TestList from "pages/test/TestList";
import TestView from "pages/test/TestView";
import TestWrite from "pages/test/TestWrite";
// 사용자
import UserList from "pages/user/UserList";
// 클러스터
import ClusterList from "pages/cluster/ClusterList";
// 저장소
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
                        {/* 프로젝트 */}
                        <Route path="/project" element={ <ProjectList /> } />
                        <Route path="/project/projectView" element={ <ProjectView /> } />
                        <Route path="/project/projectModify" element={ <ProjectModify /> } />
                        <Route path="/project/projectWrite" element={ <ProjectWrite /> } />
                        {/* 모델 */}
                        <Route path="/models" element={ <ModelList /> } />
                        <Route path="/models/modelView" element={ <ModelView /> } />
                        <Route path="/models/modelWrite" element={ <ModelWrite /> } />
                        <Route path="/models/modelLearning" element={ <ModelLearning /> } />
                        {/* 실행 */}
                        <Route path="/execution" element={ <ExecutionList /> } />
                        <Route path="/execution/executionView" element={ <ExecutionView /> } />
                        <Route path="/execution/executionViewTest" element={ <ExecutionViewTest /> } />
                        <Route path="/execution/executionWrite" element={ <ExecutionWrite /> } />
                        {/* 테스트 */}
                        <Route path="/test" element={ <TestList /> } />
                        <Route path="/test/TestView" element={ <TestView /> } />
                        <Route path="/test/TestWrite" element={ <TestWrite /> } />
                        {/* 사용자 */}
                        <Route path="/user" element={ <UserList /> } />
                        {/* 클러스터 */}
                        <Route path="/cluster" element={ <ClusterList /> } />
                        {/* 저장소 */}
                        <Route path="/storage" element={ <StorageList /> } />
                        {/* 알람, 내정보관리 */}
                        <Route path="/common/alarmList" element={ <AlarmList /> } />
                        <Route path="/common/accountMng" element={ <AccountMng /> } />


                        {/* ----------xxxxxxxxxxxxxxxx-------- */}
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