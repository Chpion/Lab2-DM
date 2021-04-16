function Matrix() {
	var n = document.getElementById("n").value;
	var tab = "<table>";
	if (n > 0) {
	for (var i = 0; i < n; i++) {
		tab += '<tr>'
		for (var j = 0; j < n; j++) {
			tab += '<td><input type="number" name = "value" placeholder = "0 or 1" min="0" max="1"></td>';
        }
		tab += '</tr>';       
	}
	tab += "</table>";
	}       // цикл для матрицы n x n
	else {
		alert("Введите значение > 0");   // если введено n < 0, выведет сообщение об этом
	} 
	document.getElementById('matrix').innerHTML = tab; 
}
function valid() {
	var n = document.getElementById("n").value;
	var arr1 = document.getElementsByName("value");
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
                    return alert("ДОПУСТИМЫЕ ЗНАЧЕНИЯ ТОЛЬКО 0 и 1. ИСПРАВЬТЕ!!!");
                }
		}	 
    }
    return true;
}

function graph() {
    var n = document.getElementById("n").value;
	var arr1 = document.getElementsByName("value");
	var s = 0;
	var arr = [];
	for (var i = 0; i < n; i++){
	    arr[i] = [];
	    for (var j = 0; j < n; j++){
			arr[i][j] = arr1[s].value;
			s++;
	    }	
	}
	for (var i = 0; i < n; i++){
	    for (var j = 0; j < n; j++){
	        if(arr[i][j] != arr[j][i]) { //условие для неориентированного графа(не может быть асимметричным)
				return alert("ГРАФ НЕ ЯВЛЯЕТСЯ НЕОРИЕНТИРОВАННЫМ");
		    }
	    }	
	}
    return true;        
}   

function resh() {
	valid();
}