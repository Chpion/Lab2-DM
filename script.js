function matrix() {
	let matrix = document.getElementById("input").value.split("\n");
	let higth = matrix.length; 
	let width = matrix[0].split(" ").length; 
	let valid = 0;
	for (let i = 0; i < matrix.length; i++) {
		let line = matrix[i].split(" ");

		for (let j = 0; j < line.length; j++) {
			if(!(line[j] == 0 || line[j] == 1)) {
				valid = 1;
			}
		}

		if(line.length != width) {
			valid = 2;
		}
		else if (line.length != higth){
			valid = 2;
		}
	}
	if (valid == 1) {
		alert("В матрице не может быть элементов, отличных от нуля или единицы!")
	}
	else if (valid == 2){
		alert("Матрица не квадратная!")
	}
}

function reflex() {
	let matrix = document.getElementById("input").value.split("\n");
	var flag = true;
	for (var i = 0; i < matrix.length; i++){
		let line = matrix[i].split(" ");
		for (var j = 0; j < line.length; j++){
			if(i == j) {
				if(line[j] != 1) {
					flag = false;
				}				
			}
		}	
	}	
	if(flag) {
		document.getElementById('reflex').innerHTML = 'Рефлексивно';
	}
	else {
		document.getElementById('reflex').innerHTML = 'Не является рефлексивным';
	}
}

function symm() {
	let matrix = document.getElementById("input").value.split("\n");
	var flag = true;
	var arr = [];
	for (var i = 0; i < matrix.length; i++){
		let line = matrix[i].split(" ");
		arr[i] = [];
	    for (var j = 0; j < matrix.length; j++){
			arr[i][j] = line[j]; 
	    }	
	}
	for (var i = 0; i < matrix.length; i++){
	    for (var j = 0; j < matrix.length; j++){
	        if(arr[i][j] != arr[j][i]) { 
				flag = false;
		    }
	    }	
	}
	if(flag){
		document.getElementById('symm').innerHTML = 'Отношение является СИММЕТРИЧНЫМИ';	
	}
	else{
		document.getElementById('symm').innerHTML = 'Отношение НЕ является СИММЕТРИЧНЫМИ';	
	}
	
}  

function cososymm() {
	let matrix = document.getElementById("input").value.split("\n");
	var flag = true;
	var arr = [];
	for (var i = 0; i < matrix.length; i++){
		arr[i] = [];
		let line = matrix[i].split(" ");
		for (var j = 0; j < matrix.length; j++){
			arr[i][j] = line[j];
		}	
	}	
	for (var i = 0; i < matrix.length; i++){				
		for (var j = 0; j < matrix.length; j++){
				if(arr[i][j] != -(arr[j][i])) {
					flag = false;
				}			
		}	
	}	
	if(flag) {
		document.getElementById('cososymm').innerHTML = 'Кососимметрично';
	}
	else {
		document.getElementById('cososymm').innerHTML = 'Не является кососимметричным';
	}
}

function trans() {
	let matrix = document.getElementById("input").value.split("\n");
	var flag = true;
	var arr2 = [];
	var arr = [];						
	for (var i = 0; i < matrix.length; i++){
		arr2[i] = [];
		arr[i] = [];
		let line = matrix[i].split(" ");
		for (var j = 0; j < matrix.length; j++){
			arr2[i][j] = line[j];
			arr[i][j] = 0;
		}	
	}
	
	for (var i = 0; i < matrix.length; i++) {		
		for (var j = 0; j < matrix.length; j++) {
			for (var z = 0; z < matrix.length; z++) {
				arr[i][j] += arr2[i][z] * arr2[z][j];
			}
			if (arr[i][j] > 1) {
				arr[i][j] = 1;
			}
		}		
	}	
	
	for (var i = 0; i < matrix.length; i++){		
		for (var j = 0; j < matrix.length; j++){
			if (arr2[i][j] < arr[i][j]) {
				flag = false;
			}				
		}		
	}	
	
	if(flag) {
		document.getElementById('trans').innerHTML = 'Транзитивно';
	}
	else {
		document.getElementById('trans').innerHTML = 'Не является транзитивным';
	}
}

function result() {
	matrix();
    reflex();
    symm();
	cososymm();
    trans();
}