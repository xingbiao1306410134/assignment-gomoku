var myContain = new Contain();
var manager;
var init = function()
{
	var kaishi = document.getElementById("button_kaishi");
	var renji = document.getElementById("button_renji");
	var huiqi = document.getElementById("button_huiqi");
	var ck = document.getElementById("button_ck");
	var qipan = document.getElementById("qipan");
	var restart = document.getElementById("button_win");


	kaishi.style.display = "block";
	renji.style.display = "block";
	huiqi.style.display = "none";
	ck.style.display = "none";
	huiqi.onclick = function()
	{
		manager.huiqi();
	}
	ck.onclick = function()
	{
		history.go(0);
	}
	restart.onclick = function () {
		history.go(0);
	}
	kaishi.onclick = function() //单人游戏
	{
		kaishi.style.display = "none";
		renji.style.display = "none";
		huiqi.style.display = "block";
		ck.style.display = "block";
		manager = danren_manager;
		qipan.innerHTML = myContain.toString();

		document.getElementById("info").innerText = "当前玩家：" + manager.color;

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
		kaishi.style.display = "none";
		renji.style.display = "none";
		huiqi.style.display = "block";
		ck.style.display = "block";
		document.getElementById("info").innerText = "当前玩家：" + manager.color;
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