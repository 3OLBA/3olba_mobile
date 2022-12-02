import {KeycloakLogin} from "../../BaseUrl";

export async function login(user) {
    let userSignIn = new URLSearchParams();
    userSignIn.append('email',user.email);
    userSignIn.append('username',user.email.split("@")[0]);
    userSignIn.append('password',user.password);
    userSignIn.append('type_profile',"client");
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
    const response = await fetch(KeycloakLogin, requestOptions)
        .catch((error) => {
            console.error(error);
        });

    return response?.json();
}





