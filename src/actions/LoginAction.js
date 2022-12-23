import {BASEURL, KeycloakLogin} from "../../BaseUrl";
import {retrieveFromSecureStore, saveInSecureStore} from "../components/StoreData";
import axios from "axios";

export async function login(user) {
    let userSignIn = new URLSearchParams();
    userSignIn.append('email',user.email);
    // userSignIn.append('username',user.email.split("@")[0]);
    userSignIn.append('username','');
    userSignIn.append('password',user.password);
    userSignIn.append('type_profile',"client");
    userSignIn.append('grant_type','password');
    userSignIn.append('client_id','3olba-app');
    console.log("userSignIn",userSignIn);
    let requestOptions = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    return axios.post(KeycloakLogin, userSignIn.toString(), requestOptions)
        .then(response => {
            console.log("response",JSON.stringify(response));
            // saveInSecureStore("token", "Bearer "+ JSON.stringify(response?.data?.access_token)).then(r => console.log("store",r));
            // saveInSecureStore("refresh_token",JSON.stringify(response?.data?.refresh_token));
            return JSON.stringify(response?.data?.access_token);
        })
        .catch(err => {
            throw err;
        });
}

export async function getTokeByRefreshToken() {
    let userSignIn = new URLSearchParams();
    userSignIn.append('client_id','3olba-app');
    userSignIn.append('grant_type','refresh_token');
    await retrieveFromSecureStore("refresh_token").then(r => {
        userSignIn.append('refresh_token',r);
    });
    console.log("userSignIn",userSignIn);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: userSignIn.toString(),
    };
    const response = await fetch(KeycloakLogin,requestOptions)
        .catch((error) => {
            console.error(error);
        });

    return response?.json();
}

export async function getToken() {
    let userSignIn = new URLSearchParams();
    userSignIn.append('client_id','3olba-app');
    userSignIn.append('grant_type','refresh_token');
    await retrieveFromSecureStore("refresh_token").then(r => {
        userSignIn.append('refresh_token',r);
    });
    console.log("userSignIn",userSignIn);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: userSignIn.toString(),
    };
    const response = await fetch(KeycloakLogin,requestOptions)
        .catch((error) => {
            console.error(error);
        });

    return response?.json();
}





