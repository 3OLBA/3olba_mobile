import {KeycloakUrl} from "../../BaseUrl";

export async function login(user) {
    let userSignIn = new URLSearchParams();
    userSignIn.append('username',user.email);
    userSignIn.append('password',user.password);
    userSignIn.append('grant_type','password');
    userSignIn.append('client_id','3olba-app');
    console.log("userSignIn",userSignIn);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: userSignIn.toString(),
    };
    const response = await fetch(KeycloakUrl, requestOptions)
        .catch((error) => {
            console.error(error);
        });

    return response?.json();
}





