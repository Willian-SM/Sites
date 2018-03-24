//Validação Nome
function validaNome(nome){
	if (nome == '' || nome == null){
		document.getElementById('nome').style.background = 'orange';
		document.getElementById('p-nome').innerHTML = "O nome não pode estar vazio.";
		return 0;
	}else{
		return 1;
	}
}

function addNome(){
	document.getElementById('nome').style.background = '#fff';
	document.getElementById('p-nome').innerHTML = '';
}

//Validação Email
function validaEmail(email){
	if (email == '' || email == null){
		document.getElementById('email').style.background = 'orange';
	}

/*	arroba <= 0 pq não pode ser o 1º caractere
	pontoCom <= 1 pq deve ser ao menos o 4º caractere em diante */
	var arroba = email.indexOf('@');
	var ponto = email.indexOf('.');

	if (arroba <= 0 || ponto <= 2){
		document.getElementById('p-email').innerHTML = "O conteúdo digitado não parece ser um e-mail.";
		return 0;
	}else{
		return 1;
	}
}

function addEmail(){
	document.getElementById('email').style.background = '#fff';
	document.getElementById('p-email').innerHTML = '';
}

//Validação Mensagem Email
function validaMsg(msg){
	if (msg == '' || msg == null){
		document.getElementById('msg').style.background = 'orange';
		document.getElementById('p-msg').innerHTML = "A mensagem não pode estar vazia."
		return 0;
	}else{
		return 1;
	}
}

function addMsg(){
		document.getElementById('msg').style.background = '#fff';
		document.getElementById('p-msg').innerHTML = '';
}

//Validação Mensagem Email
function validaCampos(){
	if (validaNome(document.getElementById('nome').value) == 1 &&
		validaEmail(document.getElementById('email').value) == 1 &&
		validaMsg(document.getElementById('msg').value) == 1){					
			
		//document.forms['contato'].action = "#";
		document.forms['contato'].submit();
		document.getElementById('form-enviado').innerHTML = "Dados enviados com sucesso!";
		limpaCampos();
	}else{
		alert("Revise os campos do formulário.");
	}
}

function limpaCampos(){
	document.getElementById('nome').value = '';
	document.getElementById('email').value = null;
	document.getElementById('msg').value = '';
}