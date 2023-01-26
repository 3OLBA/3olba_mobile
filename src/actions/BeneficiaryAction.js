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

// the purpose of this method is to add beneficiary
export async function addBeneficiary(beneficiary) {
    let response = [] ;
    console.log("New Benficiary",beneficiary)
    await retrieveFromSecureStore('token').then(token => {
        if (token && beneficiary) {
            return axios.post(BASEURL + '/beneficiary',beneficiary,{
                    headers: {
                        authorization: "Bearer " + JSON.parse(token)
                    },
                }
            ).then(res => {
                    console.log("res", res?.data);
                    response = res?.data;
                }
            ).catch((err) => {
                console.log(err)
            });
        }
    });
    return response;
}



