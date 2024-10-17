var result = document.getElementById("result");

function display(number) {
  result.value += number;
}

function calculate() {
  try {
    var final_number = eval(result.value);
    result.value = final_number;
  } catch (error) {
    result.value = "Error";
  }
}

function clrs() {
  result.value = "";
}

function dle() {
  result.value = result.value.slice(0, -1);
}

