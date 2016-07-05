//alert("es una prueba");
var app=angular.module("app",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/propietario',{
		controller:'controladorP',
		templateUrl:'propietario.html'
	})
	.when('/usuario',{
		controller:'controladorU',
		templateUrl:'usuario.html'
	});
});

app.factory('listaUsuarios',function(){
	return [{nombre:'Ximena'},{nombre:'Jackeline'},{nombre:'Taiga'}];
});

app.factory('listaPropietarios',function(){
	return [{nombre:'Ximena Gonzalez', telefono:'0990484881', materia:'Etica'},{nombre:'Jackeline Armijos', telefono:'0990484881', materia:'Arquitectura'}];
});

app.controller("controladorP",function($scope,listaPropietarios){
	$scope.nombres="Ximena Jackeline";
	$scope.apellidos="González Armijos";
	$scope.lista= listaPropietarios;
});

app.controller("controladorU",function($scope,listaUsuarios){
	$scope.usuarios=listaUsuarios;
	$scope.agregarItem=function(){
		$scope.usuarios.push({nombre:$scope.nuevo});
		$scope.nuevo="";
	}
	$scope.eliminarItem=function(){
		$scope.usuarios.pop();
	}
	
});


	$scope.ordenar=function(tipo){
		$scope.ordenado= tipo ;
	}
	$scope.activar=function(){
		$scope.visualizar=true;
	}
	
});



function verificar ($scope) {
	$scope.nombre="Ximena";
}

app.controller("controlador",verificar);