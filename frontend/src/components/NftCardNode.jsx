import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { Asset } from "@airstack/airstack-react";
import { Box } from "@mui/material";
import styles from "../styles/NftCardNode.module.css";
import { Typography,CardActionArea, CardActions,CardContent,Card } from '@mui/material';

function NftCardNode({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <Box elevation={2}>
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
             <Card sx={{ }}
        onClick={()=>{window.open( `https://polygonscan.com/token/${data.tokenAddress}?a=${data.tokenId}`
        )}}>
        <CardActionArea>
        <Box sx={{
            display: 'flex',
           
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'}}>
            
        <Asset
                    address={data.tokenAddress}
                    tokenId={data.tokenId}
                    preset="extraSmall"
                    error={<div>Error loading asset.</div>}
                    loading={<div>Loading...</div>}
                    chain="polygon"
                /> 
        </Box>
          <CardContent>
          <div><Typography gutterBottom variant="h5" component="div"> {"TokenID"} </Typography>  <Typography variant="body1" color="text.secondary"> {data.tokenId}</Typography></div>
          <div><Typography gutterBottom variant="h5" component="div"> {"TokenAddress"} </Typography>  <Typography variant="body1" color="text.secondary"> {data.tokenAddress}</Typography></div>

  
          </CardContent>
        </CardActionArea>
        </Card>

        <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={isConnectable}
            />
        
        </Box>
    );
}

export default NftCardNode;