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
import Graph from "./graph";

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
    { id: "1", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
];

const ReactFlowInit = ({ NFTArray }) => {
    console.log(NFTArray, "--------------------");
    const initEdges = (NFTArray) => {
        let result = [];

        for (let i = 0; i < NFTArray.length; i++) {
            if (NFTArray[i].hasFather) {
                result.push({
                    id: i.toString(),
                    source: NFTArray[i].fatherId,
                    target: NFTArray[i].id,
                });
            }
        }
        console.log(result, "-------------________________");
        return result;
    };
    const initNodes = (NFTArray) => {
        let tempInitialNodes2 = [];

        for (let i = 0; i < NFTArray.length; i++) {
            tempInitialNodes2.push({
                id: NFTArray[i].id,
                type: "nftCard",
                position: {
                    x: i % 2 == 1 ? 700 - i * 125 : 700 + i * 125,
                    y: 100 + NFTArray[i].level * 300,
                },
                data: {
                    tokenAddress: NFTArray[i].tokenAddress,
                    tokenId: NFTArray[i].tokenId,
                },
            });
        }
        return tempInitialNodes2;
        //setInitialNodes2(tempInitialNodes2);
    };

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {NFTArray.length > 0 && (
                <Graph
                    newArrayProp={initNodes(NFTArray)}
                    newEdges={initEdges(NFTArray)}
                ></Graph>
            )}
        </div>
    );
};
export default ReactFlowInit;
