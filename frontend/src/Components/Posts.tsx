import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../../src/models/api/page";
import { PostModel } from "../../../src/models/api/postModel"
import '../style/posts.scss'

export function Posts() {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);

    const [page, setPage] = useState(1);

    useEffect(() => { fetch(`http://localhost:3001/posts/?page=${page}&pageSize=12`).then(response => response.json()).then(data => setMyData(data)) }, [page]);

    let postList = [];
    if (myData) {
        for (let i = 0; i < myData.results.length; i++) {
            postList.push(<div>
                <p>{myData.results[i].message}</p>
                <p>{myData.results[i].createdAt.toString()}</p>
                <p>{myData.results[i].postedBy.name} ({myData.results[i].postedBy.username})</p>
                <p><img src={myData.results[i].imageUrl}></img></p>

                <button type="submit" className="like_button">Like</button>
                <button type="submit" className="dislike_button">Dislike</button>

            </div>);
        }
    }

    if (!myData) { return <div>Waiting for data!</div> }

    if (myData.previous != null && myData.next != null) {
        return (
            <div>
                <h2>Posts</h2>
                <div className="post-container">
                    {postList}
                </div>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        );
    }

    if (myData.next != null) {
        return (
            <div>
                <h2>Posts</h2>
                <div className="post-container">
                    {postList}
                </div>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        );
    }

    if (myData.previous != null) {
        return (
            <div>
                <h2>Posts</h2>
                <div className="post-container">
                    {postList}
                </div>
                <button onClick={() => setPage(page - 1)}>Previous</button>
            </div>
        );
    } 

    return (
        <div>
            <h2>Posts</h2>
            <div className="post-container">
                {postList}
            </div>
        </div>
    );
}
