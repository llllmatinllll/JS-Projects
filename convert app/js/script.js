let $ = document;

const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const convertor = $.querySelector("#convertor");
const result = $.querySelector(".result");
const convertBtn = $.querySelector(".convertButton");
const resetBtn = $.querySelector(".resetButton");
const changeBtn = $.querySelector(".changeButton");

let convert = () => {
    convertor.value = Number(convertor.value);
    console.log(convertor.value);
    if (convertor.value == "" || isNaN(convertor.value)) {
        result.innerHTML = "Please Enter the temprature";
        result.style.color = "darkred";
    } else {
        result.style.color = "yellow";
        if (firstValue.innerHTML === "°C") {
            answer = convertor.value * 1.8 + 32;
            result.innerHTML = answer + "°F";
        } else {
            answer = (convertor.value - 32) * 0.555;
            result.innerHTML = answer + "°C";
        }
    }
};
let reset = () => {
    convertor.value = "";
    result.innerHTML = "";
};
let swap = () => {
    if (firstValue.innerHTML == "°C") {
        firstValue.innerHTML = "°F";
        secondValue.innerHTML = "°C";
        convertor.setAttribute("placeholder", "°F");
        $.title = "°F to °C";
    } else {
        firstValue.innerHTML = "°C";
        secondValue.innerHTML = "°F";
        convertor.setAttribute("placeholder", "°C");
        $.title = "°C to °F";
    }
};

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
