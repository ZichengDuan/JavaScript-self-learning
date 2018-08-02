function caseTest(){
	var x;
	var d = new Date().getDay();
	
	switch(d){
		case 0 : x = "今天星期日";
		break;

		case 1 : x = "今天星期一";
		break;

		case 2 : x = "星期2";
		break;

		case 3 : x = "星期3";
		break;

		case 4 : x = "星期4";
		break;

		case 5 : x = "星期5";
		break;

		case 6 : x = "星期6";
		break;
	}
	document.write(x);
	document.getElementById("demo").innerHTML = x;
}