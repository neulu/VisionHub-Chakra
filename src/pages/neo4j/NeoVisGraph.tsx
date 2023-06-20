import NeoVisChart from "components/neo4j/NeoVisChart"
import MainPage from "pages/MainPage"


export default function NeoVisGraph() { 

    return (
        <>
            <MainPage children={<NeoVisChart />} />
        </>
    )
}