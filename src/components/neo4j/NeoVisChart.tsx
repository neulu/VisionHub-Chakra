import React, { useEffect, useRef } from 'react';
import NeoVis, { NeovisConfig } from 'neovis.js';

export default function NeoVisChart() {

    useEffect(() => {        

        // NeoVis 설정
        const config : NeovisConfig = {

            containerId: 'graph-container',
            neo4j: {
                serverUrl: "bolt://183.102.73.77:7687",
                serverUser: "neo4j",
                serverPassword: "!dlatl00"
            },
            labels: {
                Person: {
                    label: 'name',
                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
                        cypher: {
                            value: "MATCH (n) WHERE id(n) = $id RETURN n.size"
                        },
                        function: {
                            title: NeoVis.objectToTitleHtml
                        },
                    },
                },
                Movie: { 
                    label: 'title',
                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
                        cypher: {
                            value: "MATCH (n) WHERE id(n) = $id RETURN n.size"
                        },
                        function: {
                            title: NeoVis.objectToTitleHtml
                        }
                        
                    }
                }
            },
            relationships: {
                ACTED_IN: {
                    value: '40',
                    color: 'red'
                },
                DIRECTED: { 
                    value: '10',
                    color: 'blue'
                },
            },
            initialCypher: 'MATCH (p:Person)-[r:ACTED_IN]->(m:Movie) RETURN p, r, m',
            visConfig: { 
                nodes: {
                    shape: 'circle',       // box || square
                    shadow: true,
                },
                autoResize: true,
                width: '1200px',
                height: '900px',
                edges: {
                    arrows: {
                        to: {enabled: true}
                    }
                }
            }
        };

        // NeoVis 인스턴스 생성
        const vis = new NeoVis(config);
        vis.render();

        // 컴포넌트 언마운트 시 NeoVis 정리
        return () => { vis.clearNetwork() }
    }, []);

  return <div id="graph-container"></div>;
}