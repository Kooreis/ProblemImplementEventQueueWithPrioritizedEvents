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