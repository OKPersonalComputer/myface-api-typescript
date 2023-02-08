import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import { createUser } from "../apiClient/apiClient";
import { BrowserRouter as Router, Routes, Route, Link, redirect, useNavigate } from 'react-router-dom';
import { render } from "react-dom";


export function CreateNewUser() {

    const [name, setName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [coverImageUrl, setCoverImageUrl] = useState<string>("")
    const [profileImageUrl, setProfileImageUrl] = useState<string>("")


    const navigate = useNavigate();

    function handleCreateUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const rx = /(.*?)\.(?:png|jpg|jpeg)$/i;

        if (rx.test(profileImageUrl) && rx.test(coverImageUrl)) {
            createUser(name, username, email, coverImageUrl, profileImageUrl)
            .then(() => navigate('/users'));
        } else { alert("One of your image links is invalid"); }

    }

    return (<div>
        <h1>Create User</h1>
        <form onSubmit={(event) => handleCreateUser(event)}>
            <label>
                Name:
                <input type="text"
                    name="name"
                    onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Username
                <input type="text"
                    name="username"
                    onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                ProfileImageUrl:
                <input type="url"
                    name="profileImageUrl"
                    onChange={e => setProfileImageUrl(e.target.value)} />
            </label>
            <label>
                CoverImageUrl:
                <input type="url"
                    name="coverImageUrl"
                    onChange={e => setCoverImageUrl(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>)
}