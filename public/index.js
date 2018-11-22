const arrayres = (value) => {

    url = '/suggestions/' + value;
    return fetch(url).then(function(response) {
            console.log(response);
            return response
        });
};