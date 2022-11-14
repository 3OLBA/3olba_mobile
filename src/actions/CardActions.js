export function addOrModifyCard(card){
    fetch('http://192.168.11.104:9445/card',{method :'POST', body:JSON.stringify(card)})
        .then((response) => response.json())
        .then((responseJson) => {
            return (
                console.log(responseJson)
            );
        })
        .catch((error) => {
            console.error(error);
        });
}

export function deleteCard(rib){
    fetch('http://192.168.11.104:9445/card',{method :'DELETE', body:{rib:rib}})
        .then((response) => response.json())
        .then((responseJson) => {
            return (
                console.log(responseJson)
            );
        })
        .catch((error) => {
            console.error(error);
        });
}



