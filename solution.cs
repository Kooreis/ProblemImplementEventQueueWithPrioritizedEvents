```javascript
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(event, priority) {
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, {event, priority});
                added = true;
                break;
            }
        }
        if (!added) {
            this.queue.push({event, priority});
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return !this.queue.length;
    }
}

class EventQueue {
    constructor() {
        this.queue = new PriorityQueue();
    }

    addEvent(event, priority) {
        this.queue.enqueue(event, priority);
    }

    nextEvent() {
        return this.queue.dequeue();
    }

    isEmpty() {
        return this.queue.isEmpty();
    }
}

const eventQueue = new EventQueue();

eventQueue.addEvent('Event1', 1);
eventQueue.addEvent('Event2', 2);
eventQueue.addEvent('Event3', 3);

while (!eventQueue.isEmpty()) {
    console.log(eventQueue.nextEvent());
}
```