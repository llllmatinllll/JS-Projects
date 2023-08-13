const $ = document;
let autoCompleteWrapper = $.querySelector(".search-input");
let SearchInputElem = $.querySelector("input");
let autoCompleteBox = $.querySelector(".autocom-box");
SearchInputElem.addEventListener("keyup", () => {
    let searchValue = SearchInputElem.value;
    if (searchValue) {
        autoCompleteWrapper.classList.add("active");
        let filteredWords = suggestions.filter((word) => {
            return word.toLowerCase().startsWith(searchValue.toLowerCase());
        });
        suggestionWordsGenerator(filteredWords);
    } else {
        autoCompleteWrapper.classList.remove("active");
    }
});
let suggestionWordsGenerator = (wordsArray) => {
    let listItemsArray = wordsArray.map((word) => {
        return "<li>" + word + "</li>";
    });
    let customListItem;
    if (!listItemsArray.length) {
        customListItem = "<li>" + SearchInputElem.value + "</li>";
    } else {
        customListItem = listItemsArray.join(" ");
    }
    autoCompleteBox.innerHTML = customListItem;
    select();
};

let select = () => {
    let allListItems = autoCompleteBox.querySelectorAll("li");
    allListItems.forEach((wordItem) => {
        wordItem.addEventListener("click", (event) => {
            SearchInputElem.value = event.target.textContent;
            autoCompleteWrapper.classList.remove("active");
        });
    });
};
