```cpp
#include <iostream>
#include <queue>
#include <functional>

struct Event {
    int priority;
    std::string name;

    Event(int priority, std::string name) : priority(priority), name(name) {}

    bool operator<(const Event& e) const {
        return priority < e.priority;
    }
};

int main() {
    std::priority_queue<Event> eventQueue;

    eventQueue.push(Event(3, "Event 1"));
    eventQueue.push(Event(1, "Event 2"));
    eventQueue.push(Event(2, "Event 3"));

    while (!eventQueue.empty()) {
        Event e = eventQueue.top();
        std::cout << "Processing " << e.name << " with priority " << e.priority << std::endl;
        eventQueue.pop();
    }

    return 0;
}
```