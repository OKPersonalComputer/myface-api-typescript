import React from "react";
import { useState, useEffect } from "react";

import { Page } from "../../../src/models/api/page";
import { UserModel } from "../../../src/models/api/userModel"

export function UserDetail(props: {
    userDetailID: number
}) {
    const [myData, setMyData] = useState<UserModel | null>(null);


    useEffect(() => { fetch(`http://localhost:3001/users/${props.userDetailID}`)
        .then(response => response.json())
        .then(data => setMyData(data)) }, [props.userDetailID]);


    let userPostList = [];
    if (myData) {
        for (let i = 0; i < myData.posts.length; i++) {
            userPostList.push(<div>
                <p>{myData.posts[i].message}</p>
                <p>{ myData.posts[i].createdAt.toString()}</p>
                <p><img src={myData.posts[i].imageUrl}></img></p>
            </div>);
        }
    }


    // results	
    // coverImageUrl	"https://picsum.photos/id/302/2100/800"

    if (!myData) { return <div>Waiting for data!</div> }

    return (<div>
        <h2>Users</h2>
        <img src={myData.profileImageUrl}></img>
        <p>{myData.name}</p>
        <p>{myData.username}</p>
        <p>{ myData.email}</p>
        < div className="user-container">
            {userPostList}
        </div>
    </div>
    );

}