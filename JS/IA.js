function num1(){
	var hol1 = true;
	var hol2 = Math.floor((Math.random() * 100) + 1);
	while (hol1 == true){
		if (hol2 > 25){
			hol2 = Math.floor((Math.random() * 100) + 1);
		}else{
			hol1 = false;
			return hol2;
		}
	}
}
function GGG(){
	var Hola = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	return Hola[num1()];
}
function YYY(num){
	var text = GGG();
	var tu = true;
	while (tu == true){
		if (text.length != num)
			text = text + GGG();
		else{
			tu = false;
			return text;
		}
	}
}
function myFunction(HolaMundo){
	var hol = true;
	var hol1 =  HolaMundo.length;
	var iii = YYY(hol1);
	while (hol == true){
		if (iii != HolaMundo){
			iii = YYY(hol1);
		}else {
			hol = false;
			return iii;
		}
	}
}
myFunction("Hola");