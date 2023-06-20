import React, { useEffect, useState } from 'react'
import MainPage from 'pages/MainPage'
import NeoVizChart from 'components/neo4j/NeoVizChart'

export default function NeoVizGraph() { 

    return ( 
        <>
            <MainPage children={ <NeoVizChart /> } />
        </>
    )


}