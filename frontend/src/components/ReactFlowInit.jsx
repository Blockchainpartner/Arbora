import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from "reactflow";
import NftCardNode from "./NftCardNode";

import "reactflow/dist/style.css";
import { init } from "@airstack/airstack-react";
import { useFeeData } from "wagmi";

const nodeTypes = { nftCard: NftCardNode };

//il faut que je fasse un composant intermédiaire

const initialNodes = [
    {
        id: "1",
        type: "nftCard",
        position: { x: 0, y: 0 },
        data: { label: "1" },
    },
    {
        id: "2",
        type: "nftCard",
        position: { x: 0, y: 200 },
        data: { label: "2" },
    },
    {
        id: "3",
        type: "nftCard",
        position: { x: 200, y: 200 },
        data: { label: "3" },
    },
];
const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
];

const ReactFlowInit = ({ arrayProp }) => {
    //const [initialNodes2, setInitialNodes2] = useState([]);
    const [initialized, setInitialized] = useState(false);
    console.log(arrayProp);

    const initNodes = (arrayProp) => {
        let tempInitialNodes2 = [];
        let tempX = 200;
        let tempY = 0;
        for (let i = 0; i < arrayProp.length; i++) {
            tempInitialNodes2.push({
                id: arrayProp[i].id,
                type: "nftCard",
                position: { x: i * 200, y: arrayProp[i].level * 200 },
                data: {
                    tokenAddress: arrayProp[i].tokenAddress,
                    tokenId: arrayProp[i].tokenId,
                },
            });
        }
        console.log("tempInitialNode2", tempInitialNodes2);

        return tempInitialNodes2;
        //setInitialNodes2(tempInitialNodes2);
    };

    const initialEdges2 = [
        {
            id: "e1-2",
            source: "0x8c34e6e60731d1ff7e26c712ea1f798f90f29ec6138",
            target: "0xa67571f7a10c1e30eeefa42bcdd1a9548876584c1",
        },
        {
            id: "e1-3",
            source: "0x8c34e6e60731d1ff7e26c712ea1f798f90f29ec6138",
            target: "0xa67571f7a10c1e30eeefa42bcdd1a9548876584c2",
        },
    ];

    const [nodes, setNodes, onNodesChange] = useNodesState(
        initNodes(arrayProp)
    );
    console.log("nodessss", nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges2);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    // if (initialized) {
    //     console.log("nodes2", initialNodes2);
    // }

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("This will run after 1 second!");
        //     setInitialized(true);
        // }, 1000);
        // return () => clearTimeout(timer);
        setNodes(initNodes(arrayProp));
    }, [onNodesChange]);

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {console.log("dans le return", nodes)}
            {/* {initialized && ( */}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
            {/* )} */}
        </div>
    );
};
export default ReactFlowInit;
