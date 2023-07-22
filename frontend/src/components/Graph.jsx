import React from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from "reactflow";
import NftCardNode from "./NftCardNode";

const nodeTypes = { nftCard: NftCardNode };
const initialEdges2 = [
    {
        id: "1",
        source: "0xc61ba42d6315a019b01727defd9c441bb650345b1",
        target: "0xc61ba42d6315a019b01727defd9c441bb650345b2",
    },
    {
        id: "2",
        source: "0xc61ba42d6315a019b01727defd9c441bb650345b1",
        target: "0xc61ba42d6315a019b01727defd9c441bb650345b3",
    },
];
const Graph=({newArrayProp,newEdges})=> {
    console.log(newEdges,'this in6666666666666666666666666666666 newEdges')

    const [nodes, setNodes, onNodesChange] =  useNodesState(newArrayProp);
    const [edges, setEdges, onEdgesChange] = useEdgesState(newEdges);


  return (
    <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    nodeTypes={nodeTypes}
>
    <Controls />
    <MiniMap />
    <Background variant="dots" gap={12} size={1} />
</ReactFlow>
  )
}

export default Graph