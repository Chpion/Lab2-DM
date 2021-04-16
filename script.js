function CreateMatrix() {
	var n = document.getElementById("n").value;
	if (n < 0) {
		alert("n должно быть положительным!");
	}
    var tab = '<table>';
    for (var i = 0; i < n; i++) {
		tab += '<tr>';
		for(var j = 0; j < n; j++) {
			tab += '<td> <input type="number" class="value" min="0" max="1"></td>';
		}
		tab += '</tr>';       
    }
    tab += '</table>';
	document.getElementById('matrix').innerHTML = tab; 

}
function valid() {
    var n = document.getElementById("n").value;
    var arr1 = document.getElementsByClassName("value"); // получяем коллекцию элементов
    var s = 0;
    var arr = [];  
    for (var i = 0; i < n; i++){
        arr[i] = [];
        for (var j = 0; j < n; j++){
        	arr[i][j] = arr1[s].value;  //запись элементов коллекции в массив
		s++; 
		}	
	}
    for (var i = 0; i < n; i++){   
        for (var j = 0; j < n; j++){
            if(arr[i][j] > 1 || arr[i][j] < 0 ){  // условие для элементов меньше 0 и больше 1
                return alert("Ошибка!Значения могут быть только 0 и 1!");
            }
	    }	 
    }
    return true;  
}

function reflex() {
	var n = document.getElementById("n").value;
	var arr1 = document.getElementsByClassName("value");
	var count = 0;
	var flag = true;
	for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++){
			if(i == j) {
				if(arr1[count].value != 1) {
					flag = false;
				}				
			}
			count++;
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
    var n = document.getElementById("n").value;
	var arr1 = document.getElementsByClassName("value");  // получаем коллекцию всех элементов
	var s = 0;
	var result = 'Отношение является СИММЕТРИЧНЫМ';
	var arr = [];
	for (var i = 0; i < n; i++){
	    arr[i] = [];
	    for (var j = 0; j < n; j++){
		arr[i][j] = arr1[s].value;  // записываем элементы в двумерный массив
		s++;
	    }	
	}
	for (var i = 0; i < n; i++){
	    for (var j = 0; j < n; j++){
	        if(arr[i][j] != arr[j][i]) {  // если существует ребро из i в j, и не существует ребра ведущего из j в i, то граф несимметричен
				result = 'Отношение не является СИММЕТРИЧНЫМИ';
		    }
	    }	
	}
	document.getElementById('symm').innerHTML = result;	
}  

function cososymm() {
	var n = document.getElementById("n").value;
	var arr = document.getElementsByClassName("value");
	var count = 0;
	var flag = true;
	var arr2 = [];
	for (var i = 0; i < n; i++){
		arr2[i] = [];
		for (var j = 0; j < n; j++){
			arr2[i][j] = arr[count].value;
			count++;
		}	
	}	
	for (var i = 0; i < n; i++){				
		for (var j = 0; j < n; j++){
				if(arr2[i][j] != -(arr2[j][i])) {
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

function trans(){
    var n = document.getElementById("n").value;
    var arr1 = document.getElementsByClassName("value"); // получаем коллекцию всех элементов
    var s = 0;
    var result = 'Отношение является ТРАНЗИТИВНЫМ';
	var arr = [];
	for (var i = 0; i < n; i++){
	    arr[i] = [];
	    for (var j = 0; j < n; j++){
			arr[i][j] = arr1[s].value;   // записываем элементы в двумерный массив
		    s++;
	    }	
	}
    for (var i = 0; i < n; i++){
		for (var j = 0; j < n; j++){
            if(arr[i][j] == 1) {  // если существует ребро, соединяющее вершины i и j
                for (var z = 0; z < n; z++) {
                    if (arr[j][z] == !arr[i][z]) {   // если из вершины j в вершину z ведёт ребро, но из i в z - нет, то граф нетранзитивен
						result = "Отношение НЕ является ТРАНЗИТИВНЫМ";
                    }
				}
            }
        }
    }
    document.getElementById('trans').innerHTML = result;
}


function result() {
	valid();
    reflex();
    symm();
	cososymm();
    trans();
}