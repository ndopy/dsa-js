import { Stack } from './Stack.mjs';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack.getSize());
stack.printAll();
console.log(stack.isEmpty());

stack.pop();
stack.pop();
stack.pop();

console.log(stack.isEmpty());
console.log(stack.getSize());
