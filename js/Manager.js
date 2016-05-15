var His = function(i, j, c)
{
	this.x = i;
	this.y = y;
	this.color = c;
}

var manager ={
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
			if(myContain.isWin(x,y))
			{
				alert(this.color + " is winer!");
				return true;
			}
			this.nextColor();
		}
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
	}
};