import jwt_decode from "jwt-decode";
import {saveInSecureStore} from "../components/StoreData";

export async function getPersonFromToken(token) {
    let person = jwt_decode(JSON.parse(token))?.person;
    await saveInSecureStore("person", JSON.stringify(person));
}





