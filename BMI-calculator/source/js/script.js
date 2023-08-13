const $ = document;
let rangeWeight = $.querySelector("#weight");
let rangeHeight = $.querySelector("#height");
let weightValue = $.querySelector("#weight-val");
let heightValue = $.querySelector("#height-val");
let container = $.querySelector(".container");
let result = $.querySelector("#result");
let category = $.querySelector("#category");
rangeWeight.addEventListener("change", () => {
    weightValue.innerHTML = rangeWeight.value + " kg";
});
rangeHeight.addEventListener("change", () => {
    heightValue.innerHTML = rangeHeight.value + " cm";
});

let calculateBMI = () => {
    let height = rangeHeight.value / 100;
    let weight = rangeWeight.value;
    let BMI = (weight / Math.pow(height, 2)).toFixed(2);
    result.innerHTML = BMI;
    if (BMI < 18.5) {
        category.innerHTML = "Underweight";
        result.style.color = "#87b1d9";
    } else if (BMI > 18.5 && BMI < 24.9) {
        category.innerHTML = "Normal";
        result.style.color = "#3dd365";
    } else if (BMI > 25 && BMI < 29.9) {
        category.innerHTML = "Overweight";
        result.style.color = "#eee133";
    } else if (BMI > 30 && BMI < 34.9) {
        category.innerHTML = "Obese";
        result.style.color = "#fd802e";
    } else if (BMI > 35) {
        category.innerHTML = "Extremely Obese";
        result.style.color = "#f95353";
    }
};

container.addEventListener("change", calculateBMI);
