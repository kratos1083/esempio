
function changeTitle(){
	if (document.getElementById('cambia_titolo').value == ""){
		document.getElementById('ciao').innerHTML = "Titolo vuoto";
	}else{
		document.getElementById('ciao').innerHTML = document.getElementById('cambia_titolo').value;
	}
}

function changeResult(){

	switch(document.getElementById('operazione').value){
		case '+':
			document.getElementById('ris').innerHTML = (Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value));

		break;
		case '-':
			document.getElementById('ris').innerHTML = (Number(document.getElementById('num1').value) - Number(document.getElementById('num2').value));		break;
		case '*':
			document.getElementById('ris').innerHTML = (Number(document.getElementById('num1').value) * Number(document.getElementById('num2').value));
		break;
		case '/':
			document.getElementById('ris').innerHTML = (Number(document.getElementById('num1').value) / Number(document.getElementById('num2').value));		break;
	}

}