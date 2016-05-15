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
	getNext:function(c)
	{
		var i,j,coord = {x:-1,y:-1},max = -1;
		var tx = -1,ty = -1, ts = -1;
		for(i = 0; i < 15; i++)
		{
			for(j = 0; j < 15; j++)
			{
				if(!(this.contain[i][j].isEmpty()))
				{
					continue;
				}
				if(max < (ts = this.score(i, j, c)))
				{
					tx = i;
					ty = j;
					max = ts;
				}
			}
		}

		//对方的分数
		var ttx = -1, tty = -1, mmax = -1, tts = -1,
		oc = manager.getNextColor(c);
		for(i = 0; i < 15; i++)
		{
			for(j = 0; j < 15; j++)
			{
				if(!(this.contain[i][j].isEmpty()))
				{
					continue;
				}
				if(mmax < (tts = this.score(i, j, oc)))
				{
					ttx = i;
					tty = j;
					mmax = tts;
				}
			}
		}

		if(max >= mmax)
		{
			coord.x = tx;
			coord.y = ty;
		}
		else{
			coord.x = ttx;
			coord.y = tty;
		}
		return coord;
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
		var sum = function(end1, end2, sims1, sims2, empty1, empty2, o1, o2)
		{
			sims1 -= o1;
			sims2 -= o2;
			var sc = Math.pow(20,sims1 + sims2 -1);
			sc += Math.pow(10, o1 + o2);
			sc += Math.pow(2, empty1 + empty2);
			if(end1 > 0 && empty1 == 0 && sims1 + sims2 >2)
			{
				sc /= 10;
			}
			if(end2 > 0 && empty2 == 0 && sims2 + sims2 >2)
			{
				sc /= 10;
			}
			if(empty1 > 0 && empty2 >0 && sims1 + sims2 > 4)
			{
				sc *= 100;
			}

			if(sims1 + sims2 > 5)
			{
				sc *= 10000;
			}
			return sc;
		};
		if(myContain.contain[x][y].color != "")
		{
			return -1;
		}
		var i = 0;
		var s = 0;
		var is = 1;
		var ie = 4
		var end1 = 0, end2 = 0;
		var sims1 = 1;
		var empty1 = 0;
		var empty2 = 0;
		var o1 =0;
		var o2 = 0;
		var flg = false;

		//1
		o1 = o2 = 0;
		flg = false;
		end1 = 0; end2 = 0;
		var sims1 = 1;
		var sims2 = 1;
		var empty1 = 0;
		var empty2 = 0;
		for(i =is ; i <= ie; i++)
		{
			if(x + i >= 15)
			{
				end1 ++;
				break;
			}
			if(myContain.contain[x + i][y].color == color)
			{
				sims1 ++;
				if(flg)
				{
					o1 ++;
				}
			}
			else if(myContain.contain[x + i][y].color == "")
			{
				empty1 ++;
				flg = true;
			}
			else{
				end1 ++;
				break;
			}
		}
		flg = false;
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0)
			{
				end2 ++;
				break;
			}
			if(myContain.contain[x - i][y].color == color)
			{
				sims2 ++;
				if(flg)
				{
					o2 ++;
				}
			}
			else if(myContain.contain[x - i][y].color == "")
			{
				empty2 ++;
				flg = true;
			}
			else{
				end2 ++;
				break;
			}
		}
		s += sum(end1, end2, sims1, sims2, empty1, empty2, o1 ,o2);


		//2
		o1 = o2 = 0;
		flg = false;
		end1 = 0; end2 = 0;
		var sims1 = 1;
		var sims2 = 1;
		var empty1 = 0;
		var empty2 = 0;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15)
			{
				end1 ++;
				break;
			}
			if(myContain.contain[x][y + i].color == color)
			{
				sims1 ++;
				if(flg)
				{
					o1 ++;
				}
			}
			else if(myContain.contain[x][y + i].color == "")
			{
				empty1 ++;
				flg = true;
			}
			else{
				end1 ++;
				break;
			}
		}
		flg = false;
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0)
			{
				end2 ++;
				break;
			}
			if(myContain.contain[x][y - i].color == color)
			{
				sims2 ++;
				if(flg)
				{
					o2 ++;
				}
			}
			else if(myContain.contain[x][y - i].color == "")
			{
				empty2 ++;
				flg = true;
			}
			else{
				end2 ++;
				break;
			}
		}
		s += sum(end1, end2, sims1, sims2, empty1, empty2, o1 ,o2);

		//3
		end1 = 0; end2 = 0;
		o1 = o2 = 0;
		flg = false;
		var sims1 = 1;
		var sims2 = 1;
		var empty1 = 0;
		var empty2 = 0;
		for(i = is; i <= ie; i++)
		{
			if(y + i >= 15 || x + i >= 15)
			{
				end1 ++;
				break;
			}
			if(myContain.contain[x + i][y + i].color == color)
			{
				sims1 ++;
				if(flg)
				{
					o1 ++;
				}
			}
			else if(myContain.contain[x + i][y + i].color == "")
			{
				empty1 ++;
				flg = true;
			}
			else{
				end1 ++;
				break;
			}
		}
		flg = false;
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x - i < 0)
			{
				end2 ++;
				break;
			}
			if(myContain.contain[x - i][y - i].color == color)
			{
				sims2 ++;
				if(flg)
				{
					o2 ++;
				}
			}
			else if(myContain.contain[x - i][y - i].color == "")
			{
				empty2 ++;
				flg = true;
			}
			else{
				end2 ++;
				break;
			}
		}
		s += sum(end1, end2, sims1, sims2, empty1, empty2, o1 ,o2);


		//4
		end1 = 0; end2 = 0;
		o1 = o2 = 0;
		flg = false;
		var sims1 = 1;
		var sims2 = 1;
		var empty1 = 0;
		var empty2 = 0;
		for(i = is; i <= ie; i++)
		{
			if(y - i < 0 || x + i >= 15)
			{
				end1 ++;
				break;
			}
			if(myContain.contain[x + i][y - i].color == color)
			{
				sims1 ++;
				if(flg)
				{
					o1 ++;
				}
			}
			else if(myContain.contain[x + i][y - i].color == "")
			{
				empty1 ++;
				flg = true;
			}
			else{
				end1 ++;
				break;
			}
		}
		flg = false;
		for(i = is; i <= ie; i++)
		{
			if(x - i < 0 || y + i >= 15)
			{
				end2 ++;
				break;
			}
			if(myContain.contain[x - i][y + i].color == color)
			{
				sims2 ++;
				if(flg)
				{
					o2 ++;
				}
			}
			else if(myContain.contain[x - i][y + i].color == "")
			{
				empty2 ++;
				flg = true;
			}
			else{
				end2 ++;
				break;
			}
		}
		s += sum(end1, end2, sims1, sims2, empty1, empty2, o1 ,o2);

		return s;
	}
};