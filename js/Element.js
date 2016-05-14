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
	toString:function()
	{
		var str = "<a href = # id = ele_" + this.x + "_" + this.y + " class = ele >";
		str += "" + this.x + this.y;
		str += "</a>";
		return str;
	},
	getColor:function()
	{
		return this.color;
	},
	setColor:function(c)
	{
		if(this.isEmpty())
		{
			this.color = c;
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
		return "";
	}
};