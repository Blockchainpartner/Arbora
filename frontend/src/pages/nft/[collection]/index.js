import { useRouter } from "next/router";
import { Asset } from "@airstack/airstack-react";

// pages/category/[category]/index.tsx
const CollectionIndexPage = () => {
    const router = useRouter();
    const { collection } = router.query;
    return (
        <div>
            [Collection] Index Page
            {/* <pre>Collection: {collection}</pre>
            <Asset
                address="0x60E4d786628Fea6478F785A6d7e704777c86a7c6"
                tokenId="27880"
                preset="small"
                error={<div>Error loading asset.</div>}
                chain="ethereum"
            /> */}
        </div>
    );
};
export default CollectionIndexPage;
