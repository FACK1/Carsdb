var carinput=document.getElementById('car');
var cardatalist=document.getElementById('browsers');

carinput.oninput= function(){
	var value =carinput.value;
	var mycars = [];
	arrayres(value).then((response) =>{
		return response.json()
	}
	).then((mycars) => {
        var options = '';
        for(var i = 0; i < mycars.length; i++) {
            options += '<option value="' + mycars[i] + '" />';
        }
        cardatalist.innerHTML = options;
	}).catch(err => {
    		console.log({err});
    	})
};

