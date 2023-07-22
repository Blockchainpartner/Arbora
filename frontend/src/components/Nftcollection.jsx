import React, { useEffect, useState } from "react";
import { useQuery } from "@airstack/airstack-react";
import {Box} from "@mui/material"
import { Grid, Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import NFTCard from "./NFTCard";

const  Nftcollection=()=> {
    const ERC721Query = `query MyQuery($owner: [Identity!]) {
        TokenBalances(input: {filter: {owner: {_in: $owner}}, blockchain: ethereum}) {
          TokenBalance {
            tokenNfts {
              erc6551Accounts {
                tokenId
                tokenAddress
                standard
                blockchain
                createdAtBlockTimestamp
              }
              metaData {
                name
                description
              }
            }
          }
        }
      }`;

    const variables = {
        owner: "0xcf94ba8779848141d685d44452c975c2ddc04945",
    };
    const [filteredData, SetFilteredData] = useState([]);
    const [mode, setMode] = React.useState('');
    const [selectedNft, setSelectedNft] = useState([]);
    const [choiceActive, setChoiceActive] = useState(false);

    const { data, loading, error } = useQuery(ERC721Query, variables);
console.log(selectedNft)
    const handleChange = (
        event ,
        newMode,
      ) => {
        setMode(newMode);
      };
    useEffect(() => {
        if (mode) {

            setChoiceActive(true)
        }
        else{setChoiceActive(false)}
    }, [mode]);
    useEffect(() => {
        if (data) {

            SetFilteredData(filterData(data.TokenBalances.TokenBalance));
        }
    }, [data]);

    const filterData = (data) => {
        const result = data.filter((nft) => nft.tokenNfts != null);
        return chunkArray(result,4);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const chunkArray = (arr, chunkSize) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          chunkedArr.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArr;
      };
    return (
    <Box sx={{m:12,display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center' ,textAlign:'center'}}>
        {filteredData.map((row, index) => (
        <Grid key={index} container spacing={1}>
          {row.map((nft,indexou) =>
{      
console.log(indexou+1)
console.log(index +1 )
console.log((indexou+1)*(index+10))
        return ( 
            <Grid key={indexou} item xs={3} sm={3} md={3} >
               <NFTCard 
               key={(indexou+2)*(index+10)}
               tokenNft={nft.tokenNfts}
               choiceActive={choiceActive}
               setSelectedNft={setSelectedNft}
               selectedNft={selectedNft}
                ></NFTCard>
            </Grid>
          )}
          
          )}
        </Grid>
      ))}
           <Box sx={{background: 'linear-gradient(to right , #430089, #82ffa1)',
            display: 'flex',
            width:'30%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center' ,
          mx: 2}}>

             <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Merge">Merge</ToggleButton>
          <ToggleButton value="Transfer">Transfer</ToggleButton>
        </ToggleButtonGroup><Button variant="contained" >Confirm</Button> </Box>
           </Box>
    
    );
}

export default Nftcollection;





