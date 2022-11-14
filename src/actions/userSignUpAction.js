export function addOrModifyUser(user,navigation,where){
    let success = false;
    fetch('http://192.168.11.104:5055/user',{
        method :'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)})
        .then((response) => console.log(response.json()))
        .then((responseJson) => {
                 if(responseJson?.success){
                     navigation.navigate(where);
                 }
        })
        .catch((error) => {
            console.error(error);
        });
    return success;
}




