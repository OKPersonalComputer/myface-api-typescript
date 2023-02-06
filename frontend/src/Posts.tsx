import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../src/models/api/page";
import { PostModel } from "../../src/models/api/postModel"

export function Posts() {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);

    useEffect(() => { fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setMyData(data)) });


    let postList = [];
    if (myData) {
        for (let i = 0; i < myData.results.length; i++) {
            postList.push(<div>
                <p>{myData.results[i].message}</p>
                <p>{myData.results[i].createdAt.toString()}</p>
                <p>{myData.results[i].postedBy.name} ({myData.results[i].postedBy.username})</p>
                <p><img src={myData.results[i].imageUrl}></img></p>
            </div>);
        }
    }

    if (!myData) { return <div>Waiting for data!</div> }
    return (
        <div>
            {postList}

        </div>
    );


}
