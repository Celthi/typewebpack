/**
 * priority queue to the max number in the queue
 *
 */
export class PriorityQueue<T> {
    // array used to store the values,
    // the 0-index is the largest
    //      0
    //    /   \
    //    1    2
    //    /\   /\
    //   3  4  5 6
    // left < right
    // left : i*2 + 1
    // right : i*2 + 2
    // parent:   |(i-1)/2| round down to zero
    arr: Array<T>;
    constructor() {
        this.arr = [];
    }
    top(): T {
        return this.arr[0];
    }
    add(ele: T) {
        this.arr.push(ele);
        let prePos = this.arr.length - 1;
        this.bubbleUp(ele, prePos);
    }
    bubbleUp(ele: T, prePos: number) {
        if (prePos < 1) return;
        let parent = Math.floor((prePos - 1) / 2);
        if (this.arr[parent] < ele) {
            this.swap(parent, prePos);
            this.bubbleUp(ele, parent);
        }
    }
    enqueue(it: Array<T>) {
        it.forEach(element => {
            this.add(element);
        });
    }
    swap(left: number, right: number) {
        let temp = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = temp;
    }
    swapIfLeftLTRight(left: number, right: number) {
        if (left < this.arr.length - 1 && right < this.arr.length - 1) {
            if (this.arr[left] < this.arr[right]) {
                this.swap(left, right);
            }
        }
    }
    getIndexWithLargerValue(left: number, right: number): number {
        if (left < this.arr.length - 1 && right < this.arr.length - 1) {
            if (this.arr[left] >= this.arr[right]) {
                return left;
            }
            return right;
        }
        return left < right ? left : right;
    }
    bubbleDown(pos: number) {
        if (this.arr.length <= 1) {
            return;
        }
        let bubble = this.arr[pos];
        let left = pos * 2 + 1;
        let right = pos * 2 + 2;
        let down = this.getIndexWithLargerValue(left, right);
        if (bubble < this.arr[down]) {
            this.swap(down, pos);
            this.bubbleDown(down);
        }
    }
    pop(): T {
        if (this.arr.length >= 1) {
            let top = this.arr[0];
            this.swap(this.arr.length - 1, 0);
            this.arr.pop();
            if (this.arr.length >= 2) {
                this.bubbleDown(0);

            }
            return top;
        }
        return undefined;
    }
}

