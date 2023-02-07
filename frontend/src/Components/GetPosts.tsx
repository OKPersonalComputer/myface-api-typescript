import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Page } from "../../../src/models/api/page";
import { PostModel } from "../../../src/models/api/postModel"

export function CreatePostList(props: {
    myData: any,
    flag: boolean,
    setUserListID?: React.Dispatch<React.SetStateAction<number>>
}) {
    let postList = [];
    for (let i = 0; i < props.myData.length; i++) {
        postList.push(<div>
            <p>{props.myData[i].message}</p>
            <p>{props.myData[i].createdAt.toString()}</p>
            <p><img src={props.myData[i].imageUrl}></img></p>

            {props.flag && props.setUserListID ? <Link onClick={() => props.setUserListID!(props.myData[i].postedBy.id)} to={`../users/${props.myData[i].postedBy.id}`}>{props.myData[i].postedBy.name} ({props.myData[i].postedBy.username})</Link> : <></>}
            {props.flag ? <button type="submit" className="like_button">Like</button> : <></>}
            {props.flag ? <button type="submit" className="dislike_button">Dislike</button> : <></>}
        </div>);

    }
    return <div className="post-container">{postList}</div>;
}
