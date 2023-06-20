import React, { useEffect, useState, useRef } from 'react';
import neo4j, { Driver } from 'neo4j-driver';
import ForceGraph3D, { NodeObject } from 'react-force-graph-3d';
import { Container, Flex, Box, Button, Accordion, AccordionItem,
    AccordionButton, AccordionPanel, AccordionIcon, UnorderedList,
    ListItem, Text 
} from '@chakra-ui/react'

interface GraphVisualizationProps {
  driver: Driver;
}

interface Node {
    id: string;
    label: string;
}

interface Link {
    source: string;
    target: string;
}

const Force3DChart: React.FC<GraphVisualizationProps> = ({ driver }) => {
    
    const [graphData, setGraphData] = useState<{ nodes: Node[]; links: Link[] }>({ nodes: [], links: [] });
    const [selectedNodes, setSelectedNodes] = useState<NodeObject[]>([]);

    useEffect(() => {

        const initializeGraph = async () => {

            const session = driver.session();

            // Retrieve graph data from Neo4j
            const result = await session.run(
                'MATCH (m:Movie)<-[:ACTED_IN]-(p:Person) RETURN m.title as movie, p.name as person'
            );            

            const movies = new Set<string>();
            const persons = new Set<string>();

            result.records.forEach(record => {
                movies.add(record.get('movie'));
                persons.add(record.get('person'));
            });


            const nodes: Node[] = Array.from(movies).map(movie => ({ id: movie, label: 'Movie' }));
            Array.from(persons).forEach(person => {
                nodes.push({ id: person, label: 'Person' });
            });

            const links: Link[] = result.records.map(record => ({
                source: record.get('person'),
                target: record.get('movie'),
            }));

            setGraphData({ nodes, links });
        };

        initializeGraph();

    }, [driver]);

    const handleNodeClick = (node: NodeObject, event: MouseEvent) => {
        if(!selectedNodes.includes(node)) setSelectedNodes([...selectedNodes, node]);
    };

    const handleDeselect = () : void => { 
        setSelectedNodes([])
    }

    return (
        <>
            <Container maxW={'max'}>
                <Flex p={0}>
                    <Box flex='1' bg='white' textAlign={'left'}>
                        <ForceGraph3D 
                            width={900}
                            height={850}
                            graphData={graphData} 
                            nodeAutoColorBy={'id'}
                            nodeVal={`size`}
                            linkAutoColorBy={'id'}
                            linkWidth={`size`} 
                            linkDirectionalParticles={'weight'}
                            linkDirectionalParticleSpeed={'weight'}
                            nodeLabel={ (node) => `${node.label}: ${node.id}` }
                            // onNodeHover={ () => console.log('node hover..')}
                            onNodeClick={handleNodeClick}
                        />
                    </Box>
                    {/* <Box flex='1' p={10} bg='white' width={'400px'} >
                        <Flex>
                            선택 개수: {selectedNodes.length || 0}
                            <Box flex='1' marginRight={10}></Box>
                            <Button colorScheme='teal' size='xs' onClick={()=> handleDeselect()}>Deselect</Button>
                        </Flex>
                        {selectedNodes.length > 0 && (
                            <Box marginLeft={10}>
                                <ul>
                                    {selectedNodes.map(node => (
                                    <li key={node.id}>{node.id}</li>
                                    ))}
                                </ul>
                            </Box>
                        )}
                    </Box> */}
                </Flex>
            </Container>    
        </>
    )
    
};

export default Force3DChart;