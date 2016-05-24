var His = function(i, j, c)
{
	this.x = i;
	this.y = j;
	this.color = c;
}

var danren_manager = {
	history:new Array(),
	color :"white",
	info:document.getElementById("info"),
	setColor:function(x,y)
	{
		//alert("" + x + y);
		if(myContain.setColor(x,y,this.color))
		{
			//alert("ok");
			//var ele = document.getElementById("ele_" + x + "_" + y);
			//ele.style.backgroundColor = "" + this.color;
			this.history.push(new His(x,y,this.color));
			if(myContain.isWin(x,y))
			{
				alert(this.color + " is winer!");
				return true;
			}
			this.nextColor();
		}
		info.innerText = "当前玩家：" + this.color;
	},
	nextColor:function()
	{
		if(this.color == "white")
		{
			this.color = "black";
		}
		else{
			this.color = "white";
		}
	},
	huiqi:function()
	{
		var h = this.history.pop();
		if(h){
			myContain.contain[h.x][h.y].restore();
			document.getElementById("ele_" + h.x + "_" + h.y).innerText = "";
			this.nextColor();
		}
	}
};


var renji_manager ={
	history:new Array(),
	color :"white",
	info:document.getElementById("info"),
	setColor:function(x,y)
	{
		if(myContain.setColor(x,y,this.color))
		{
			this.history.push(new His(x,y,this.color));
			if(myContain.isWin(x,y))
			{
				alert(this.color + " is winer!");
				return true;
			}
			this.nextColor();
		}


		//电脑
		var coord = myContain.getNext(this.color);
		myContain.setColor(coord.x, coord.y,this.color);
		this.history.push(new His(coord.x,coord.y,this.color));
		if(myContain.isWin(coord.x,coord.y))
		{
			alert(this.color + " is winer!");
			return true;
		}
		this.nextColor();
		info.innerText = "当前玩家：" + this.color;
	},
	nextColor:function()
	{
		if(this.color == "white")
		{
			this.color = "black";
		}
		else{
			this.color = "white";
		}
	},
	getNextColor:function(c)
	{
		if(c == "white")
		{
			return "black";
		}
		else return "white";
	},
	huiqi:function()
	{
		var h = this.history.pop();
		if(h){
			myContain.contain[h.x][h.y].restore();
			document.getElementById("ele_" + h.x + "_" + h.y).innerText = "";
			h = this.history.pop();
			if(h){
				myContain.contain[h.x][h.y].restore();
				document.getElementById("ele_" + h.x + "_" + h.y).innerText = "";
			}
		}
	}
};