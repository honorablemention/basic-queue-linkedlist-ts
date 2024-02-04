import LinkedList from './linked-list';

/**
 * Standard Queue (Linked List Implementation)
 */
class Queue<T> {
  private _list: LinkedList<T>;

  constructor() {
    this._list = new LinkedList<T>();
  }

  /**
   * @name enqueue(data: T)
   * @argument data: T
   * @description Add data to end of Queue
   * @throws Error if queue is at max; data will not be enqueued
   * @returns Queue<T>
   */
  enqueue(data: T): Queue<T> {
    this._list.add(data);
    return this;
  }

  /**
   * @name dequeue()
   * @description Remove data from front of Queue
   * @throws Error if queue is empty; data will not be dequeued
   * @returns T
   */
  dequeue(): T {
    return this._list.removeAt(0);
  }

  /**
   * @name clear()
   * @description Removes all elements from Queue
   * @returns Queue<T>
   */
  clear(): Queue<T> {
    while (!this._list.isEmpty()) {
      this.dequeue();
    }
    return this;
  }

  /**
   * @name size()
   * @description The size of the Queue<T>
   * @returns number
   */
  size(): number {
    return this._list.size();
  }

  /**
   * @name show()
   * @description Neatly prints Queue contents to console
   * @returns void
   */
  show(): void {
    console.log(`
      Queue: [ ${this._list.get().join(', ')} ]
    `);
  }
}

export default Queue;
