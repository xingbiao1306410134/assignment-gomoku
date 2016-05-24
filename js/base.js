var myContain = new Contain();
var manager;
var init = function()
{
	var kaishi = document.getElementById("button_kaishi");
	var renji = document.getElementById("button_renji");
	var huiqi = document.getElementById("button_huiqi");
	var qipan = document.getElementById("qipan");


	huiqi.onclick = function()
	{
		manager.huiqi();
	}
	kaishi.onclick = function() //单人游戏
	{
		manager = danren_manager;
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


	renji.onclick = function() //人机对战
	{
		manager = renji_manager;
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
	}
};

window.onload = init;