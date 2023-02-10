import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../../src/models/api/page";
import { UserModel } from "../../../src/models/api/userModel"
import { CreatePostList } from "./GetPosts";

// import fetch from "node-fetch";

import '../style/UserDetail.scss';


export function UserDetail(props: {
    userDetailID: number,
}) {
    const [myData, setMyData] = useState<UserModel | null>(null);


    useEffect(() => {
        fetch(`http://localhost:3001/users/${props.userDetailID}`)
            .then(response => response.json())
            .then(data => setMyData(data))
    }, [props.userDetailID]);


    // let userPostList = [];
    // if (myData) {
    //     for (let i = 0; i < 5; i++) {
    //         userPostList.push(<div className="userpostindividual">
    //             <p>{myData.posts[i].message}</p>
    //             <p>{myData.posts[i].createdAt.toString()}</p>
    //             <p><img src={myData.posts[i].imageUrl}></img></p>
    //         </div>);
    //     }
    // }


    if (!myData) { return <div>Waiting for data!</div> }

    return (<div className="userprofile">
        <h2>Users</h2>
        <img id="coverimg" src={myData.coverImageUrl}></img>
        <img id="profileimg" alt="profile-image" src={myData.profileImageUrl}></img>
        <p>{myData.name}</p>
        <p>{myData.username}</p>
        <p>{myData.email}</p>
        <CreatePostList myData={myData.posts} flag={false} />
    </div>
    );

}