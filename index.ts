// Import stylesheets
import './style.css';
import Queue from './queue';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Basic Queue Implementation - TypeScript </h1>
<code>
`;

const q = new Queue();
q.enqueue(1);
q.show(); // Queue: [ 1 ]
q.enqueue(2);
q.show(); // Queue: [ 1, 2 ]
q.enqueue(3);
q.show(); // Queue: [ 1, 2, 3 ]
console.log('Dequeue: ', q.dequeue()); // 1
q.show(); // Queue: [ 2, 3 ]
console.log('Size: ', q.size());
q.enqueue(4);
q.enqueue(5);
q.show();
console.log('Clear ->');
q.clear();
q.show(); // Queue: [ ]
