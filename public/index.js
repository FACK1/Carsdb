const arrayResult = (value) => {

    url = '/suggestions/' + value;
    return fetch(url).then((response)=> {
            return response
        });
    
};