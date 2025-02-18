import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import { createUser } from "../apiClient/apiClient";
import { BrowserRouter as Router, Routes, Route, Link, redirect, useNavigate } from 'react-router-dom';
import { render } from "react-dom";

import '../style/CreateNewUser.scss'


export function CreateNewUser() {

    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [coverImageUrl, setCoverImageUrl] = useState<string>("")
    const [profileImageUrl, setProfileImageUrl] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("");



    const navigate = useNavigate();

    function handleCreateUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        createUser(name, username, email, coverImageUrl, profileImageUrl)
            .then(() => navigate('/users'))
            .catch(e => setErrorMessage(e.message))

    }


    return (<div >
        <h1>Create User</h1>
        <p className="errormessage">{(errorMessage) ? errorMessage : ""}</p>
        <form onSubmit={(event) => handleCreateUser(event)}>
            <div className="CreateUser">
                <label>
                    Name:
                    <input className="textboxes" type="text"
                        name="name"
                        onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Username:
                    <input className="textboxes" type="text"
                        name="username"
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input className="textboxes" type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    ProfileImageUrl:
                    <input className="textboxes" type="url"
                        name="profileImageUrl"
                        onChange={e => setProfileImageUrl(e.target.value)} />
                </label>
                <label>
                    CoverImageUrl:
                    <input className="textboxes" type="url"
                        name="coverImageUrl"
                        onChange={e => setCoverImageUrl(e.target.value)} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
}