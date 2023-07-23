
import Header from  "../components/Header";
import { styled } from '@mui/material/styles';
import Nftcollection from "../components/Nftcollection";
import { useAccount } from "wagmi";
import {Box} from "@mui/material"
import WalletConnectCard from "../components/WalletConnecrCard";

const MainStyle = styled('div')(() => ({
  marginTop: '100px',
  height: 'calc(100% - 100px)',
  overflowY: 'auto',
}));

export default function HomePage() {
  const { address, isConnected } = useAccount();

  return (
    <>

    <Header></Header>
    <MainStyle>
    {isConnected?<Nftcollection address={address}/>:<WalletConnectCard></WalletConnectCard>}

    </MainStyle>
     
    </>
  );
}
