$(document).ready(function(){
	var window = document.getElementById('window-input');
	var mini = document.getElementById('pom-input');	
		function oneCount(arr){
			var sum = 0;
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length;j++)
				{
				if(arr[j] == '*' || arr[j] == '/')
					{
						if(arr[j] == '*') {sum = parseFloat(arr[j-1]) * parseFloat(arr[j+1]);
												 arr[j+1] = sum;
												 arr.splice(j-1,2);
												 console.log(arr);
												}
						else{sum = parseFloat(arr[j-1]) / parseFloat(arr[j+1]);
												 arr[j+1] = sum;
												 arr.splice(j-1,2);
							  					console.log(arr);
							 }
						break;
					}
				  
				}
				 if(arr[i] == '+' || arr[i] == '-')
					{
						if(arr[i] == '+') {sum = parseFloat(arr[i-1]) + parseFloat(arr[i+1]);
												 arr[i+1] = sum;
												 arr.splice(i-1,2);
												 console.log(arr);
												}
										  else{sum = parseFloat(arr[i-1]) - parseFloat(arr[i+1]);
												 arr[i+1] = sum;
												 arr.splice(i-1,2);
												 console.log(arr);
												}
						break;
					}
			}
			if(arr.length > 1) oneCount(arr);
			else {window.innerHTML = arr[0];
					mini.innerHTML = 'You are a pirat';
				  }
		}
	
	$(".button").click(function(){ 
		var cliced = $(this).attr('id');
		// AC - reset kalkulatora
		if(cliced == 'AC')
			{
				window.innerHTML = '';
			}
		// DEL - usuwanie ostatniego znaku/liczby z okienka
		if(cliced == 'DEL')
			{
				window.innerHTML = window.innerHTML.slice(0, -1);
			}
		if(window.innerHTML[window.innerHTML.length - 1] == '-' && window.innerHTML[window.innerHTML.length - 2] == '-')
			{
				if(cliced == '-'){window.innerHTML = ''; mini.innerHTML = 'Two Mathematical signs in a row?';}
			}
		// brak możliwości wpisanie dwóch znaków matematycznych pod rząd
		if(window.innerHTML[window.innerHTML.length - 1] == '*' || window.innerHTML[window.innerHTML.length - 1] == '/' || window.innerHTML[window.innerHTML.length - 1] == '+' || window.innerHTML[window.innerHTML.length - 1] == '.')
			{
				if(cliced == '.' || cliced == '+' || cliced == '/' || cliced == '*') {window.innerHTML = ''; 
																											 mini.innerHTML = 'Two Mathematical signs in a row?';}
					
				else if(cliced == '0' || cliced == '1' || cliced == '2' || cliced == '3' || cliced == '4' || cliced == '5' || cliced == '6' || cliced == '7' || cliced == '8' || cliced == '9') $(window).append(cliced);
			}
		// wstukiwanie liczb i znaków w kalkulator
		else if(cliced == '.'|| cliced == '0' || cliced == '1' || cliced == '2' || cliced == '3' || cliced == '4' || cliced == '5' || cliced == '6' || cliced == '7' || cliced == '8' || cliced == '9' || cliced == '+' || cliced == '-' || cliced == '/' || cliced == '*')
			{
				$(window).append(cliced);
			}
		//ustawienie maksymalnej liczby znaków
		if(window.innerHTML.split('').length > 18)
			{
				window.innerHTML = '';
				mini.innerHTML = 'You can enter max 18 marks';
			}
		//Cały mechanizm Liczący
		if(cliced == 'equal')
			{	var gArr = [];
				var numbers = ['0','1','2','3','4','5','6','7','8','9'];
				var sings = ['+', '-','/','*'];
				var arr = window.innerHTML.split('');
				var index = 0;
			 	var str = '';
				for(var i in arr)
					{
						
						if(i == 0 && (arr[i] == '-' || arr[i] == '+') || arr[i-1] == '-')
							{
								str+=arr[i];
							}
						else if(i==0 && (arr[i] == '/' || arr[i] == '*'))
							{
								mini.innerHTML = 'You are a fucking idiot';
							}
						else if(arr[i] == '+' || arr[i] == '-' || arr[i] == '/' || arr[i] == '*')
							{
								gArr[index] = str;
								str = '';
								gArr[index + 1] = arr[i];
								index+=2;
							}
						else if(i == arr.length-1)
							{
								str+=arr[i];
								gArr[index] = str;
							}
						else str+=arr[i];
						
					};
			 if(gArr.length == 1)
				{
				  window.innerHTML = gArr;
				}
			else oneCount(gArr);
			}
	});
	

});