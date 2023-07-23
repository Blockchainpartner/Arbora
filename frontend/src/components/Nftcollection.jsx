import React, { useEffect, useState } from "react";
import { useQuery } from "@airstack/airstack-react";
import {Box} from "@mui/material"
import { Grid, Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import NFTCard from "./NFTCard";
import TransferDialog from "./TransferDialog";
import MergeDialog from "./MergeDialog";
import Loading from "./Loading";
const  Nftcollection=({address})=> {
    const ERC721Query = `query MyQuery($owner: [Identity!]) {
        TokenBalances(input: {filter: {owner: {_in: $owner}}, blockchain: polygon}) {
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
                
              }
            }
          }
        }
      }`;
//address
    const variables = {
        owner: address,
    };
    const [filteredData, SetFilteredData] = useState([]);
    const [mode, setMode] = React.useState('');
    const [selectedNft, setSelectedNft] = useState([]);
    const [openDialogueMerge, setOpenDialogueMerge] = useState(false);
    const [openDialogueTransfer, setOpenDialogueTransfer] = useState(false);

    const [choiceActive, setChoiceActive] = useState(false);

    const { data, loading, error } = useQuery(ERC721Query, variables);


const HandleOpenWindow =()=>{
    console.log(mode)
    if(selectedNft.length>0)
    {
    if (mode === "Merge")
    {    console.log(mode,"inside merge")

    setOpenDialogueMerge(true);}
    if (mode === "Transfer")
    {console.log(mode,"inside Transfer")
        setOpenDialogueTransfer(true);}
}}
      const handleCloseTransfer = () => {
        setOpenDialogueTransfer(false);
      };
      const handleCloseMerge = () => {
        setOpenDialogueMerge(false);
      };
    
    
    const handleChange = (
        event ,
        newMode,
      ) => {
        setMode(newMode);
      };
      const handleSenfNFT =()=>{

      }
      const handleMergeNFT =()=>{

      }
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
        console.log(data,"this is data")
        const result = data.filter((nft) => nft.tokenNfts.erc6551Accounts != null);
        return result;
    };
    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
      console.log(filteredData)
    return (
    <Box sx={{ml:12,mt:12,display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center' ,textAlign:'center'}}>
<Box sx={{display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center' ,textAlign:'center'}}>
        {filteredData.map((nft, index) => {  return ( 
            <Box>
               <NFTCard 
               key={index}
               tokenNft={nft.tokenNfts}
               choiceActive={choiceActive}
               setSelectedNft={setSelectedNft}
               selectedNft={selectedNft}
                ></NFTCard>
            </Box>
          )})}
          </Box>
             <ToggleButtonGroup
             sx={{my:3,background: 'linear-gradient(to right , primary, seconday)'}}
          value={mode}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton       sx={{
        backgroundColor: 'white', // Replace this with your desired background color
        '&.Mui-selected': {
          backgroundColor: '#572ba7', // Replace this with the background color when the button is selected
        },
        '&:hover': {
          backgroundColor: '#494ae0', // Replace this with the background color on hover
        },
      }}value="Merge">Merge</ToggleButton>
          <ToggleButton        sx={{
        backgroundColor: 'white', // Replace this with your desired background color
        '&.Mui-selected': {
          backgroundColor: '#572ba7', // Replace this with the background color when the button is selected
        },
        '&:hover': {
          backgroundColor: '#494ae0', // Replace this with the background color on hover
        },
      }} value="Transfer">Transfer</ToggleButton>
        </ToggleButtonGroup>
        <Button sx={{mx:2,px:3,mb:4}} variant="contained" onClick={HandleOpenWindow} >Confirm</Button> 
        <TransferDialog open={openDialogueTransfer} handleClose={handleCloseTransfer} handleSenfNFT={handleSenfNFT}></TransferDialog>
        <MergeDialog open={openDialogueMerge} handleClose={handleCloseMerge} handleMergeNFT={handleMergeNFT} ></MergeDialog>
           </Box>
    
    );
}

export default Nftcollection;





