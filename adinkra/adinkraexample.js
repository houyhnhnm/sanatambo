function checktrue(){
	var returnval=true;
	//get all picimage 
	var allpicimage = document.getElementsByClassName("picimage");
	//get all picimagemark
	var allpicimagemark = document.getElementsByClassName("picimagemark");
	//check if all picimage is not equal to black returnval=true if all is not equal to black 
	var indexcheck=0;
	var subcolor;
	while(indexcheck < allpicimage.length && returnval==true){
		subcolor=String(allpicimage[indexcheck].style.backgroundColor).match(/[0-9]+/g);
		if(Number(subcolor[0].toString(10))+Number(subcolor[1].toString(10))+Number(subcolor[2].toString(10))==0){
			returnval=false;
		}
		indexcheck++;
	}
	//check if all picimagemark equal black returnval=true if all is equal to black 
	indexcheck=0;
	while(indexcheck < allpicimagemark.length && returnval==true){
		subcolor=String(allpicimagemark[indexcheck].style.backgroundColor).match(/[0-9]+/g);
		if(Number(subcolor[0].toString(10))+Number(subcolor[1].toString(10))+Number(subcolor[2].toString(10))!=0){
			returnval=false;
		}
		indexcheck++;
	}
	
	return returnval;
}


function changepic(tdelement){
	var getcolor=new String(tdelement.style.backgroundColor); 
	var Rcolor=getcolor.match(/[0-9]+/g);
	var Gcolor=getcolor.match(/[0-9]+/g);
	var Bcolor=getcolor.match(/[0-9]+/g);
	var greencolor=128;
	var redcolor=255;
	var blackcolor=0;
	var colortonumber=Number(Rcolor[0].toString(10))+Number(Gcolor[1].toString(10))+Number(Bcolor[2].toString(10));
     var checkinfo= new String(document.getElementById("informationsection").style.display);
	if(checkinfo.match("none")!=null)	
	{
	if(colortonumber==Number(greencolor)){
		//if green #008000 OR 32768 goto red #ff0000 OR 16711680
		tdelement.style.backgroundColor="#ff0000";
	}
	else if(colortonumber==Number(redcolor)){
		//if red #ff0000 goto black #000000 OR 0
		tdelement.style.backgroundColor="#000000";
	}
	else if(colortonumber==Number(blackcolor)){
		//if black go to green
		tdelement.style.backgroundColor="#008000";
	}else{}

	//call function to check all picimage for the correct values
	//all picimagemark = black AND all picimage do not equal black 
	if (checktrue()==true){
		document.getElementById("informationsection").style.display="block";//maybe use table-row
	}
	else{}

	}
}
