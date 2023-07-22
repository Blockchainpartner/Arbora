
import Header from  "../components/Header";
import { styled } from '@mui/material/styles';
import Nftcollection from "../components/Nftcollection";
import { useAccount } from "wagmi";

const MainStyle = styled('div')(() => ({
  marginTop: '64px',
  paddingLeft: '100px',
  height: 'calc(100% - 64px)',
  overflowY: 'auto',
}));

export default function HomePage() {
  const { isConnected } = useAccount();

  return (
    <>

    <Header></Header>
    <MainStyle>
    {isConnected?<Nftcollection/>:'loading'}

    </MainStyle>
     
    </>
  );
}
