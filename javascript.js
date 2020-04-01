

function validarUsuario() {
	var user = document.getElementById("usuario").value;
	var pass = document.getElementById("contraseña").value;
	// var user = $("#usuario").val();
	// var pass = $("#contraseña").val();
	if(user == "juan" && pass == "pepe"){
		document.getElementById("result").innerHTML= "Correcto";
	}
	else{
		document.getElementById("result").innerHTML= "Incorrecto";
	}
}

function redireccion(){
	window.location.href = "./index.html";
}