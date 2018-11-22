const arrayres = (value) => {

    url = '/suggestions/' + value;
    return fetch(url).then(function(response) {
            return response
        });
};