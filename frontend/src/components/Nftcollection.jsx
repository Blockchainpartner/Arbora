import React, { useEffect, useState } from "react";
import { useQuery } from "@airstack/airstack-react";
import {Box} from "@mui/material"
import NFTCard from "./NFTCard";

const  Nftcollection=()=> {


    const ERC721Query = `query MyQuery($owner: [Identity!]) {
  TokenBalances(
    input: {filter: {owner: {_in: $owner}}, blockchain: ethereum}
  ) {
    TokenBalance {
      tokenNfts {
        erc6551Accounts {
          tokenId
          tokenAddress
          standard
        }
      }
    }
  }
}`;

    const variables = {
        owner: "0xcf94ba8779848141d685d44452c975c2ddc04945",
    };

    const [filteredData, SetFilteredData] = useState([]);
    const { data, loading, error } = useQuery(ERC721Query, variables);


    useEffect(() => {
        if (data) {
            SetFilteredData(filterData(data.TokenBalances.TokenBalance));
        }
    }, [data]);

    const filterData = (data) => {
        const result = data.filter((nft) => nft.tokenNfts != null);
        console.log("donnee filtree", result);
        return result;
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    console.log(data);
    if (data) {

        //SetFilteredData(filterData(data.TokenBalances.TokenBalance));
        console.log("data is : ", data);
    }

    return (
        <Box   sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mx: 2,

        }}>
            
            {
                data &&
                    
                    filteredData.map((nft, index) => (
                        <div key={index}>
                            <NFTCard
                                tokenId={
                                    nft.tokenNfts.erc6551Accounts[0].tokenId
                                }
                                tokenAddress={
                                    nft.tokenNfts.erc6551Accounts[0]
                                        .tokenAddress
                                }
                                blockchain="ethereum"
                            ></NFTCard>
                        </div>
                    ))

              }
        </Box>
    );
}

export default Nftcollection;





