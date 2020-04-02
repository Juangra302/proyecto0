

function validarUsuario() {
	var user = document.getElementById("usuario").value;
	var pass = document.getElementById("contraseña").value;
	// var user = $("#usuario").val();
	// var pass = $("#contraseña").val();
	if(user == "juan" && pass == ""){
		document.getElementById("result").innerHTML= "Correcto";
		document.getElementById("result").className = "alert-primary";
		document.getElementById("principal").style.display = "block";
		document.getElementById("seccion_login").style.display = "none";
	}
	else{
		document.getElementById("result").innerHTML= "Incorrecto";
		document.getElementById("result").style.display = "block";
	}
}

function redireccion(){
	window.location.href = "./index.html";
}