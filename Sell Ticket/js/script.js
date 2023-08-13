let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
    PleaseSelect: ["Select City ..."],
    Iran: ["Tehran", "Tabriz", "Shiraz", "Esfahan", "Mashhad"],
    Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
    US: ["Los Angles", "San Diego", "Chicago"],
};

countrySelectBox.addEventListener("change", () => {
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    citySelect.innerHTML = "";

    mainCountryCities.forEach((city) => {
        citySelect.innerHTML += "<option>" + city + "</option>";
    });
});
