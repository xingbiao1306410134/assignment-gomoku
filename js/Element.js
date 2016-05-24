var Element = function(i, j)
{
	this.color = "";
	this.x = i;
	this.y = j;
	this.onclick = function(x,y) //bi bao
	{
		return function()
		{
			manager.setColor(x,y);
		}
	}(this.x, this.y);
};

Element.prototype = {
	constructor:Element,
	toString:function()
	{
		var str = "<a href = # id = ele_" + this.x + "_" + this.y + " class = ele >";
		str += "";
		str += "</a>";
		return str;
	},
	getColor:function()
	{
		return this.color;
	},
	setColor:function(c)
	{
		var ele = document.getElementById("ele_" + this.x + "_" + this.y);
		if(this.isEmpty())
		{
			var str = "<img src = images/" + c + ".png class = qizi />";
			this.color = c;
			ele.innerHTML = str;
			return true;
		}
		else return false;
	},
	isEmpty:function()
	{
		if(this.color == "")
		{
			return true;
		}
	},
	restore:function()
	{
		this.color = "";
	}
};