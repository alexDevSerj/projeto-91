var question_number
var input_box
var check_buttom
var row

function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";

  question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
  input_box = "<br>resposta : <input type='text' id='input_check_box'>";
  check_buttom = "<br><br><button class='btn btn-info' onclick='check()'>checar</buttom>"
  row = question_number + input_box + check_buttom ;

  document.getElementById("output").innerHTML = row;

} 

