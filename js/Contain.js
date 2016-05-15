var Contain = function()
{
	this.contain = [];
	for(var i = 0; i < 15; i++)
	{
		this.contain.push([]);
		for(var j = 0; j < 15; j++)
		{
			this.contain[i][j] = new Element(i,j);
		}
	}
};

Contain.prototype = {
	toString:function()
	{
		var str = "";
		str = str + "<table>";
		for(var i = 0; i < 15; i++)
		{
			str = str + "<tr>";
			for(var j = 0; j < 15; j++)
			{
				str = str + "<td>";
				str = str + this.contain[i][j].toString();
				str = str + "</td>";
			}
			str = str + "</tr>";
		}
		str = str + "</table>"
		return str;
	},
	getNext:function()
	{
		return "";
	},
	restore:function()
	{
		return "";
	},
	setColor:function(x, y, color)
	{
		return this.contain[x][y].setColor(color);
	},
	isWin:function(x, y)
	{
		var color = myContain.contain[x][y].color;
		var i = 0;
		var t = 1;
		var is = 1;
		var ie = 4
		//1
		for(i =is ; i <= ie; i++)
		{
			if(x + i >= 15)
			{
				break;
			}
			if(myContain.contain[x + i][y].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0)
			{
				break;
			}
			if(myContain.contain[x - i][y].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		if(t >= 10000)
		{
			return true;
		}


		//2
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15)
			{
				break;
			}
			if(myContain.contain[x][y + i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0)
			{
				break;
			}
			if(myContain.contain[x][y - i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		if(t >= 10000)
		{
			return true;
		}


		//3
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15 || x + i >= 15)
			{
				break;
			}
			if(myContain.contain[x + i][y + i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x - i < 0)
			{
				break;
			}
			if(myContain.contain[x - i][y - i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		if(t >= 10000)
		{
			return true;
		}



		//4
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x + i >= 15)
			{
				break;
			}
			if(myContain.contain[x + i][y - i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0 || y + i >= 15)
			{
				break;
			}
			if(myContain.contain[x - i][y + i].color == color)
			{
				t *= 10;
			}
			else{
				break;
			}
		}
		if(t >= 10000)
		{
			return true;
		}
		return false;
	},
	score:function(x,y,color)
	{
		if(myContain.contain[x][y].color != "")
		{
			return 0;
		}
		var i = 0;
		var s = 0;
		var t = 1;
		var is = 1;
		var ie = 4
		var ends = 1;

		//1
		for(i =is ; i <= ie; i++)
		{
			if(x + i >= 15)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x + i][y].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x + i][y].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x - i][y].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x - i][y].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		s += t;


		//2
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x][y + i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x][y + i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x][y - i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x][y - i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		s += t;

		//3
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15 || x + i >= 15)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x + i][y + i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x + i][y + i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x - i < 0)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x - i][y - i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x - i][y - i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		s += t;


		//4
		t = 1;
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x + i >= 15)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x + i][y - i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x + i][y - i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0 || y + i >= 15)
			{
				ends ++;
				break;
			}
			if(myContain.contain[x - i][y + i].color == color)
			{
				t *= 100;
			}
			else if(myContain.contain[x - i][y + i].color == "")
			{
				t = t + t;
			}
			else{
				ends ++;
				break;
			}
		}
		s += t;
		// if(this.isWin(x,y))
		// {
		// 	return 10000000000000;
		// }

		return s/ends;
	}
};