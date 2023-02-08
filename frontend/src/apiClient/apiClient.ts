import { Page } from "../../../src/models/api/page";
import { PostModel } from "../../../src/models/api/postModel"

export function createUser(name: string,
    username: string, email: string,
    coverImageUrl: string, profileImageUrl: string) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            coverImageUrl: coverImageUrl,
            profileImageUrl: profileImageUrl
        })
    };

    const response = fetch('http://localhost:3001/users/create/', requestOptions)
        .then((response) => {
            if (response.status !== 200) {
                alert("You have not filled the responses in correctly");
                throw new Error(response.statusText);
            }

            alert("Your Details Submitted Successfully");

            return response.json()
        })

    return response;

}

export function getPostList(page: number, setMyData: React.SetStateAction<any>) {
    return fetch(`http://localhost:3001/posts/?page=${page}&pageSize=12`)
        .then(response => response.json()).then(data => setMyData(data))
};

