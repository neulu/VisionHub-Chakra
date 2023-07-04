import React, { useEffect, useRef } from 'react';
import NeoVis, { NeovisConfig } from 'neovis.js';

export default function NeoVizChart() { 

    useEffect(() => {        

        // NeoVis 설정
        const config : NeovisConfig = {

            containerId: 'viz',
            neo4j: {
                serverUrl: "bolt://183.102.73.77:7687",
                serverUser: "neo4j",
                serverPassword: "!dlatl00"
            },
            labels: {
                Character: {
                    label: "name",
                    value: "pagerank",
                    group: "community",
                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
                        function: {
                            title: (node : any) => NeoVis.objectToTitleHtml(node, [
                                "name",
                                "pagerank"
                            ])
                        }
                    }
                }
            },
            relationships: {
                INTERACTS: {
                    value: "weight"
                }
            },
            visConfig: { 
                nodes: {
                    shape: 'dot',  // dot, ellipse, circle, database, box, diamond, dot, star, triangle, triangleDown, hexagon, square
                    shadow: true,
                    font: { 
                        size: 25
                    }
                },
                autoResize: true,
                width: '900px',
                height: '880px',
                edges: {
                    arrows: {
                        to: {enabled: true}
                    }
                },
            },
            initialCypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m limit 200"
        };

        // NeoVis 인스턴스 생성
        const vis = new NeoVis(config);
        vis.render();

        // 컴포넌트 언마운트 시 NeoVis 정리
        return () => { vis.clearNetwork() }
    }, []);
    
    return <div id="viz"></div>;
}