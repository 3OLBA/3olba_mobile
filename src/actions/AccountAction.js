// Add or modify user
import {BASEURL} from "../../BaseUrl";
import axios from "axios";
import {retrieveFromSecureStore} from "../components/StoreData";

export async function getAccount(token) {
    // await retrieveFromSecureStore('token').then(token => {
    //     if(token){
            console.log("token",token);
            axios({
                url: BASEURL + '/account',
                method: "GET",
                headers: {authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIanZQR1lOLWdxeDktMGNyR0JreEZOaXlFeXFucEFzemh0d0ZKYkxxVF9vIn0.eyJleHAiOjE2NzE3NDUyMTUsImlhdCI6MTY3MTc0NDYxNSwianRpIjoiMDU5MzY5NjQtM2U4MC00ZWUxLTkyNDEtMDM0MDg4YjFjMGI3IiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMTEuMTA0OjgwODAvYXV0aC9yZWFsbXMvdnZvb3giLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMDIzOWM1NzctOTg1NS00MmFhLWJlNjEtNDI5M2U1YjlmOWY4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidnZvb3gtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjE2YzY1NGEwLTFlNjQtNGQyZi1hMWI4LWFkNTg0MjY0Y2ZjNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2dm9veCIsImVtYWlsIjoia2hhbGlsLmRhb3VsYXRAZ21haWwuY29tIn0.TqYhD4Y6w3yv8_vLTTD5qttMPeNV7f2THLXSHBl5ltpdF6AM7q8JmTkIVArHkI48k8nyPr8zE8EBqL4jyKv1kMkE6nrWz3XSM_pQkb_9yLOFQtun0iEVnrpxfOULl6zhLmsAJzXsU-ZVUf4oWQSwDW8AezzQapt2jvnjwHtuoTb5WV4Tl5LzluV2rNj-2JJ4EXMPSAeTbAiCZJceWzYOPeJmho-9Ba8lAzS9Tlch7XKk40AWkSGF1X9n9UYNXGAhM9Mnlaw_b_N22Jy2f5WdBQGnw8NGqYrKpV41x-PY7AKiMTGfXt-2uW7LnfGfJD3cNbduX0Y9W3bSdG57nxkp6Q"},
            })
                .then((res) => { console.log("res",JSON.stringify(res?.data?.object))})
                .catch((err) => {console.log(err)});
        // }
    // });
}




