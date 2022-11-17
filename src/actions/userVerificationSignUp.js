// Add or modify user
import {BASEURL} from "../../BaseUrl";

export async function userVerification(email,code) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    const response = await fetch(BASEURL+'/user/verification', requestOptions)
        .catch((error) => {
            console.error(error);
        });

    return response?.json();
}




