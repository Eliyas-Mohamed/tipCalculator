// output text selection and changing the visibility
var output_text=document.getElementsByTagName("p")[0]
output_text.style.visibility="hidden";
// adding event listener to calculate button to call the tipCalc(0)
var calc_btn=document.querySelectorAll("button")[0]
calc_btn.addEventListener("click",function (){
  // To get the value of bill amount enterd by the client and  converting it to number type
  var billAmount=document.querySelectorAll("input#bill") [0].value;
  billAmount=Number(billAmount);
  // To get the value of service rate selected by the client which is already a string type
  var serviceRate=document.querySelectorAll("select.dropdown")[0].value;
  // To get the value of no. of waiter enterd by the client and  converting it to number type
  var numberOfServers=document.querySelectorAll("input")[1].value;
  numberOfServers=Number(numberOfServers);
  // if conditional statment to determine the percentage of tips to be reduced from bill amount
  var serviceRateValue;
  // if servicerate is poor 10% of billAmount should be reduced and vice versa
  if (serviceRate==="poor"){
    serviceRateValue=10;
  }
  else if(serviceRate==="fair"){
    serviceRateValue=20;
  }
  else if(serviceRate==="good"){
    serviceRateValue=30;
  }
  else if(serviceRate==="verygood"){
    serviceRateValue=40;
  }
  else if(serviceRate==="excellent"){
    serviceRateValue=50;
  }
  else if(serviceRate==="clickhere"){
    alert("please enter the service rate");
  }
  // calling defined tip_Calc fn with 3 input as arguments
  tip_Calc(billAmount,serviceRateValue,numberOfServers)
  // changing visibility of output text
  output_text.style.visibility="visible";

});
function tip_Calc(BA,SR,NS){
  // declaration adn calculation of tip amount
  var tipAmount;
  tipAmount=(BA*(SR/100));
  // declation and calculation of tip per person
  var tipPerPerson=tipAmount/NS
  // changing the text to ouput text paragraph with calculated output values
  output_text.innerHTML=("$"+tipAmount+" is the total tip amount with each $"+tipPerPerson);

}
