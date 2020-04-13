function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}
function peek() {
  return this.dataStore[this.top - 1];
}
function pop() {
  return this.dataStore[--this.top];
}
function clear() {
  this.top = 0;
}
function length() {
  return this.top;
}
pez = new Stack();
stack = new Stack();
temp = new Stack();
stack.push("white");
stack.push("red");
stack.push("yellow");
stack.push("white");
stack.push("red");
stack.push("yellow");
stack.push("white");
stack.push("red");
while (stack.top > 0)
  if (stack.peek() === "yellow") stack.pop();
  else temp.push(stack.pop());
while (temp.top > 0) pez.push(temp.pop());
console.log(pez.dataStore);
