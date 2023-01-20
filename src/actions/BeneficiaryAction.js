import {BASEURL} from "../../BaseUrl";
import axios from "axios";
import {retrieveFromSecureStore} from "../components/StoreData";

export async function getAllBeneficiaries() {
    let beneficiaries = [] ;
    await retrieveFromSecureStore('token').then(token => {
        if (token) {
            return axios({
                    url: BASEURL + '/beneficiary/all',
                    method: "GET",
                    headers: {
                        authorization: "Bearer " + JSON.parse(token)
                    },
                }
            ).then(res => {
                    console.log("res", res?.data?.object)
                beneficiaries = res?.data?.object;
                }
            ).catch((err) => {
                console.log(err)
            });
        }
    });
    return beneficiaries;
}

// the purpose of this method is to create transfer from client to beneficiary
export async function createTransfer(transfer) {
    let response = [] ;
    console.log("New Transfer",transfer)
    await retrieveFromSecureStore('token').then(token => {
        if (token && transfer) {
            return axios.post(BASEURL + '/transaction/send-balance',transfer,{
                    headers: {
                        authorization: "Bearer " + JSON.parse(token)
                    },
                }
            ).then(res => {
                    console.log("res", res?.data?.object);
                response = res?.data?.object;
                }
            ).catch((err) => {
                console.log(err)
            });
        }
    });
    return response;
}




