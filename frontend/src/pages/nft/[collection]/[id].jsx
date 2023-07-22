import { useRouter } from "next/router";
import React, { useState, useEffect, use } from "react";
import ReactFlowInit from "../../../components/ReactFlowInit";
import { useQuery } from "@airstack/airstack-react";
import Header from "../../../components/Header";
import Canva from "../../../components/Canva";
const OtherQuery = `query MyQuery($tokenAddress: Address!, $tokenId: String!) {
  TokenBalance(
    input: {blockchain: polygon, tokenId: $tokenId, tokenAddress: $tokenAddress}
  ) {
    tokenNfts {
      erc6551Accounts {
        address {
          addresses
          tokenBalances {
            tokenAddress
            tokenId
          }
        }
      }
    }
  }
}`;



const IdPage = () => {
    
    const router = useRouter();
    const [loadingCanva, isLoadingCanva] = useState(true);

    const { collection, id } = router.query;

   
useEffect(()=>{
    if (collection){isLoadingCanva(false)}
},[collection])


    return (
        <div>
            <Header></Header>
           { !loadingCanva &&<Canva collection={collection} id={id}></Canva>}
        </div>
    );
};
export default IdPage;