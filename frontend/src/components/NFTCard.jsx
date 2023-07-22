import { Asset } from "@airstack/airstack-react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export function NFTCard({ tokenId, tokenAddress, blockchain }) {
    return (
        <Card sx={{m:2, maxWidth: 250 }}>
        <CardActionArea>
        <div className="token-img-wrapper">
            
            <Asset
                address={tokenAddress}
                tokenId={tokenId}
                preset="small"
                error={<div>Error loading asset.</div>}
                chain={blockchain}
            />
        </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
       
    );
}

export default NFTCard;





