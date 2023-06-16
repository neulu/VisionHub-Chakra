import React, { useEffect, useRef } from 'react';
import NeoVis, { NeovisConfig } from 'neovis.js';

export default function MovieGraph() { 
    const visContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const visConfig : NeovisConfig = {

        containerId: 'graph',
        neo4j: {
            serverUrl: "bolt://localhost:7687",
            serverUser: "neo4j",
            serverPassword: "!dlatl00"
        },
        labels: {
            Character: {
                label: "name",
                value: "pagerank",
                group: "community"
            }
        },
        relationships: {
            INTERACTS: {
                value: "weight"
            }
        },
        initialCypher: "MATCH (n)-[r:ACTED_IN]->(m) RETURN n,r,m"
    };

    const vis = new NeoVis(visConfig);
    vis.render();

    return () => {
        vis.clearNetwork();
    };
  }, []);

  return <div id="graph" ref={visContainerRef} style={{ width: '100%', height: '600px' }} />
};

