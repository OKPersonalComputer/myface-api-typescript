
import React from "react";
import { useState, useEffect } from "react";
import '../style/UsersList.scss';
import { Page } from "../../../src/models/api/page";
import { UserModel } from "../../../src/models/api/userModel"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export function UsersList(props: {
    setUserListID: React.Dispatch<React.SetStateAction<number>>
}) {

    const [myData, setMyData] = useState<Page<UserModel> | null>(null);

    useEffect(() => { fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then(data => setMyData(data)) });


    let userDetailList = [];
    if (myData) {
        for (let i = 0; i < myData.results.length; i++) {
            userDetailList.push(<div>
                <Link onClick={() => props.setUserListID(myData.results[i].id)} to={`${myData.results[i].id}`}>{myData.results[i].name}</Link>
                <p>{myData.results[i].username}</p>
                <p>{myData.results[i].email}</p>
                <p><img src={myData.results[i].profileImageUrl}></img></p>
            </div>);
        }
    }


    if (!myData) { return <div>Waiting for data!</div> }
    
    return (<div>
        <h2>Users</h2>
        < div className="user-container">
            {userDetailList}
        </div>
    </div>
    );


}
