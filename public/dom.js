var carInput=document.getElementById('car');
var carDatalist=document.getElementById('browsers');
var buttonSearch=document.getElementById('buttonSearch');

carInput.oninput= () => {
	var value =carInput.value;
	var myCars = [];
	arrayResult(value).then((response) =>{
		if(response.status == 200 ){
		return response.json();
		}
		else{
			alert('Connection Error , status Code : ' + response.status);
		}
	}).then((myCars) => {
        var options = '';
        for(var i = 0; i < myCars.length; i++) {
            options += '<option value="' + myCars[i] + '" />';
        }
        carDatalist.innerHTML = options;
	}).catch(err => {
    		console.log({err});
    	})
};

buttonSearch.addEventListener('keypress',(e)=>{
	e.preventDefault();
});


