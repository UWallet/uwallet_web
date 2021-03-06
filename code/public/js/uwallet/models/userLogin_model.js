var app = app || {};
//var string = 'http://';
//string += localStorage.getItem("direccion_ip");
//string += ':4060/users/login';


app.Userlogin_model = Backbone.Model.extend({
  urlRoot: 'http://'+localStorage.getItem("direccion_ip")+':4060/users/login',

  validate: function (attrs) {
    var errors = [];

    if (attrs.password.length < 100){
      if(Object.keys(attrs).length != 2){
        errors.push({name: 'Cantidad de atributos', message: 'La cantidad de atributos es incorrecta.'});
      }
      if (!attrs.email) {
        errors.push({name: 'Email', message: 'Es necesario que esté el campo email.'});
      }
      if (!attrs.password) {
        errors.push({name: 'Contraseña', message: 'Es necesario que esté el campo contraseña'});
      }
      else{
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDqAMvO0w5Lz3iyJObftSw8jFo/\n3CoyqaYLcWbA6A4mjCufMie8L+dA8kKO1M4JpmslU1h7W1fovOUDNc4ZukhMN/Pi\nvfaqROZ95GwQfLWjkKRBngSU5ITOBtqAuiBSeJgfZORe4C4NoiVkssfTUUgmYbs7\nwj1k5Jz0K0e1odGHzQIDAQAB\n-----END PUBLIC KEY-----");
          var encrypted = encrypt.encrypt(attrs.password);
          attrs.password = encrypted;
      }
    }
    return errors.length > 0 ? errors : false;
  },

	initialize: function() {
		this.on('change', function(){
			//console.log('El modelo ha sido modificado.');
		});
	}
});
