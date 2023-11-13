
document.getElementById("saveButton").addEventListener("click", function () {
    const key = document.getElementById("keyInput").value;
    const value = document.getElementById("valueInput").value;
    if (key && value) {
        localStorage.setItem(key, value);
        alert(`Key "${key}" & value of "${value}" have been added`);
    } else {
        alert("please complete key&value");
    }
});

//

const keys2 = Object.keys(localStorage);
const keysList = document.getElementById("keysList");
for (const key of keys) {
    const listItem = document.createElement("li");
    listItem.textContent = key;
    keysList.appendChild(listItem);
}

//

const keys = Object.keys(localStorage);
const keyValueList = document.getElementById("keyValueList");
keys.forEach(function (key) {
    const listItem = document.createElement("li");
    listItem.textContent = key;
    const displayButton = document.createElement("button");
    displayButton.textContent = "Show value";
    displayButton.addEventListener("click", function () {
        const value = localStorage.getItem(key);
        console.log(`Vlaue for"${key}" is ${value}`);
    });
    listItem.appendChild(displayButton);
    keyValueList.appendChild(listItem);
});
