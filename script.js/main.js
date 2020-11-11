let num = {
    num1: document.getElementById("num1"),
    num2: document.getElementById("num2"),
    operator:document.getElementById("operate"),
    result: document.getElementById("output")

}
  
function solve(){



switch ( num.operator.value){
   case '+': num.result.value = parseFloat(num.num1.value) + parseFloat( num.num2.value )
   break;
   case '-': num.result.value = parseFloat(num.num1.value) - parseFloat( num.num2.value )
   break;
   case '*': num.result.value = parseFloat(num.num1.value) * parseFloat( num.num2.value )
   break;
   case '/': num.result.value = parseFloat(num.num1.value) / parseFloat( num.num2.value )
   break;
   default : alert("Invalid Operator")
   break;

}
} 

