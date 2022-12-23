// Add or modify user
import {BASEURL} from "../../BaseUrl";
import axios from "axios";
import {retrieveFromSecureStore} from "../components/StoreData";
import {useContext} from "react";
import {MyContext} from "../../Global/Context";

export async function getAccount() {
    let account ;
    await retrieveFromSecureStore('token').then(token => {
        if (token) {
            return axios({
                    url: BASEURL + '/account',
                    method: "GET",
                    headers: {
                        authorization: "Bearer " + JSON.parse(token)
                    },
                }
            ).then(res => {
                    console.log("res", res?.data?.object)
                    account = res?.data?.object;
                }
            ).catch((err) => {
                console.log(err)
            });
        }
    });
    return account
}




