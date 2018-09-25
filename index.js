class Bar
{
	
	constructor (document)
	{
		this.loadDoc();
		//mainElem.innerHTML='<div  class="bar-progress" style="width:0%"></div>' 
		//	+	'<div  class="bar-text" style="position:absolute;top:0;left:0;width:100%;text-align:center"></div>';
		
		this.mainElem = document.createElement("DIV");
		this.mainElem.className="bar-container";
		this.elem = document.createElement("DIV"); 
		this.elem.className="bar-progress";
		this.elem.style="width:0%";
		this.mainElem.appendChild(this.elem);
		
		this.elemText = document.createElement("DIV");
		this.elemText.className = "bar-text";
		this.elemText.style = "position:absolute;top:0;left:0;width:100%;text-align:center";
		this.mainElem.appendChild(this.elemText);
		this.elemText.innerHTML= this.elem.style.width;
		this.width = 0;
		this.target =0;
		this.limit = 100;
		//this.elemText.innerHTML= this.bean;
		document.body.appendChild(getElement);
		
	}
	
	getElement()
	{
		return this.mainElem;
	}
	loadDoc() {
		var xhttp = new XMLHttpRequest();
		var bar = this;
		xhttp.onreadystatechange=function() {
		if (this.readyState == 4 && this.status == 200) {
			bar.bean=JSON.parse(this.responseText);
			bar.limit = bar.bean.limit;
		}
		};
		xhttp.open("GET", "http://pb-api.herokuapp.com/bars" , true);
		xhttp.send();
	}
	move(delta)
	{
	  this.target =this.target +delta;
	  var bar = this;
	  var id = setInterval(frame, 10);
	  
	  
	  var str = bar.elem.style.width; 
	  var w =  0;
	  if (str.endsWith("%"))
	  { w= str.substr(0,str.length-1); }
	  
	  
	  function frame() {
		if (w >= bar.target) {
		  clearInterval(id);
		} else {
		  w++; 
		  bar.elem.style.width =  w + '%'; 
		  bar.elemText.innerHTML= bar.elem.style.width;
		}
	  }
	}
	
	
	
}
class Selector
{
	constructor(document)
	{
		
		this.allElement = [];
		this.bar = [];
		for ( var i=0;i<=2;i++)
		{
			this.allElement [i] = document.getElementById(allElementName[i]);
			this.bar [i] = new Bar(this.allElement [i]);
		}
		this.currentIdx=0;
	}
	
	move(val)
	{
		this.bar[this.currentIdx].move(val);
	}
	
	
	update(obj)
	{
		this.currentIdx=obj.value;
	}
}
const allElement = ['bar1','bar2','bar3']
//let selector = new Selector(document,allElement);
bar1 = new Bar(document);