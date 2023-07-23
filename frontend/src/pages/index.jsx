
import Header from  "../components/Header";
import { styled } from '@mui/material/styles';
import Nftcollection from "../components/Nftcollection";
import { useAccount } from "wagmi";
import {Box,Typography} from "@mui/material"
import WalletConnectCard from "../components/WalletConnecrCard";

const MainStyle = styled('div')(() => ({
  marginTop: '100px',
  height: 'calc(100% - 100px)',
  width:'100%',
  display:'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around ' ,

}));

export default function HomePage() {
  const { address, isConnected } = useAccount();

  return (
    <>

    <Header></Header>
    <MainStyle>
    <Box sx={{display: 'flex',
          flexDirection: 'column',
    width:'40%',
          alignContent: 'flex-start',
          ml:5
        }}> <Typography  sx ={{mb:3}} color='white' fontWeight="bold" variant="h3" component="div">
            
          Welcome to Arbora 
        </Typography>
        <Typography color='white' variant="h6" component="div">
        With Arbora, you have the power to combine your NFTs and create entirely new ones, all securely owned through the  ERC6551 standard. Visualize the interconnected tree-structure of your NFTs and effortlessly transfer ownership to fellow enthusiasts
        </Typography></Box>
      <Box sx={{display: 'flex',
          flexDirection: 'row',
          textAlign:'center',
          alignItems: 'center',
          justifyContent: 'center' ,}}>
    {isConnected?<Nftcollection address={address}/>:<WalletConnectCard></WalletConnectCard>}
    </Box>
    </MainStyle>
     
    </>
  );
}
