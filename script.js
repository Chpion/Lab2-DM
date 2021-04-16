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

function resh() {
}