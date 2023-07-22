import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { Asset } from "@airstack/airstack-react";

import styles from "../styles/NftCardNode.module.css";

function NftCardNode({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className={styles.text_updater_node}>
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
            <div>
                {/* Remplacer ici par ce qu'on veut mettre dans notre custom node */}
                <p> Mon node custom </p>
                <p>{data.tokenAddress}</p>
                <p>{data.tokenId}</p>
                <Asset
                    address={data.tokenAddress}
                    tokenId={data.tokenId}
                    preset="extraSmall"
                    error={<div>Error loading asset.</div>}
                    loading={<div>Loading...</div>}
                    chain="polygon"
                /> 
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={isConnectable}
            />
        </div>
    );
}

export default NftCardNode;