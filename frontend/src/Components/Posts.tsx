import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../../src/models/api/page";
import { PostModel } from "../../../src/models/api/postModel"
import '../style/posts.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export function Posts(props: {
    setUserListID: React.Dispatch<React.SetStateAction<number>>
}) {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);

    const [page, setPage] = useState(1);

    useEffect(() => { fetch(`http://localhost:3001/posts/?page=${page}&pageSize=12`).then(response => response.json()).then(data => setMyData(data)) }, [page]);

    let postList = [];
    if (myData) {
        for (let i = 0; i < myData.results.length; i++) {
            postList.push(<div>
                <p>{myData.results[i].message}</p>
                <p>{myData.results[i].createdAt.toString()}</p>
                <Link onClick={() => props.setUserListID(myData.results[i].postedBy.id)} to={`../users/${myData.results[i].postedBy.id}`}>{myData.results[i].postedBy.name} ({myData.results[i].postedBy.username})</Link>
                <p><img src={myData.results[i].imageUrl}></img></p>
                <button type="submit" className="like_button">Like</button>
                <button type="submit" className="dislike_button">Dislike</button>

            </div>);
        }
    }

    if (!myData) { return <div>Waiting for data!</div> }

    return (
        <div>
            <h2>Posts</h2>
            <div className="post-container">
                {postList}
            </div>
            {myData.previous ? <button onClick={() => setPage(page - 1)}>Previous</button> : <></>}
            {myData.next ? <button onClick={() => setPage(page + 1)}>Next</button> : <></>}
        </div>
    );

}
