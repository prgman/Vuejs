<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" 
	src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$("h1").text("es6 js");
/* # es6이후 변경되는 js 처리 내용..
1. let, const 설정..
	1) var는  전역변수로 사용하여, 지역변수의 구분이 모호하다.
	2) let선언을 통해서 전역변수와 지역변수를 구분하여 처리할 수 있다.
	3) const는 상수로 일단 데이터를 할당하면 변경을 할 수 없게 처리한다.
 */		
 		let msg = "전역변수";
		console.log("변수 msg:"+msg);
		function outer(){
			let msg="지역변수";
			console.log("지역변수 msg:"+msg);
		}
		outer();
		console.log("함수 호출 후 변수 msg:"+msg);
 		var msg2 = "var전역변수";
		console.log("변수 msg2:"+msg2);
		function outer2(){
			var msg2="var지역변수";
			console.log("var 지역변수 msg2:"+msg);
		}
		outer2();
		console.log("함수 호출 후 변수 var msg2:"+msg);
/*
2. `(astoro)문자열 표시방식 처리..  
 	1) 줄바꿈처리 그대로 표기되며,
 	2) ${데이터}
 */		
 		let num01 = 25;
 		let num02 = 70;
 		console.log(`
 				num01 : ${num01},
 				num02 : ${num02},
 				sum : ${num01+num02}
 				`);
/*
3. 가변 매개변수 처리 ..  
 
 */ 		
				
		
	});
	// 기본 매개변수는 2개 초과는 가변변수로 사용된다. 
	// favorFood는 배열로 선언되어 활용된다..
	function foodReport(name,age, ...favorFood){
		console.log("이름:"+name);
		console.log("나이:"+age);
		console.log("좋아하는 음식:"+favorFood);
	}
	foodReport("홍길동",25,"짜장면","짬뽕");
	foodReport("신길동",29,"초밥","냉면","한정식","불고기");
/* 
4. 화살표 함수 처리
	함수의 매개변수, return 데이터를 최소한으로 처리하는 화살표 함수를
	지원하고 있다.
	1) let 함수명 = (매개변수1,매개변수2) => 리턴할데이터;
	함수명(데이터1,데이터2)
 */	
 	let plus = function(num01, num02){
		return num01+num02;
	}
	console.log( "기본함수처리:"+plus(25,30) );
	let multi = (num01,num02) => num01*num02;
	console.log("화살표 함수 처리:"+multi(3000,2));
	
	
</script>
</head>
<body>
<h1></h1>

</body>
</html>
