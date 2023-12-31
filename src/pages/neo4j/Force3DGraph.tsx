import Force3DChart from "components/neo4j/Force3DChart"
import neo4j, { Driver, AuthToken } from 'neo4j-driver';
import MainPage from "pages/MainPage";

export default function MeshGraph() { 

    const neo4jUri = 'bolt://183.102.73.77:7687';
    const neo4jUser = 'neo4j';
    const neo4jPassword = '!dlatl00';

    const createNeo4jDriver = () : Driver => {
        const authToken: AuthToken = neo4j.auth.basic(neo4jUser, neo4jPassword);
        return neo4j.driver(neo4jUri, authToken);
    };

    const driver: Driver = createNeo4jDriver();

    driver.close();

    return (<MainPage children={<Force3DChart driver={driver} />}/>)
}