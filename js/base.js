var myContain = new Contain();
var init = function()
{
	var kaishi = document.getElementById("button_kaishi");
	var jieshu = document.getElementById("button_jieshu");
	var huiqi = document.getElementById("button_huiqi");
	var qipan = document.getElementById("qipan");


	kaishi.onclick = function(){
		qipan.innerHTML = myContain.toString();
		for(var i = 0; i < 15; i++)
		{
			for(var j = 0; j < 15; j++)
			{
				var str = "ele_";
				str += i;
				str += "_";
				str += j;
				var ele = document.getElementById(str);
				//ele.onclick = myContain.contain[i][j].__proto__.onclick;
				ele.onclick = myContain.contain[i][j].onclick;
			}
		}
	};
};

window.onload = init;