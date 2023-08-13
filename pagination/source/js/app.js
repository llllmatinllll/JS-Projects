const $ = document;
const listItems = [
    {id: 1, name: "Amin", family: "Saeedi Rad"},
    {id: 2, name: "Amir", family: "Zehtab"},
    {id: 3, name: "Qadir", family: "Yolme"},
    {id: 4, name: "Babak", family: "Mohammadi"},
    {id: 5, name: "Hasan", family: "Ghahreman Zadeh"},

    {id: 6, name: "Amin", family: "Saeedi Rad"},
    {id: 7, name: "Amir", family: "Zehtab"},
    {id: 8, name: "Qadir", family: "Yolme"},
    {id: 9, name: "Babak", family: "Mohammadi"},
    {id: 10, name: "Hasan", family: "Ghahreman Zadeh"},

    {id: 11, name: "Saeed", family: "Ehsani"},
    {id: 12, name: "Siamak", family: "Modiri"},
    {id: 13, name: "Mohsen", family: "Ansari"},
    {id: 14, name: "Mehran", family: "Ali Pour"},
    {id: 15, name: "Amir Hossein", family: "Mahtabi"},

    {id: 16, name: "Hossein", family: "Amino"},
    {id: 17, name: "Melika", family: "Ehsani"},
    {id: 18, name: "Qadir", family: "Majidi"},
    {id: 19, name: "Fatemeh", family: "Alilou"},
    {id: 20, name: "Ehsan", family: "Tayyebi"},

    {id: 21, name: "Zahra", family: "Gholami"},
    {id: 22, name: "Amin", family: "Saeedi Rad"},
    {id: 23, name: "Amir", family: "Zehtab"},
    {id: 24, name: "Qadir", family: "Yolme"},
    {id: 25, name: "Babak", family: "Mohammadi"},
    {id: 26, name: "Hasan", family: "Ghahreman Zadeh"},

    {id: 27, name: "Amin", family: "Saeedi Rad"},
    {id: 28, name: "Amir", family: "Zehtab"},
    {id: 29, name: "Qadir", family: "Yolme"},
    {id: 30, name: "Babak", family: "Mohammadi"},
    {id: 31, name: "Hasan", family: "Ghahreman Zadeh"},

    {id: 32, name: "Saeed", family: "Ehsani"},
    {id: 33, name: "Siamak", family: "Modiri"},
    {id: 34, name: "Mohsen", family: "Ansari"},
    {id: 35, name: "Mehran", family: "Ali Pour"},
    {id: 36, name: "Amir Hossein", family: "Mahtabi"},

    {id: 37, name: "Hossein", family: "Amino"},
    {id: 38, name: "Melika", family: "Ehsani"},
    {id: 39, name: "Qadir", family: "Majidi"},
    {id: 40, name: "Fatemeh", family: "Alilou"},
    {id: 41, name: "Ehsan", family: "Tayyebi"},

    {id: 42, name: "Zahra", family: "Gholami"},
    {id: 43, name: "Reza", family: "Sahebi"},
];

let userListContainer = document.querySelector("#list");
let paginationContainer = document.querySelector("#pagination");

let currentPage = 1;
let rowsCount = 8;

let displayUsersList = (allUsers, userContainer, row, current) => {
    userContainer.innerHTML = "";
    let lastIndex = row * current;
    let firstIndex = lastIndex - row;
    let pageNatedUsers = allUsers.slice(firstIndex, lastIndex);
    pageNatedUsers.forEach((user) => {
        let userElem = $.createElement("div");
        userElem.classList.add("item");
        userElem.innerHTML = user.name + " " + user.family;
        userContainer.append(userElem);
    });
    console.log(pageNatedUsers);
};

let setupPagenation = (allUsers, paginationContainer, row) => {
    paginationContainer.innerHTML = "";
    let pageCount = Math.ceil(allUsers.length / row);
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationBtnGenerator(i, allUsers);
        paginationContainer.append(btn);
    }
};

let paginationBtnGenerator = (current, allUsers) => {
    let btn = $.createElement("button");
    btn.innerHTML = current;
    if (current === currentPage) {
        btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
        currentPage = current;
        displayUsersList(listItems, userListContainer, rowsCount, currentPage);
        let prevPage = $.querySelector("button.active");
        prevPage.classList.remove("active");
        btn.classList.add("active");
    });

    return btn;
};

displayUsersList(listItems, userListContainer, rowsCount, currentPage);
setupPagenation(listItems, paginationContainer, rowsCount);
