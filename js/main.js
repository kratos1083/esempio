
function changeTitle(){
	if (document.getElementById('cambia_titolo').value == ""){
		document.getElementById('ciao').innerHTML = "Titolo vuoto";
	}else{
		document.getElementById('ciao').innerHTML = document.getElementById('cambia_titolo').value;
	}
}

function changeResult(){
	var ris;
	switch(document.getElementById('operazione').value){
		case '+':
			ris = Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value);
		break;
		case '-':
			ris = Number(document.getElementById('num1').value) - Number(document.getElementById('num2').value);
		break;
		case '*':
			ris = Number(document.getElementById('num1').value) * Number(document.getElementById('num2').value);		
		break;
		case '/':
			ris = Number(document.getElementById('num1').value) / Number(document.getElementById('num2').value);			
		break;
	}

	if (ris==0){
				document.getElementById('ris').innerHTML = "0";
			}else {
			document.getElementById('ris').innerHTML = ris ? ris : "Non valida";
		}

}