Here is a simple console application in TypeScript that implements an event queue with prioritized events. The events are stored in a priority queue, where higher priority events are dequeued before lower priority events.

```typescript
class PriorityQueue {
    private queue: any[];

    constructor() {
        this.queue = [];
    }

    enqueue(item: any, priority: number) {
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (priority > this.queue[i].priority) {
                this.queue.splice(i, 0, {item, priority});
                added = true;
                break;
            }
        }
        if (!added) {
            this.queue.push({item, priority});
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class EventQueue {
    private queue: PriorityQueue;

    constructor() {
        this.queue = new PriorityQueue();
    }

    addEvent(event: any, priority: number) {
        this.queue.enqueue(event, priority);
    }

    nextEvent() {
        return this.queue.dequeue();
    }

    hasEvents() {
        return !this.queue.isEmpty();
    }
}

let eventQueue = new EventQueue();
eventQueue.addEvent("Event1", 1);
eventQueue.addEvent("Event2", 2);
eventQueue.addEvent("Event3", 3);

while (eventQueue.hasEvents()) {
    console.log(eventQueue.nextEvent());
}
```

In this code, the `PriorityQueue` class is a simple implementation of a priority queue using an array. The `enqueue` method adds items to the queue in priority order, with higher priority items added before lower priority items. The `dequeue` method removes and returns the highest priority item from the queue.

The `EventQueue` class is a wrapper around the `PriorityQueue` class that provides methods for adding and retrieving events. The `addEvent` method adds an event to the queue with a specified priority, and the `nextEvent` method retrieves the next event from the queue. The `hasEvents` method checks if there are any events left in the queue.

The main part of the program creates an `EventQueue`, adds some events to it with different priorities, and then retrieves and prints the events in priority order.