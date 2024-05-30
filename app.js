const display = document.getElementById("result");

const displayAdd = (i) => {
  display.value += i;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    window.alert("Error");
  }
};

const displayRemove = () => {
  display.value = display.value.slice(0, display.value.length - 1);
};
