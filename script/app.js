function createAnElement(element) {
  return document.createElement(element);
}

function addText(element, Text) {
  return (element.innerText = Text);
}

function appendChild(child, parent) {
  return parent.appendChild(child);
}

function select(selector) {
  return document.querySelector(selector);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}

const shoppinglist = ["milk", "Tea"];
const ol = select("ol");

listen(document, "DOMContentLoaded", displayItems);

function displayItems() {
  shoppinglist.forEach(createAlistItem);
}

function createAlistItem(Item) {
  const li = createAnElement("li");
  addText(li, Item);
  appendChild(li, ol);
}
