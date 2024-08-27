// script.js
document.addEventListener("DOMContentLoaded", function() {
    const createListButton = document.getElementById("createListButton");
    const listNameInput = document.getElementById("listNameInput");
    const bucketLists = document.getElementById("bucketLists");

    const listContainer = document.getElementById("listContainer");
    const currentListName = document.getElementById("currentListName");
    const bucketInput = document.getElementById("bucketInput");
    const addItemButton = document.getElementById("addItemButton");
    const bucketList = document.getElementById("bucketList");
    const backButton = document.getElementById("backButton");

    let lists = {};
    let currentList = null;

    createListButton.addEventListener("click", function() {
        const listName = listNameInput.value.trim();
        if (listName !== "" && !lists[listName]) {
            lists[listName] = [];
            listNameInput.value = "";
            updateBucketLists();
        }
    });

    addItemButton.addEventListener("click", function() {
        const itemText = bucketInput.value.trim();
        if (itemText !== "" && currentList) {
            lists[currentList].push(itemText);
            bucketInput.value = "";
            updateCurrentList();
        }
    });

    bucketInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addItemButton.click();
        }
    });

    backButton.addEventListener("click", function() {
        listContainer.classList.add("hidden");
        updateBucketLists();
    });

    function updateBucketLists() {
        bucketLists.innerHTML = "";
        for (const listName in lists) {
            const listItem = document.createElement("li");
            listItem.textContent = listName;
            listItem.addEventListener("click", function() {
                currentList = listName;
                currentListName.textContent = listName;
                listContainer.classList.remove("hidden");
                updateCurrentList();
            });
            bucketLists.appendChild(listItem);
        }
    }

    function updateCurrentList() {
        bucketList.innerHTML = "";
        if (currentList) {
            lists[currentList].forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = item;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", function() {
                    lists[currentList].splice(index, 1);
                    updateCurrentList();
                });

                listItem.appendChild(deleteButton);
                bucketList.appendChild(listItem);
            });
        }
    }
});
