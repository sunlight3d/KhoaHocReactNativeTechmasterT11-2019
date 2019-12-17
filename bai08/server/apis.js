import {urlRegisterUser} from './urlNames'

export const registerUser = async (email, password) => {
    try {
        debugger
        let response = await fetch(urlRegisterUser(), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password
            }),
        })
        let responseJson = await response.json();
        if(responseJson.result == "ok") {
            const {id, email, tokenKey, expiredate} = responseJson.data
            return {id, email, tokenKey, expiredate}
        }
    } catch (error) {
        debugger
        return {result: "failed", message: `CAnnot register. Error: ${error}`}
    }
}
export const testFakeAPI = async () => {
    try {
        debugger
        let response = await fetch(
            "https://demo.3serp.vn:44318/SystemBsHubAPI/api/LoginHubAPI/Getdvcsbyuser?_user_name=ITG",
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Accept-Encoding':'gzip, deflate'
                }
            })
        let responseBlob = await response.blob()
    //     arrayBuffer(): Promise<ArrayBuffer>;
    // blob(): Promise<Blob>;
    // json(): Promise<any>;
    // text(): Promise<string>;
    // formData(): Promise<FormData>;
        debugger        
    } catch (error) {
        debugger
        return {result: "failed", message: `AAAA Error: ${error}`}
    }
}