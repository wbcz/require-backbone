define(['b','text!template/template.html'], function (b, modalTemplate){
	console.log(modalTemplate)
	var add = function (x,y){
		return x+y;
	};
	b.test2();
	return {
		add: add
	};
});
