var app = app || {};

//var string = 'http://';
//string += localStorage.getItem("direccion_ip");
//string += ':4060/users/get_user';

app.Profile_model = Backbone.Model.extend({
  urlRoot: 'http://'+localStorage.getItem("direccion_ip")+':4060/users/get_user',

	initialize: function() {
		this.on('change', function(){
			//console.log('El modelo profile_model ha sido modificado.');
		});
	}
});

/*

{
    "id": 1,
    "firstName": "asdasd",
    "lastName": "asd",
    "email": "loisferval97@hotmail.com",
    "money": 0
}
*/
