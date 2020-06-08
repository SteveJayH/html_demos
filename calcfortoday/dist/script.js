//Calculate Tip
var price = 0.0;
var month = 0;

function p1_click(){
  var replacedString = "선택 : 100,000 원";
  price = 100000;
  document.getElementsByTagName("h4")[0].innerHTML = replacedString;
}
function p2_click(){
  var replacedString = "선택 : 1,000,000 원";
  price = 1000000;
  document.getElementsByTagName("h4")[0].innerHTML = replacedString;
}
function p3_click(){
  var replacedString = "선택 : 5,000,000 원";
  price = 5000000;
  document.getElementsByTagName("h4")[0].innerHTML = replacedString;
}
function p4_click(){
  function updateValueone(e){
    price = Number(e.target.value) * 10000;
    amount = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementsByTagName("h4")[0].innerHTML = "선택 : " + amount + " 원";
  }
  const input = document.getElementById("billamt1");
  input.addEventListener('input', updateValueone);
}
function p5_click(){
  var replacedString = "선택 : 1달"
  month = 1;
  document.getElementsByTagName("h4")[1].innerHTML = replacedString;
}
function p6_click(){
  var replacedString = "선택 : 1년"
  month = 12;
  document.getElementsByTagName("h4")[1].innerHTML = replacedString;
}
function p7_click(){
  var replacedString = "선택 : 5년"
  month = 60;
  document.getElementsByTagName("h4")[1].innerHTML = replacedString;
}
function p8_click(){
  function updateValuetwo(e){
    month = Number(e.target.value);
    n_year = Math.floor(month/12);
    n_month = (month % 12).toString();
    amount = month.toString();
    if(n_year>=1){
      document.getElementsByTagName("h4")[1].innerHTML = "선택 : " + String(n_year) +"년 " + String(n_month) + "달";
    }
    else{
      document.getElementsByTagName("h4")[1].innerHTML = "선택 : " + amount + "달";
    }
    
  }
  const input = document.getElementById("billamt2");
  input.addEventListener('input', updateValuetwo);
}
function onlyNumber(){
  if((event.keyCode<48)||(event.keyCode>57))
    event.returnValue=false;
}

function calculateTip() {

  // alert("Please enter values");
  // return;
  //Calculate tip
  if (price == 0.0 || month == 0){
    alert("가격이랑 기간을 입력해주세요!");
    return;
  }
  var total = 0.0;
  //round to two decimal places
  total = Math.round(price) / (month*31);
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(0);
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total + "원";
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function() {
  alert("hi");
  calculateTip();
};
