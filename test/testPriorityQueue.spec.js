"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const PriorityQueue_1 = require("../src/PriorityQueue");
describe("Priority queue test", () => {
    it("should equal the max when top()", () => {
        let pq = new PriorityQueue_1.PriorityQueue();
        pq.enqueue([3, 4, 6, 8]);
        assert_1.equal(pq.top(), 8);
        let pq2 = new PriorityQueue_1.PriorityQueue();
        pq2.enqueue([3, 8, 5, 5]);
        assert_1.equal(pq2.top(), 8);
        let pq3 = new PriorityQueue_1.PriorityQueue();
        pq3.enqueue([3, 5, 5, 4]);
        assert_1.equal(pq3.top(), 5);
    });
    it('should equal when pop', () => {
        let pq = new PriorityQueue_1.PriorityQueue();
        pq.enqueue([3, 7, 4, 6, 8]);
        assert_1.equal(pq.top(), 8);
        assert_1.equal(pq.pop(), 8);
        assert_1.equal(pq.top(), 7);
        assert_1.equal(pq.pop(), 7);
        assert_1.equal(pq.top(), 6);
        assert_1.equal(pq.pop(), 6);
        assert_1.notEqual(pq.top(), 3);
        assert_1.equal(pq.top(), 4);
    });
    it('should equal when size is 1', () => {
        let pq = new PriorityQueue_1.PriorityQueue();
        pq.enqueue([3]);
        assert_1.equal(pq.pop(), 3);
        assert_1.equal(pq.pop(), null);
    });
    it('should pass when size is 2', () => {
        let pq = new PriorityQueue_1.PriorityQueue();
        pq.enqueue([3, 4]);
        assert_1.equal(pq.top(), 4);
        assert_1.equal(pq.pop(), 4);
        assert_1.equal(pq.top(), 3);
    });
});
//# sourceMappingURL=testPriorityQueue.spec.js.map