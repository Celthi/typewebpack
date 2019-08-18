import { equal, notEqual } from "assert";
import { PriorityQueue } from '../src/PriorityQueue';
describe("Priority queue test", () => {
    it("should equal the max when top()", () => {
        let pq = new PriorityQueue<number>();
        pq.enqueue([3, 4, 6, 8]);
        equal(pq.top(), 8);
        let pq2 = new PriorityQueue<number>();
        pq2.enqueue([3, 8, 5, 5]);
        equal(pq2.top(), 8);
        let pq3 = new PriorityQueue<number>();
        pq3.enqueue([3, 5, 5, 4]);
        equal(pq3.top(), 5);

    });
    it('should equal when pop', () => {
        let pq = new PriorityQueue<number>();
        pq.enqueue([3, 7, 4, 6, 8]);
        equal(pq.top(), 8);
        equal(pq.pop(), 8);
        equal(pq.top(), 7);

        equal(pq.pop(), 7);
        equal(pq.top(), 6);

        equal(pq.pop(), 6);
        notEqual(pq.top(), 3);
        equal(pq.top(), 4);
    })
    it('should equal when size is 1', () => {
        let pq = new PriorityQueue<number>();
        pq.enqueue([3]);
        equal(pq.pop(), 3);
        equal(pq.pop(), null);
    })
    it('should pass when size is 2', () => {
        let pq = new PriorityQueue<number>();
        pq.enqueue([3, 4]);
        equal(pq.top(), 4);
        equal(pq.pop(), 4);
        equal(pq.top(), 3);
    })
});
