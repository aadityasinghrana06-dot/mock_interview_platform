// import React from 'react'
// import Agent from "@/components/agent";
// import {awaitExpression} from "@babel/types";
// import {getCurrentUser} from "@/lib/actions/auth.action";
//
// const Page = () => {
//     const Page = async () => {
//         const user = await getCurrentUser();
//
//
//         return (
//             <>
//                 <h3>Interview Generation</h3>
//
//                 <Agent userName="you" userId="user1" type="generate"/>
//             </>
//         )
//     }
//         export default Page;
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview generation</h3>
            <Agent userName={user?.name || "User"} />
        </>
    );
};

export default Page;