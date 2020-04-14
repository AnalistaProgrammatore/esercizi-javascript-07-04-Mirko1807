function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null) && !(currNode.next.element == "head")) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
function find(item) {
  var currNode = this.head;
  while (currNode.element != item && !(currNode.next.element == item)) {
    currNode = currNode.next;
  }
  return currNode;
}
function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function advance(n) {
  let current = this.head;
  for (let i = 0; i < n; i++) current = current.next;
  return current;
}
let circle = new LList();
let j = 0;
for (let i = 0; i < 9; i++) circle.insert(++j, "head");
circle.display();
for (let i = 0; i < j - 2; i++) circle.remove(circle.advance(3).element);

console.log("inizia la mattanza...\ni supersititi sono:");
circle.display();
