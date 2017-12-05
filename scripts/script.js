
var first_number = document.getElementById("first-number");
var second_number = document.getElementById("second-number");
var plus = document.getElementsByClassName("plus")[0];
var minus = document.getElementsByClassName("minus")[0];
var myltiply = document.getElementsByClassName("multiply")[0];
var divide = document.getElementsByClassName("divide")[0];
var result = document.getElementById("result");
plus.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) + (+second_number.value)).toFixed(2);
})
minus.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) - (+second_number.value)).toFixed(2);
})
myltiply.addEventListener("click", function(){
  result.innerHTML = ((+first_number.value) * (+second_number.value)).toFixed(2);
})
divide.addEventListener("click", function(){
  if(+first_number.value != 0 && +second_number.value == 0 ){
    result.innerHTML = "Вы делите на ноль, результат бесконечность";
  }else if(+first_number.value == 0 && +second_number.value == 0){
    result.innerHTML = "Результат не определён";
  }else{
    result.innerHTML = ((+first_number.value) / (+second_number.value)).toFixed(2);
  }
})
