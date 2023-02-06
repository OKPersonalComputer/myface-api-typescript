
import React from "react";
import { useState, useEffect } from "react";
import '../style/Userposts.scss';

export function UserPosts() {

    const [myData, setMyData] = useState<any>();

    useEffect(() => { fetch("http://localhost:3001/users").then(response => response.json()).then(data => setMyData(data)) });


    let userDetailList = [];
    if (myData) {
        for (let i = 0; i < myData.results.length; i++) {
            userDetailList.push(<div>
                <p>{myData.results[i].name}</p>
                <p>{myData.results[i].username}</p>
                <p>{myData.results[i].email}</p>
                <p><img src={myData.results[i].profileImageUrl}></img></p>
            </div>);
        }
    }


    // results	
    // 0	
    // id	58
    // name	"Anatollo Assinder"
    // username	"aassinder1l"
    // email	"aassinder1l@blinklist.com"
    // coverImageUrl	"https://picsum.photos/id/302/2100/800"
    // profileImageUrl	"https://robohash.org/aassinder1l.png?bgset=bg1"

    if (!myData) { return <div>Waiting for data!</div> }
    return (<div>
        <h2>Users</h2>
        < div className="user-container">
            {userDetailList}
        </div>
    </div>
    );


}
