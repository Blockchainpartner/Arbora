import { Asset } from "@airstack/airstack-react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox  from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useEffect, useState } from "react";

export function NFTCard({tokenNft,choiceActive,setSelectedNft,selectedNft} ) {
    console.log(tokenNft,"TOKEN NFT")
    const [checked, setChecked] = useState(false);
    const removeItemFromArray = (array, itemToRemove) => {
        const index = array.indexOf(itemToRemove);
        if (index !== -1) {
          const newArray = [...array]; // Create a copy of the original array
          newArray.splice(index, 1); // Remove the item at the specified index
          return newArray;
        }
        return array; // If the item is not found, return the original array
      };
      
console.log(selectedNft)
    return (
        <Card sx={{m:2,  }}>
        <CardActionArea>
        <div className="token-img-wrapper">
            
            <Asset
                address={tokenNft.erc6551Accounts[0].tokenAddress}
                tokenId={tokenNft.erc6551Accounts[0].tokenId}
                preset="small"
                error={<div>Error loading asset.</div>}
                chain={tokenNft.erc6551Accounts[0].tokenAddress.blockchain}
            />
        </div>
          <CardContent>
          <div><Typography gutterBottom variant="h5" component="div"> {"TokenID"} </Typography>  <Typography variant="body1" color="text.secondary"> {tokenNft.erc6551Accounts[0].tokenId}</Typography></div>
            {Object.keys(tokenNft.metaData).map((key) => (
       
     <div><Typography gutterBottom variant="h5" component="div"> {key} </Typography>
       <Typography variant="body1" color="text.secondary"> {tokenNft.metaData[key]}</Typography></div>
            
          
        ))}
           
  
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'}}>
        {choiceActive &&  <Checkbox checked={checked}
          onChange={e => {
            console.log(e.target.checked,"checked")
            setChecked( e.target.checked );
            if(!checked)
            {setSelectedNft(prev=>[...prev,tokenNft.erc6551Accounts[0].tokenId])}
            else{
                let newSelectedNFT = removeItemFromArray(selectedNft,tokenNft.erc6551Accounts[0].tokenId)
                setSelectedNft(newSelectedNFT)
            }
          }}  ></Checkbox>}
        </CardActions>
      </Card>
       
    );
}

export default NFTCard;





