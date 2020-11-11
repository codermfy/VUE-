var name="mfy"
var age=18
var flag=true
function sum(num1,num2){
	return num1+num2
}
//1.导出方式1
export{
	flag,sum
}
//2.导出方式2
export var num1="1111"
export var height=1.88

//3.导出类/函数
export var mul=function(a,b){
	return a*b
}

export class Person{
	run(){
		console.log("跑")
	}
}

//4.export default 导入端取名随意 不允许同时存在多个default
// const address="beijing"
// export default address

export default function (argument){
	console.log(argument);
}