const list = document.getElementById("infi-list");
const itemsPerPage = 10;
let currentPage = 1;

// Function to add a specified number of list items
function addListItems(numItems) {
  for (let i = 1; i <= numItems; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${(currentPage - 1) * itemsPerPage + i}`;
    list.appendChild(listItem);
  }
}

// Initial population of list
addListItems(itemsPerPage);

// Function to handle adding more items when reaching the end
function loadMoreItems() {
  const scrollHeight = list.scrollHeight;
  const scrollTop = list.scrollTop;
  const clientHeight = list.clientHeight;

  if (scrollHeight - scrollTop <= clientHeight + 1) {
    currentPage++;
    addListItems(itemsPerPage); // Add more items
  }
}

// Add event listener for scrolling
list.addEventListener("scroll", loadMoreItems);
