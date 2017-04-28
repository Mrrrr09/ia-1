var TTT = 0;


function num1(num, num3){
	var TTT = TTT + 1;
	var UUU = 25;
	var CCC = 0;
	UUU = num;
	CCC = num3;
	var hol1 = true;
	if (TTT === 3) {
		return 0;
		TTT = 0;
	}
	var hol2 = Math.floor((Math.random() * 100) + 1);
	while (hol1 == true){
		if (hol2 < UUU && hol2 > CCC){
			hol1 = false;
			return hol2;
			break;
		}else{
			hol2 = Math.floor((Math.random() * 100) + 1);
		}
	}
}






function Hola(letra){
	var Hola = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var ty = true;
	var num = 0;
	var nep = 'a';
	while (ty){
		if (letra == 'f'){
			ty = false;
			return 'f';
			break;
		}
		if (letra == 'k'){
			ty = false;
			return 'k';
			break;
		}
		if (letra == 'p'){
			ty = false;
			return 'p';
			break;
		}
		if (letra == 'u'){
			ty = false;
			return 'u';
			break;
		}
		if (letra == 'z'){
			ty = false;
			return 'z';
			break;
		}
		for (num = 0; num<100; num++){
			if (nep != letra)
				nep = Hola[num1(5, 0)];
			else{
				ty = false;
				return nep;
				break;
			}	
		}
		for (num = 0; num<100; num++){
			if (nep != letra)
				nep = Hola[num1(10, 5)];
			else{
				ty = false;
				return nep;
				break;
			}	
		}
		for (num = 0; num<100; num++){
			if (nep != letra)
				nep = Hola[num1(15, 10)];
			else{
				ty = false;
				return nep;
				break;
			}	
		}
		for (num = 0; num<100; num++){
			if (nep != letra)
				nep = Hola[num1(20, 15)];
			else{
				ty = false;
				return nep;
				break;
			}	
		}
		for (num = 0; num<100; num++){
			if (nep != letra)
				nep = Hola[num1(25, 20)];
			else{
				ty = false;
				return nep;
				break;
			}	
		}
	}
}
function I(){
	x = document.getElementById("myText").value;
	alert(Hola(x));
}
