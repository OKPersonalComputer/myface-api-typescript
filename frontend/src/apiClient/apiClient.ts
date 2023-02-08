

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

}

