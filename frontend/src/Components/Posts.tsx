import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../../src/models/api/page";
import { PostModel } from "../../../src/models/api/postModel"
import { CreatePostList } from "./GetPosts";
import { getPostList } from "../apiClient/apiClient";

import '../style/posts.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export function Posts(props: {
    setUserListID: React.Dispatch<React.SetStateAction<number>>
}) {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);

    const [page, setPage] = useState(1);


    useEffect(() => {
        const getPosts = async () => { await getPostList(page, setMyData) };
        getPosts();
    },
        [page]);

    if (!myData) { return <div>Waiting for data!</div> }

    return (
        <div>
            <h2>Posts</h2>

            <CreatePostList myData={myData.results} flag={true} setUserListID={props.setUserListID} />

            {myData.previous ? <button onClick={() => setPage(page - 1)}>Previous</button> : <></>}
            {myData.next ? <button onClick={() => setPage(page + 1)}>Next</button> : <></>}
        </div>
    );

}
