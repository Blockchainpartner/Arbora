import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ReactFlowInit from "../../../components/ReactFlowInit";
import { useQuery } from "@airstack/airstack-react";

const OtherQuery = `query MyQuery($tokenAddress: Address!, $tokenId: String!) {
  TokenBalance(
    input: {blockchain: ethereum, tokenId: $tokenId, tokenAddress: $tokenAddress}
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

const variables = {
    tokenAddress: "0x8c34e6e60731d1ff7e26c712ea1f798f90f29ec6",
    tokenId: "138",
};

const IdPage = () => {
    const router = useRouter();

    const { collection, id } = router.query;

    const { data, loading, error } = useQuery(OtherQuery, variables);
    //const { data, loading, error } = useQuery(QueryWithoutVariables);

    const [filteredData, SetFilteredData] = useState([]);

    const [arrayProp, setArrayProp] = useState([]);
    const [filledProp, setFilledProp] = useState(false);

    useEffect(() => {
        if (data) {
            SetFilteredData((prevArray) => [
                ...data.TokenBalance.tokenNfts.erc6551Accounts[0].address
                    .tokenBalances,
            ]);
            let tempArray =
                data.TokenBalance.tokenNfts.erc6551Accounts[0].address
                    .tokenBalances;
            let lenSons =
                data.TokenBalance.tokenNfts.erc6551Accounts[0].address
                    .tokenBalances.length;
            console.log("len", lenSons);
            if (!filledProp) {
                setArrayProp([
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
                //console.log("len", filteredData.length);
                for (let i = 0; i < lenSons; i++) {
                    console.log("je rentre dans le for");
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
                }
                setFilledProp(true);
            }
        }
        // console.log("data filtreee", filteredData);
        // console.log("arrayProp", arrayProp);
    }, [data]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (data) {
        // console.log(data);
        // console.log(
        //     "ce que je veux ",
        //     data.TokenBalance.tokenNfts.erc6551Accounts[0].address.tokenBalances
        // );
        // console.log(filteredData);
        //console.log("prop a passer au fils", arrayProp);
        //console.log("length prop", arrayProp.length);
    }
    //console.log("Collection address: ", collection, id);

    {
        /* <pre>
    Collection address: {collection} , id: {id}
</pre>; */
    } //put this in the return to access these parameters

    return (
        <div>
            page
            <ReactFlowInit arrayProp={arrayProp}></ReactFlowInit>
        </div>
    );
};
export default IdPage;
