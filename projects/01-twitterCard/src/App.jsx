import React from "react"

import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: "Nanomanzo",
        name: "Alejandro Manzo",
        isFollowing: true,
    },
    {
        userName: "Midudev",
        name: "Daniel Duran",
        isFollowing: false,
    },
    {
        userName: "RafaelCAB",
        name: "Rafael Cabrera",
        isFollowing: false,
    },
    {
        userName: "ThomasPepito",
        name: "Thomas pepito",
        isFollowing: true,
    }
]

export function App() {
    const addAT = (userName) => `@${userName}`;

    return (
        <>
            {
                users.map(user =>{
                    return(
                        <TwitterFollowCard
                            key={user.userName}
                            userName={user.userName}
                            name={user.name}
                            initialIsFollowing={user.isFollowing}
                            formatUserName={addAT}
                        />
                    )
                })
            }
        </>
    )
}