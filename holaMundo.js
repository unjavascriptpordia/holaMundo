var unJsPorDia=(function(window,undefined){
	function holaMundo(){
		var content="<h1>Hola Mundo en Javascript!</h1>";
		var element=document.getElementById('content');
		element.innerHTML=content;
	}
	return {
		"holaMundo":holaMundo
	}
})(window);
window.addEventListener("load",function(e){
	unJsPorDia.holaMundo();
});
