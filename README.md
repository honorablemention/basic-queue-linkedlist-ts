# basic-queue-linkedlist-ts

```
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
```

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/honorablemention/basic-queue-linkedlist-ts)
