import React, { useState, useEffect } from "react";
import ReactFlowInit from "./ReactFlowInit";
import { useQuery } from "@airstack/airstack-react";

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
              tokenNfts {
              erc6551Accounts {
                address {
                  tokenBalances {
                    tokenAddress
                    tokenId
                  }
                }
              }
            }
            }
          }
        }
      }
    }
  }`;
const Canva = ({ collection, id }) => {
    console.log(collection, id, "CAANVAAA");

    const [arrayProp, setArrayProp] = useState([]);
    const [filledProp, setFilledProp] = useState(false);
    const { data, loading, error } = useQuery(OtherQuery, {
        tokenAddress: collection,
        tokenId: id,
    });

    useEffect(() => {
        if (data) {
            let tempArray =
                data.TokenBalance.tokenNfts.erc6551Accounts[0].address
                    .tokenBalances;
            let lenSons =
                data.TokenBalance.tokenNfts.erc6551Accounts[0].address
                    .tokenBalances.length;
            console.log("len", lenSons);
            if (!filledProp) {
                setArrayProp((arrayProp) => [
                    ...arrayProp,
                    {
                        id: collection + id,
                        tokenAddress: collection,
                        tokenId: id,
                        level: 0,
                        hasFather: false,
                        fatherId: "O",
                    },
                ]);
                for (let i = 0; i < lenSons; i++) {
                    console.log("je rentre dans le for des fils");
                    setArrayProp((prevArray) => [
                        ...prevArray,
                        {
                            id:
                                tempArray[i].tokenAddress +
                                tempArray[i].tokenId,
                            tokenAddress: tempArray[i].tokenAddress,
                            tokenId: tempArray[i].tokenId,
                            level: 1,
                            hasFather: true,
                            fatherId: collection + id,
                        },
                    ]);
                    // Je dois inserer les fils des fils ici
                    if (tempArray[i].tokenNfts.erc6551Accounts != null) {
                        console.log("J'aiii des PETITS ENFANTS");
                        for (
                            let j = 0;
                            j <
                            tempArray[i].tokenNfts.erc6551Accounts[0].address
                                .tokenBalances.length;
                            j++
                        ) {
                            setArrayProp((prevArray) => [
                                ...prevArray,
                                {
                                    id:
                                        tempArray[i].tokenNfts
                                            .erc6551Accounts[0].address
                                            .tokenBalances[j].tokenAddress +
                                        tempArray[i].tokenNfts
                                            .erc6551Accounts[0].address
                                            .tokenBalances[j].tokenId,
                                    tokenAddress:
                                        tempArray[i].tokenNfts
                                            .erc6551Accounts[0].address
                                            .tokenBalances[j].tokenAddress,
                                    tokenId:
                                        tempArray[i].tokenNfts
                                            .erc6551Accounts[0].address
                                            .tokenBalances[j].tokenId,
                                    level: 2,
                                    hasFather: true,
                                    fatherId:
                                        tempArray[i].tokenAddress +
                                        tempArray[i].tokenId,
                                },
                            ]);
                        }
                    }
                }
                setFilledProp(true);
            }
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div>
            {arrayProp && <ReactFlowInit NFTArray={arrayProp}></ReactFlowInit>}
        </div>
    );
};

export default Canva;





